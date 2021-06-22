import chromium from "chrome-aws-lambda";
import path from "path";
import fs from "fs";
import handlebars from "handlebars";
import dayjs from "dayjs";
import { S3} from "aws-sdk";
import { document } from "../utils/dynamodbClient";

interface ICreateCertificate {
  id: string;
  name: string;
  grade: string;
}

interface ITemplate {
  id: string;
  name: string;
  grade: string;
  date: string;
  medal: string;
}

const compile = async function (data: ITemplate) {
  const filePath = path.join(process.cwd(), "src", "template", "certificate.hbs");

  const html = fs.readFileSync(filePath, "utf-8");

  return handlebars.compile(html)(data);
}



export const handle = async (event) => {

  const { id, name, grade } = JSON.parse(event.body) as ICreateCertificate;

  await document.put({
    TableName: "users_certificates",
    Item: {
      id,
      name,
      grade,
    }
  }).promise();

  const medalPath = path.join(process.cwd(), "src", "template", "selo.png");

  const medal = fs.readFileSync(medalPath, "base64");

  const data: ITemplate = {
    date: dayjs().format("DD/MM/YYY"),
    grade,
    name,
    id,
    medal,
  }

  //gerar certificate

  //compilar usando handlebars
  const content = await compile(data);

  //transformar em PDF

  const browser = await chromium.puppeteer.launch({
    headless: true,
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath
  });

  const page = await browser.newPage();

  await page.setContent(content);

  const pdf = await page.pdf({
    format: "a4",
    landscape: true,
    path: process.env.IS_OFFLINE ? "certificate.pdf" : null,
    printBackground: true,
    preferCSSPageSize: true,
  });

  await browser.close();


  // salvar no s3


  return {
    statusCode: 201,
    body: JSON.stringify({
      message: "Certificate Created!",
    }),
    headers: {
      "Content-type": "application/json"
    },
  };
};
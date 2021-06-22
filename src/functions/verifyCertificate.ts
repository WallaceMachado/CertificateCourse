import {  APIGatewayProxyHandler } from "aws-lambda";
import { document } from "../utils/dynamodbClient";

export const handle: APIGatewayProxyHandler = async (event) => {
  const { id } = event.pathParameters;

  const response = await document.query({
    TableName: "users_certificates",
    KeyConditionExpression: "id= :id",
    ExpressionAttributeValues: {
      ":id": id
    }
  }).promise();

  const user_certificate = response.Items[0];

  if(user_certificate){
    return{
      statusCode: 200,
      body: JSON.stringify({
        message: "Certificado válido",
        name: user_certificate.name,
        url: `https://serverlesscertificatesignitewm.s3.sa-east-1.amazonaws.com/${id}.pdf`
      })
    }

  }

  return {
    statusCode: 400,
      body: JSON.stringify({
        message: "Certificado invalido",
        
      })
  }
}
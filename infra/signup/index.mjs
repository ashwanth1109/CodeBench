import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const dynamo = new DynamoDBClient();
const ses = new SESClient();

export const handler = async (event) => {
  const headers = {
    "Content-Type": "application/json",
  };

  try {
    const body = JSON.parse(event.body || "{}");
    const { name, email, company, designation } = body;

    if (!name || !email) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "Name and email are required" }),
      };
    }

    const timestamp = new Date().toISOString();

    await dynamo.send(
      new PutItemCommand({
        TableName: process.env.TABLE_NAME,
        Item: {
          email: { S: email },
          name: { S: name },
          company: { S: company || "" },
          designation: { S: designation || "" },
          signedUpAt: { S: timestamp },
        },
      })
    );

    await ses.send(
      new SendEmailCommand({
        Source: process.env.NOTIFICATION_EMAIL,
        Destination: { ToAddresses: [process.env.NOTIFICATION_EMAIL] },
        Message: {
          Subject: { Data: `New CodeBench Signup: ${name}` },
          Body: {
            Text: {
              Data: [
                "New early access signup for CodeBench:",
                "",
                `Name: ${name}`,
                `Email: ${email}`,
                `Company: ${company || "N/A"}`,
                `Designation: ${designation || "N/A"}`,
                `Timestamp: ${timestamp}`,
              ].join("\n"),
            },
          },
        },
      })
    );

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: "Success" }),
    };
  } catch (error) {
    console.error("Signup error:", error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "Internal server error" }),
    };
  }
};

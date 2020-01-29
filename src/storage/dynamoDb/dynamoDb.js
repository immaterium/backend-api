const AWS = require("aws-sdk");

const options = process.env.IS_OFFLINE
  ? {
      region: "localhost",
      endpoint: "http://localhost:8000",
      accessKeyId: "DEFAULT_ACCESS_KEY",
      secretAccessKey: "DEFAULT_SECRET"
    }
  : {};

const dynamoClient = new AWS.DynamoDB.DocumentClient(options);

const put = (...args) => dynamoClient.put(...args).promise();
const query = (...args) => dynamoClient.query(...args).promise();
const get = (...args) =>
  dynamoClient
    .get(...args)
    .promise()
    .then(results => {
      if (results.Item) {
        return results.Item;
      }
      throw new Error("No Document Found");
    });
const remove = (...args) => dynamoClient.delete(...args).promise();

module.exports = { put, get, remove, query };

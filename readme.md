# Musket API

# API

### GET: /quota/:id

Example:
```
GET: /transactions/S0000001I
```

Returns:
```
{
    "remainingQuota": 0,
    "history": [
        {
            "quantity": 5,
            "transactionTime": 1580330434981
        }
    ]
}
```

### POST: /transactions/:id

Example:
```
POST: /transactions/S0000001I

body: {
  "quantity": 5
}
```

Returns:
```
[
    {
        "quantity": 5,
        "transactionTime": 1580330642589
    }
]
```

### GET: /auth

This endpoint requires only an 'Authorization' key-value pair in your HTTP header, if you are an authorised operator this will return 200 "OK".

### POST: /auth

This endpoint is protected by AWS_IAM, if you are using Postman please use AWS Signature for authorization method.
If you are using this from the commandline using `sls invoke`, you can invoke it like this if you have the right IAM permissions:

```
sls invoke -f postAuthorisationToken -d '{ "body": "{\"authToken\": \"93b7d487-8935-493b-8bde-d8954e48b3be\",\"role\": \"OPERATOR\",\"userReference\": \"S0000003E\"}" }'
```

# Configuration

See .example.env for configurable parameters

# Development

Copy `.env` from a co-worker or insert own credentials to get started. A copy of the .env file is available at `.env.example`

```
npm run dev
```

To run local tests against dynamodb-local, run commands

 `npm run dev` to start the local database

 `npm run integration:local` to run the tests

## Dynamodb 

The development environment uses [serverless-dynamodb-local](https://www.npmjs.com/package/serverless-dynamodb-local) to emulate the dynamodb in AWS.

Install dynamodb locally

```
sls dynamodb install
```

Start dynamodb

```
sls dynamodb start
```

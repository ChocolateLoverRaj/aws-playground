import { DynamoDBClient } from '@aws-sdk/client-dynamodb'
import { config } from 'dotenv'
config()

const dynamoDbClient = new DynamoDBClient({
  region: process.env.AWS_REGION
})

export default dynamoDbClient

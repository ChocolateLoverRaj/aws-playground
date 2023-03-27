import { PutItemCommand } from '@aws-sdk/client-dynamodb'
import dynamoDbClient from './dynamoDbClient.js'

await dynamoDbClient.send(new PutItemCommand({
  TableName: 'programmatically-created-table',
  Item: {
    parentFolder: {
      S: '/'
    },
    name: {
      S: 'video.webm'
    },
    isFolder: {
      BOOL: false
    },
    hash: {
      S: '6e032bcb72fc40ec3e6ec08f43453dbc'
    }
  }
}))

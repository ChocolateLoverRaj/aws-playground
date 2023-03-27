import { PutItemCommand } from '@aws-sdk/client-dynamodb'
import dynamoDbClient from './dynamoDbClient.js'

await dynamoDbClient.send(new PutItemCommand({
  TableName: 'programmatically-created-table',
  Item: {
    parentFolder: {
      S: '/'
    },
    name: {
      S: 'folder'
    },
    isFolder: {
      BOOL: true
    }
  }
}))

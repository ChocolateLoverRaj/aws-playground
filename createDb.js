import { BillingMode, CreateTableCommand, KeyType, TableClass } from '@aws-sdk/client-dynamodb'
import dynamoDbClient from './dynamoDbClient.js'

await dynamoDbClient.send(new CreateTableCommand({
  TableName: 'programmatically-created-table',
  AttributeDefinitions: [{
    AttributeName: 'parentFolder',
    AttributeType: 'S'
  }, {
    AttributeName: 'name',
    AttributeType: 'S'
  }],
  KeySchema: [{
    AttributeName: 'parentFolder',
    KeyType: KeyType.HASH
  }, {
    AttributeName: 'name',
    KeyType: KeyType.RANGE
  }],
  BillingMode: BillingMode.PAY_PER_REQUEST,
  TableClass: TableClass.STANDARD_INFREQUENT_ACCESS
}))

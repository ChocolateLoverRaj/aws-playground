import {
  S3Client,
  CreateBucketCommand,
  PutPublicAccessBlockCommand,
  PutObjectCommand,
  RestoreObjectCommand,
  Tier,
  GetObjectRetentionCommand
} from '@aws-sdk/client-s3'
import { config } from 'dotenv'
config()

const s3Client = new S3Client({
  region: process.env.AWS_REGION
})

// await s3Client.send(new CreateBucketCommand({
//     Bucket: 'programmatically-created-bucket'
// }))
// await s3Client.send(new PutPublicAccessBlockCommand({
//     Bucket: 'programmatically-created-bucket',
//     PublicAccessBlockConfiguration: {
//         RestrictPublicBuckets: true,
//         BlockPublicAcls: true,
//         BlockPublicPolicy: true,
//         IgnorePublicAcls: true
//     }
// }))
// await s3Client.send(new PutObjectCommand({
//     Bucket: 'programmatically-created-bucket',
//     Key: 'file.txt',
//     Body: 'This is a message from Node.js',
//     StorageClass: 'DEEP_ARCHIVE'
// }))
console.log(Tier.Bulk)
const restoreOutput = await s3Client.send(new RestoreObjectCommand({
  Bucket: 'programmatically-created-bucket',
  Key: 'file.txt',
  RestoreRequest: {
    Days: 30,
    Description: 'Restore requested by Node.js',
    Tier: Tier.Bulk
  }
}))
console.log(restoreOutput)

const getRetentionOutput = await s3Client.send(new GetObjectRetentionCommand({
  Bucket: 'programmatically-created-bucket',
  Key: 'file.txt'
}))
console.log(getRetentionOutput)

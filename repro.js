import {
  S3Client,
  RestoreObjectCommand,
  Tier
} from '@aws-sdk/client-s3'
import { config } from 'dotenv'
config()

const s3Client = new S3Client({
  region: process.env.AWS_REGION
})
await s3Client.send(new RestoreObjectCommand({
  Bucket: 'programmatically-created-bucket',
  Key: 'file.txt',
  RestoreRequest: {
    Days: 30,
    Tier: Tier.Bulk
  }
}))

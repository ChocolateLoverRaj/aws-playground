import { S3Client } from '@aws-sdk/client-s3'
import { config } from 'dotenv'
config()

const s3Client = new S3Client({
  region: process.env.AWS_REGION
})

export default s3Client

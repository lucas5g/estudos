import { CreateBucketCommand, DeleteBucketCorsCommand, ListBucketsCommand, S3Client } from '@aws-sdk/client-s3'
const s3Config = {
  forcePathStyle: true,
  region: 'us-east-1'
}

const isLocal = process.env.IS_OFFLINE

if (isLocal) {
  const host = process.env.LOCALSTACK ?? 'localhost'
  s3Config.endpoint = `http://${host}:4566`
}

const s3Client = new S3Client(s3Config)

export const S3 = {
  listBuckets: args => {
    return s3Client.send(new ListBucketsCommand(args))
  },
  createBucket: args => s3Client.send(new CreateBucketCommand(args)),
  deleteBucket: args => s3Client.send(new DeleteBucketCorsCommand(args))

}
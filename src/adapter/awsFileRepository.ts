import { FileRepository } from "../core/interface/fileRepository"
import aws from "aws-sdk"

export class AwsFileRepository implements FileRepository {
    public async set(fileName: string, fileContent: Buffer): Promise<void> {
        try {
            const credentials = new aws.SharedIniFileCredentials({ profile: 'default' })
            const bucket = new aws.S3({
                endpoint: "endpoint",
                credentials: credentials
            })
            await bucket.upload({
                Bucket: "bucket",
                Key: fileName,
                Body: fileContent
            }).promise()
            return Promise.resolve()
        }
        catch (error) {
            return Promise.reject(error)
        }
    }
}
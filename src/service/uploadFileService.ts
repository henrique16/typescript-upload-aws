import { UploadFile } from "../core/interface/uploadFile"
import aws from "aws-sdk"

const credentials = new aws.SharedIniFileCredentials({ profile: 'default' })
const bucket = new aws.S3({
    endpoint: "endpoint",
    credentials: credentials
})

export class UploadFileService implements UploadFile {
    async uploadFile(fileName: string, fileContent: Buffer): Promise<void> {
        try {
            await bucket.upload({
                Bucket: "Bucket",
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
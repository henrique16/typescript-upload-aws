import { FileRepository } from "../core/interface/fileRepository"
import aws from "aws-sdk"
import fs from "fs"

export class FileAdapter implements FileRepository {
    public getNames(path: string): Promise<string[]> {
        try {
            const fileNames: string[] = fs.readdirSync(path)
            return Promise.resolve(fileNames)
        }
        catch (error) {
            return Promise.reject(error)
        }
    }

    public getContent(path: string): Promise<Buffer> {
        try {
            const fileContent: Buffer = fs.readFileSync(path)
            return Promise.resolve(fileContent)
        }
        catch (error) {
            return Promise.reject(error)
        }
    }

    public async upload(fileName: string, fileContent: Buffer): Promise<void> {
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
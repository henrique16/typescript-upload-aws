import { GetFileContent } from "../core/interface/getFileContent"
import fs from "fs"

export class GetFileContentService implements GetFileContent {
    getFileContent(path: string): Promise<Buffer> {
        try {
            const fileContent: Buffer = fs.readFileSync(path)
            return Promise.resolve(fileContent)
        }
        catch (error) {
            return Promise.reject(error)
        }
    }
}
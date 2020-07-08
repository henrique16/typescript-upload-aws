import { FileHandler } from "../interface/fileHandler"
import fs from "fs"

export class FsFileHandler implements FileHandler {
    getNames(path: string): Promise<string[]> {
        try {
            const fileNames: string[] = fs.readdirSync(path)
            return Promise.resolve(fileNames)
        }
        catch (error) {
            return Promise.reject(error)
        }
    }
    getContent(path: string): Promise<Buffer> {
        try {
            const fileContent: Buffer = fs.readFileSync(path)
            return Promise.resolve(fileContent)
        }
        catch (error) {
            return Promise.reject(error)
        }
    }
}
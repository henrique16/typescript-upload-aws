import { GetFileNames } from "../core/interface/getFileNames"
import fs from "fs"

export class GetFileNamesService implements GetFileNames {
    getFileNames(path: string): Promise<string[]> {
        try {
            const fileNames: string[] = fs.readdirSync(path)
            return Promise.resolve(fileNames)
        }
        catch (error) {
            return Promise.reject(error)
        }
    }
}
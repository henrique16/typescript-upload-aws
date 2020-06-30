import { UploadFile } from "../interface/uploadFile"
import { GetFileNames } from "../interface/getFileNames"
import { GetFileContent } from "../interface/getFileContent"
const debug = true

export class UploadFilesConcrete {
    private path: string
    private getFileNames: GetFileNames
    private getFileContent: GetFileContent
    private uploadFile: UploadFile

    public constructor(path: string, getFileNames: GetFileNames, getFileContent: GetFileContent, uploadFile: UploadFile) {
        this.path = path
        this.getFileNames = getFileNames
        this.getFileContent = getFileContent
        this.uploadFile = uploadFile
    }

    public async upload(): Promise<void> {
        try {
            const fileNames: string[] = await this.getFileNames.getFileNames(this.path)
            await Promise.all((fileNames.map(async (fileName: string) => {
                let _path: string = `${this.path}/${fileName}`
                let _fileName: string = this.getFileName(fileName)
                let fileContent: Buffer = await this.getFileContent.getFileContent(_path)
                debug && console.log(`start upload`)
                debug && console.log(_fileName)
                await this.uploadFile.uploadFile(_fileName, fileContent)
            })))
            return Promise.resolve()
        }
        catch (error) {
            return Promise.reject(error)
        }
    }

    private getFileName(fileName: string): string {
        const s: string[] = fileName.split("-")
        const sessionId: string = s[1]
        const feed: string = s[3]
        const timeStamp: string = s[4]
        const type: string = s[5]
        const name: string = `${sessionId}-${feed}-${timeStamp}-${type}`
        return name
    }
}
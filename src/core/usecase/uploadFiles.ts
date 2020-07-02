import { FileRepository } from "../interface/fileRepository"
import { FileHandler } from "../interface/fileHandler"

export class UploadFilesConcrete {
    private path: string
    private fileHandler: FileHandler
    private fileRepository: FileRepository

    public constructor(path: string, fileHandler: FileHandler, fileRepository: FileRepository) {
        this.path = path
        this.fileHandler = fileHandler
        this.fileRepository = fileRepository
    }

    public async upload(): Promise<void> {
        try {
            const fileNames: string[] = await this.fileHandler.getNames(this.path)
            await Promise.all((fileNames.map(async (fileName: string) => {
                let path: string = `${this.path}/${fileName}`
                let fileContent: Buffer = await this.fileHandler.getContent(path)
                let _fileName: string = this.getFileName(fileName)
                await this.fileRepository.upload(_fileName, fileContent)
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
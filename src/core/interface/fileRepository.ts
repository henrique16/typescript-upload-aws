export interface FileRepository {
    getNames(path: string): Promise<string[]>
    getContent(path: string) : Promise<Buffer>
    upload(fileName: string, fileContent: Buffer): Promise<void>
}
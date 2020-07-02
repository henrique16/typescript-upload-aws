export interface FileRepository {
    upload(fileName: string, fileContent: Buffer): Promise<void>
}
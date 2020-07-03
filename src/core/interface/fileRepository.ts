export interface FileRepository {
    set(fileName: string, fileContent: Buffer): Promise<void>
}
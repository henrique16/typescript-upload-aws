export interface GetFileContent {
    getFileContent(path: string) : Promise<Buffer>
}
export interface GetFileNames {
    getFileNames(path: string): Promise<string[]>
}
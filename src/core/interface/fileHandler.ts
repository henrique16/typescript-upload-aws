export interface FileHandler {
    getNames(path: string): Promise<string[]>
    getContent(path: string) : Promise<Buffer>
}
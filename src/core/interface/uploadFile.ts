import { Media } from "../domain/media";

export interface UploadFile {
    uploadFile(fileName: string, fileContent: Buffer): Promise<void>
}
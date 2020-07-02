import { UploadFilesConcrete } from "../core/usecase/uploadFiles"
import { AwsFileRepository } from "../adapter/awsFileRepository"
import { FsFileHandler } from "../adapter/fsFileHandler"
import { FileHandler } from "../core/interface/fileHandler"
import { FileRepository } from "../core/interface/fileRepository"

export function uploadFiles(path: string): Promise<void> {
    const fileHandler: FileHandler = new FsFileHandler()
    const fileRepository: FileRepository = new AwsFileRepository()
    const uploadFilesConcrete: UploadFilesConcrete = new UploadFilesConcrete(
        path,
        fileHandler,
        fileRepository
    )
    return uploadFilesConcrete.upload()
}
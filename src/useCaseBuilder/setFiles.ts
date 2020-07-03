import { SetFiles } from "../core/usecase/setFiles"
import { AwsFileRepository } from "../adapter/awsFileRepository"
import { FsFileHandler } from "../adapter/fsFileHandler"
import { FileHandler } from "../core/interface/fileHandler"
import { FileRepository } from "../core/interface/fileRepository"

export function setFiles(path: string): Promise<void> {
    const fileHandler: FileHandler = new FsFileHandler()
    const fileRepository: FileRepository = new AwsFileRepository()
    const uploadFilesConcrete: SetFiles = new SetFiles(
        path,
        fileHandler,
        fileRepository
    )
    return uploadFilesConcrete.set()
}
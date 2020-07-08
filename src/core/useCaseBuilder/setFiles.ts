import { SetFiles } from "../usecase/setFiles"
import { AwsFileRepository } from "../adapter/awsFileRepository"
import { FsFileHandler } from "../adapter/fsFileHandler"
import { FileHandler } from "../interface/fileHandler"
import { FileRepository } from "../interface/fileRepository"

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
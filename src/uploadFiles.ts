import { UploadFilesConcrete } from "./core/usecase/uploadFiles"
import { GetFileNamesService } from "./service/getFileNamesService"
import { GetFileContentService } from "./service/getFileContentService"
import { UploadFileService } from "./service/uploadFileService"

function uploadFiles(path: string): Promise<void> {
    return new UploadFilesConcrete(
        path,
        new GetFileNamesService(),
        new GetFileContentService(),
        new UploadFileService()
    ).upload()
}

export default uploadFiles
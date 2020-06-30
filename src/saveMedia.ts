import { SaveMediaService } from "./service/saveMediaService"
import { SaveMediasConcrete } from "./core/usecase/saveMedias"
import { GetFileNamesService } from "./service/getFileNamesService"

function saveMedia(path: string) {
    return new SaveMediasConcrete(
        path,
        new GetFileNamesService(),
        new SaveMediaService()
    ).save()
}

export default saveMedia
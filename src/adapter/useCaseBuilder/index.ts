import { UploadFilesConcrete } from "../../core/usecase/uploadFiles"
import { SaveMediaConcrete } from "../../core/usecase/saveMedia"
import { Media } from "../../core/domain/media"
import { FileAdapter } from "../fileAdapter"
import { MediaAdapter } from "../mediaAdapter"

class UseCaseBuilder {
    public uploadFiles(path: string): Promise<void> {
        return new UploadFilesConcrete(
            path,
            new FileAdapter()
        ).upload()
    }

    public saveMedia(media: Media): Promise<void> {
        return new SaveMediaConcrete(
            media,
            new MediaAdapter()
        ).save()
    }
}

export default new UseCaseBuilder()
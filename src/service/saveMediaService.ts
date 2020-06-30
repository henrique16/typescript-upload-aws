import { SaveMedia } from "../core/interface/saveMedia"
import { Media } from "../core/domain/media"

export class SaveMediaService implements SaveMedia {
    saveMedia(medias: Media): Promise<void> {
        return Promise.resolve()
    }
}
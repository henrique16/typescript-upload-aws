import { Media } from "../domain/media"
import { SetMedia } from "../usecase/setMedia"
import { MediaRepository } from "../interface/mediaRepository"
import { InFileMediaRepository } from "../adapter/inFileMediaRepository"

export function setMedia(media: Media): Promise<void> {
    const mediaRepository: MediaRepository = new InFileMediaRepository() 
    const saveMediaConcrete: SetMedia = new SetMedia(media, mediaRepository)
    return saveMediaConcrete.set()
}
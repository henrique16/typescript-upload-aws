import { Media } from "../core/domain/media"
import { SaveMediaConcrete } from "../core/usecase/saveMedia"
import { MediaRepository } from "../core/interface/mediaRepository"
import { InFileMediaRepository } from "../adapter/inFileMediaRepository"

export function saveMedia(media: Media): Promise<void> {
    const mediaRepository: MediaRepository = new InFileMediaRepository() 
    const saveMediaConcrete: SaveMediaConcrete = new SaveMediaConcrete(media, mediaRepository)
    return saveMediaConcrete.save()
}
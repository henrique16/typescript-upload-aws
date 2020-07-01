import { Media, Type } from "../domain/media"
import { MediaRepository } from "../interface/mediaRepository"

export class SaveMediaConcrete {
    private media: Media
    private mediaRepository: MediaRepository

    public constructor(media: Media, mediaRepository: MediaRepository) {
        this.media = media
        this.mediaRepository = mediaRepository
    }

    public async save(): Promise<void> {
        try {
            await this.mediaRepository.save(this.media)
            return Promise.resolve()
        }
        catch (error) {
            return Promise.reject(error)
        }
    }
}
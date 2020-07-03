import { Media, Type } from "../domain/media"
import { MediaRepository } from "../interface/mediaRepository"

export class SetMedia {
    private media: Media
    private mediaRepository: MediaRepository

    public constructor(media: Media, mediaRepository: MediaRepository) {
        this.media = media
        this.mediaRepository = mediaRepository
    }

    public async set(): Promise<void> {
        try {
            await this.mediaRepository.set(this.media)
            return Promise.resolve()
        }
        catch (error) {
            return Promise.reject(error)
        }
    }
}
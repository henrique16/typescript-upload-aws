import { Media } from "../domain/media"

export interface MediaRepository {
    save(media: Media): Promise<void>
}
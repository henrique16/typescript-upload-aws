import { Media } from "../domain/media"

export interface MediaRepository {
    set(media: Media): Promise<void>
}
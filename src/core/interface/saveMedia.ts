import { Media } from "../domain/media";

export interface SaveMedia {
    saveMedia(medias: Media): Promise<void>
}
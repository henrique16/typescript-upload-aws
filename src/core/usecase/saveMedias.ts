import { Media, Type } from "../domain/media"
import { SaveMedia } from "../interface/saveMedia"
import { GetFileNames } from "../interface/getFileNames"

export class SaveMediasConcrete {
    private path: string
    private getFileNames: GetFileNames
    private saveMedia: SaveMedia

    public constructor(path: string, getFileNames: GetFileNames, saveMedia: SaveMedia) {
        this.path = path
        this.getFileNames = getFileNames
        this.saveMedia = saveMedia
    }

    public async save(): Promise<void> {
        try {
            const fileNames: string[] = await this.getFileNames.getFileNames(this.path)
            await Promise.all((fileNames.map(async (fileName: string) => {
                let media: Media | null = this.getMedia(fileName)
                if (!media) throw "media is null"
                await this.saveMedia.saveMedia(media)
            })))
            return Promise.resolve()
        }
        catch (error) {
            return Promise.reject(error)
        }
    }

    private getMedia(fileName: string): Media | null {
        const s: string[] = fileName.split("-")
        const sessionId: number = parseInt(s[1])
        const feed: number = parseInt(s[3])
        const timeStamp: number = parseInt(s[4])
        const type: Type | null = this.getMediaType(s[5])
        if (!type) return null
        return new Media(sessionId, feed, timeStamp, type)
    }

    private getMediaType(value: string): Type | null {
        switch (value) {
            case Type.audio.toString():
                return Type.audio
            case Type.video.toString():
                return Type.video
            case Type.screen.toString():
                return Type.screen
            default:
                return null
        }
    }
}
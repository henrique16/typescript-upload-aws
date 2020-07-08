import { MediaRepository } from "../interface/mediaRepository"
import { Media } from "../domain/media"
import fs from "fs"

export class InFileMediaRepository implements MediaRepository {
    public set(medias: Media): Promise<void> {
        try {
            const repo: string = "C:/work/medias/repo"
            const data = {
                sessionId: medias.sessionId,
                feed: medias.feed,
                timeStamp: medias.timeStamp,
                type: medias.type
            }
            const path: string = `${repo}/${data.sessionId}.txt`
            const dataStr: string = `[${data.sessionId},${JSON.stringify(data)}],\n`
            fs.appendFileSync(path, dataStr)
            return Promise.resolve()
        }
        catch (error) {
            return Promise.reject(error)
        }
    }
}
import { setFiles } from "../useCaseBuilder/setFiles"
import { setMedia } from "../useCaseBuilder/setMedia"
import { FsFileHandler } from "../adapter/fsFileHandler"
import { Media, Type } from "../core/domain/media"
import { FileHandler } from "../core/interface/fileHandler"
const debug = false

export default async function (path: string): Promise<void> {
    try {
        //#region Set File
        debug && console.log("start upload")
        await setFiles(path)
        debug && console.log("sucefully upload")
        //#endregion

        //#region Set Media
        const fileHandler: FileHandler = new FsFileHandler()
        const fileNames: string[] = await fileHandler.getNames(path)
        debug && console.log("start save media")
        await Promise.all((fileNames.map(async (fileName: string) => {
            const s: string[] = splitMulti(fileName, ["-", "."])
            const type: Type = getType(s[5])
            if (type === Type.undefined) throw "type is undefined"
            const media: Media = new Media(
                parseInt(s[1]),
                parseInt(s[3]),
                parseInt(s[4]),
                type
            )
            await setMedia(media)
        })))
        debug && console.log("sucefully save media")
        //#endregion

        return Promise.resolve()
    }
    catch (error) {
        return Promise.reject(error)
    }
}

function splitMulti(value: string, tokens: string[]): string[] {
    const join: string = tokens[0]
    for (const token of tokens) {
        value = value.split(token).join(join)
    }
    const split: string[] = value.split(join)
    return split
}

function getType(value: string): Type {
    switch (value) {
        case Type.audio:
            return Type.audio
        case Type.video:
            return Type.video
        case Type.screen:
            return Type.screen
        default:
            return Type.undefined
    }
}   
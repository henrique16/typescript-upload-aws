import useCase from "../adapter/useCaseBuilder/index"
import { FileAdapter } from "../adapter/fileAdapter"
import { Media, Type } from "../core/domain/media"
const debug = true

class UploadFiles {
    public async uploadFiles(path: string): Promise<void> {
        try {
            //#region Upload File
            debug && console.log("start upload")
            await useCase.uploadFiles(path)
            debug && console.log("sucefully upload")
            //#endregion
    
            //#region Save Media
            const fileAdapter: FileAdapter = new FileAdapter()
            const fileNames: string[] = await fileAdapter.getNames(path)
            debug && console.log("start save media")
            await Promise.all((fileNames.map(async (fileName: string) => {
                const s: string[] = this.splitMulti(fileName, ["-", "."])
                const type: Type = this.getType(s[5])
                if (type === Type.undefined) throw "type is undefined"
                const media: Media = new Media(
                    parseInt(s[1]),
                    parseInt(s[3]),
                    parseInt(s[4]),
                    type
                )
                await useCase.saveMedia(media)
            })))
            debug && console.log("sucefully save media")
            //#endregion
    
            return Promise.resolve()
        }
        catch (error) {
            return Promise.reject(error)
        }
    }

    private splitMulti(value: string, tokens: string[]) {
        const join: string = tokens[0]
        for (const token of tokens) {
            value = value.split(token).join(join)
        }
        const split: string[] = value.split(join)
        return split
    }
    
    private getType(value: string): Type {
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
}

export default new UploadFiles().uploadFiles
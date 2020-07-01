export enum Type {
    undefined = "undefined",
    audio = "audio",
    video = "video",
    screen = "screen"
}

export class Media {
    public sessionId: number
    public feed: number
    public timeStamp: number
    public type: Type

    public constructor(sessionId: number, feed: number, timeStamp: number, type: Type) {
        this.sessionId = sessionId
        this.feed = feed
        this.timeStamp = timeStamp
        this.type = type
    }
}
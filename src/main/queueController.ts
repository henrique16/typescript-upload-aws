import uploadFiles from "./setFiles"
import initQueueProcess from "./initQueueProcess"
import { Queue } from "../core/domain/queue"

const queue: Queue = new Queue()

export function setInQueue(sessionId: number): void {
    queue.set(sessionId)
    const path: string = `${process.env.RAW_MJR}/${sessionId}`
    initQueueProcess(queue, () => uploadFiles(path))
}

export function deleteInQueue(sessionId: number): void {
    queue.delete(sessionId)
}
import { initQueueProcess } from "../useCaseBuilder/initQueueProcess"
import { Queue } from "../core/domain/queue"

export default function (queue: Queue, process: () => Promise<void>): void {
    initQueueProcess(queue, process) 
}
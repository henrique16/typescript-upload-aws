import { InitQueueProcess } from "../core/usecase/initQueueProcess";
import { Queue } from "../core/domain/queue";

export function initQueueProcess(queue: Queue, process: () => Promise<void>): void {
    const initQueueProcess: InitQueueProcess = new InitQueueProcess(queue, process)
    initQueueProcess.init()
}
import { Queue } from "../domain/queue"

export class InitQueueProcess {
    private queue: Queue
    private process: () => Promise<void>
    private isProcess: boolean = false

    public constructor(queue: Queue, process: () => Promise<void>) {
        this.queue = queue
        this.process = process
    }

    public init(): void {
        if (this.isProcess) return
        if (this.queue.array.length === 0) return
        this.isProcess = true
        this.process()
            .then(() => {
                console.log(`sucefully process ${this.process.name}`)
                this.isProcess = false
                this.init()
            })
            .catch(error => {
                console.log(error)
                this.isProcess = false
                this.init()
            })
    }
}
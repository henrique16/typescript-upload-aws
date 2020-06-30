export class Queue {
    public array: number[] = []

    public set(element: number): void {
        this.array.push(element)
    }

    public delete(element: number): void {
        const index: number = this.array.indexOf(element)
        if (index !== -1) this.array.splice(index, 1)
    }

    public getNext(): number {
        const next: number = this.array[0]
        this.array.splice(0, 1)
        return next
    }
}
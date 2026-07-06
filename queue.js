class Queue {
    constructor(size) {
        this.array = [];
        this.currentSize = 0;
        this.maxSize = size;
    }
    enqueue(item) {
        if (this.array.length >= this.maxSize) {
            alert('Queue is already full')
        } else {
            this.array[this.currentSize] = item;
            this.currentSize++
        }
    }
    display() {
        console.log(this.array)
    }
    dequeue() {
        if (this.currentSize === 0) {
            alert(`Queue is already empty`)
            return;
        } else {
            for (let i = 0; i < this.currentSize - 1; i++) {
                this.array[i] = this.array[i + 1]

            }
            this.currentSize--
            this.array.length = this.currentSize;
        }

    }
}

let queue = new Queue(5)
queue.inqueue(20);
queue.display()

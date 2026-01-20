class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    peek() {
      return this.heap.length === 0 ? null : this.heap[0];
    }
  
    insert(val) {
      this.heap.push(val);
      this.bubbleUp();
    }
  
    remove() {
      if (this.heap.length === 0) return null;
      if (this.heap.length === 1) return this.heap.pop();
  
      const min = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.bubbleDown();
      return min;
    }
  
    bubbleUp() {
      let index = this.heap.length - 1;
      while (index > 0) {
        const parent = Math.floor((index - 1) / 2);
        if (this.heap[parent] <= this.heap[index]) break;
        [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
        index = parent;
      }
    }
  
    bubbleDown() {
      let index = 0;
      const length = this.heap.length;
  
      while (true) {
        let smallest = index;
        const left = 2 * index + 1;
        const right = 2 * index + 2;
  
        if (left < length && this.heap[left] < this.heap[smallest]) {
          smallest = left;
        }
        if (right < length && this.heap[right] < this.heap[smallest]) {
          smallest = right;
        }
        if (smallest === index) break;
  
        [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
        index = smallest;
      }
    }
  }

  
const heap = new MinHeap();
heap.insert(5);
console.log(heap.heap)
heap.insert(3);
console.log(heap.heap)
heap.insert(8);
console.log(heap.heap)
heap.insert(1);
console.log(heap.heap)

console.log(heap.peek());   // 1
console.log(heap.remove()); // 1
console.log(heap.remove()); // 3
console.log(heap.heap)
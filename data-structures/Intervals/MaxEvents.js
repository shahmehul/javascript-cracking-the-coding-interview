class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    push(val) {
      this.heap.push(val);
      this._bubbleUp();
    }
  
    pop() {
      if (this.heap.length === 1) return this.heap.pop();
  
      const top = this.heap[0];
      this.heap[0] = this.heap.pop();
      this._bubbleDown();
      return top;
    }
  
    peek() {
      return this.heap[0];
    }
  
    size() {
      return this.heap.length;
    }
  
    _bubbleUp() {
      let idx = this.heap.length - 1;
      while (idx > 0) {
        let parent = Math.floor((idx - 1) / 2);
        if (this.heap[parent] <= this.heap[idx]) break;
        [this.heap[parent], this.heap[idx]] = [this.heap[idx], this.heap[parent]];
        idx = parent;
      }
    }
  
    _bubbleDown() {
      let idx = 0;
      const length = this.heap.length;
  
      while (true) {
        let left = idx * 2 + 1;
        let right = idx * 2 + 2;
        let smallest = idx;
  
        if (left < length && this.heap[left] < this.heap[smallest]) {
          smallest = left;
        }
        if (right < length && this.heap[right] < this.heap[smallest]) {
          smallest = right;
        }
        if (smallest === idx) break;
  
        [this.heap[idx], this.heap[smallest]] = [this.heap[smallest], this.heap[idx]];
        idx = smallest;
      }
    }
  }

function maxEvents(events){
    events.sort((a,b) => a[0] = b[0]); // sort events by start date.
    let mHeap = new MinHeap();
    let attended = 0;
    let i =0;
    let last_day = Math.max(...events.map(e => e[1])); //5
    console.log(last_day);

    for (let day = 1; day <= last_day; day++){
        // add the last days into heap if events start day = day;
        while (i < events.length && day === events[i][0]){
            mHeap.push(events[i][1]);
            i++;
        }

        // remove expired events from heap.
        while (mHeap.size() && mHeap.peek() < day) {
            mHeap.pop();
        }

        // attend first event from the heap.
        if(mHeap.size()){
            mHeap.pop();
            attended++;
        }
    }
    return attended;
}

  const events = [[1,2],[1,2],[1,3],[1,5]];
  console.log('total events attended', maxEvents(events));

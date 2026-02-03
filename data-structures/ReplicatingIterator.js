class RLEIterator {
    constructor(arr) {
      // Original encoded array
      this.arr = arr;
  
      // Points to the current count index (even index)
      this.index = 0;
  
      // Remaining times current value should be returned
      this.remaining = 0;
  
      // Current value being repeated
      this.value = null;
    }
  
    // Checks if there is any element left to return
    hasNext() {
      // Either we are still repeating the current value
      // OR we still have more (count, value) pairs to process
      return this.remaining > 0 || this.index < this.arr.length;
    }
  
    // Returns the next expanded value
    next() {
      // No elements left
      if (!this.hasNext()) return null;
  
      // If current run is exhausted, load next pair
      if (this.remaining === 0) {
        // Read count
        this.remaining = this.arr[this.index];
  
        // Read value
        this.value = this.arr[this.index + 1];
  
        // Move to the next pair
        this.index += 2;
      }
  
      // Consume one occurrence
      this.remaining--;
  
      return this.value;
    }
  }
  
  

const it = new RLEIterator([4,3,2,1]);

const result = [];
while (it.hasNext()) {
  result.push(it.next());
}

console.log(result);
[ 3, 3, 3, 3, 1, 1 ]


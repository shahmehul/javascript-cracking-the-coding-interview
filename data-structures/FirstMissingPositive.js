class MissingPositiveInterval {
    constructor(nums) {
      this.intervals = [];
      this._buildIntervals(nums);
    }
  
    /* ---------- Initialization ---------- */
  
    _buildIntervals(nums) {
      const set = new Set();
      for (const n of nums) {
        if (n > 0) set.add(n);
      }

      console.log(set);
  
      const arr = Array.from(set).sort((a, b) => a - b);
      console.log('arr from set',arr);
      for (const num of arr) {
        this._insert(num);
      }
    }
  
    /* ---------- Core Operations ---------- */
  
    // Find smallest missing positive
    find() {
      if (this.intervals.length === 0 || this.intervals[0][0] > 1) {
        return 1;
      }
      return this.intervals[0][1] + 1;
    }
  
    // Fill smallest missing positive
    fill() {
      const missing = this.find();
      this._insert(missing);
      return missing;
    }
  
    // Delete any number
    delete(x) {
      for (let i = 0; i < this.intervals.length; i++) {
        const [start, end] = this.intervals[i];
  
        if (x < start) return;
        if (x > end) continue;
  
        // Case 1: single element interval
        if (start === end) {
          this.intervals.splice(i, 1);
        }
        // Case 2: remove start
        else if (x === start) {
          this.intervals[i][0]++;
        }
        // Case 3: remove end
        else if (x === end) {
          this.intervals[i][1]--;
        }
        // Case 4: split interval
        else {
          this.intervals.splice(
            i,
            1,
            [start, x - 1],
            [x + 1, end]
          );
        }
        return;
      }
    }
  
    /* ---------- Helpers ---------- */
  
    _insert(x) {
      if (this.intervals.length === 0) {
        this.intervals.push([x, x]);
        console.log('inside if, current interval is',this.intervals);
        return;
      }

      debugger;
  
      for (let i = 0; i < this.intervals.length; i++) {
        let [start, end] = this.intervals[i];
  
        // Already covered
        if (x >= start && x <= end) return;
  
        // Insert before
        if (x === start - 1) {
          this.intervals[i][0] = x;
          this._mergeAround(i);
          return;
        }
  
        // Extend interval
        if (x === end + 1) {
          this.intervals[i][1] = x;
          this._mergeAround(i);
          return;
        }
  
        // Insert new interval
        if (x < start) {
          this.intervals.splice(i, 0, [x, x]);
          return;
        }
      }
  
      // Append at end
      this.intervals.push([x, x]);
    }
  
    _mergeAround(i) {
      // merge with previous
      if (
        i > 0 &&
        this.intervals[i - 1][1] + 1 === this.intervals[i][0]
      ) {
        this.intervals[i - 1][1] = this.intervals[i][1];
        this.intervals.splice(i, 1);
        i--;
      }
  
      // merge with next
      if (
        i < this.intervals.length - 1 &&
        this.intervals[i][1] + 1 === this.intervals[i + 1][0]
      ) {
        this.intervals[i][1] = this.intervals[i + 1][1];
        this.intervals.splice(i + 1, 1);
      }
    }
  
    /* ---------- Debug ---------- */
  
    getIntervals() {
      return this.intervals;
    }
  }

  
const ds = new MissingPositiveInterval([3, 4, -1, 1]);

console.log(ds.getIntervals()); // [[1,1],[3,4]]

console.log(ds.find()); // 2

console.log(ds.fill()); // 2
console.log(ds.getIntervals()); // [[1,4]]

ds.delete(3);
console.log(ds.getIntervals()); // [[1,2],[4,4]]

console.log(ds.find()); // 3
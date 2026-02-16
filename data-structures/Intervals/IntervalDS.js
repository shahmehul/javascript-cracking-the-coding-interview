class RangeDS {
    constructor() {
      this.intervals = [];
    }
  
    addRange(start, end) {
      let i = 0;
  
      // Skip intervals completely before new range
      while (i < this.intervals.length && this.intervals[i][1] < start) {
        i++;
      }
  
      // Merge overlapping intervals
      while (i < this.intervals.length && this.intervals[i][0] <= end) {
        start = Math.min(start, this.intervals[i][0]);
        end = Math.max(end, this.intervals[i][1]);
        this.intervals.splice(i, 1); // remove merged interval
      }
  
      // Insert merged interval at correct position
      this.intervals.splice(i, 0, [start, end]);
    }
  
    query(point) {
      let l = 0, r = this.intervals.length - 1;
  
      while (l <= r) {
        let m = (l + r) >> 1;
        let [s, e] = this.intervals[m];
  
        if (point < s) r = m - 1;
        else if (point > e) l = m + 1;
        else return true;
      }
      return false;
    }
  }

  const ds = new RangeDS();
  ds.addRange(1,3);
  console.log(ds.intervals);
  ds.addRange(4,5);
  console.log(ds.intervals);
  ds.addRange(2,6);
  console.log(ds.intervals);
  console.log(ds.query(2));
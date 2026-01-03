function canAttendMeetings(intervals) {
    if (intervals.length <= 1) return true;
  
    // Step 1: sort by start time
    intervals.sort((a, b) => a[0] - b[0]);
    console.log(intervals);
  
    // Step 2: check overlaps
    for (let i = 1; i < intervals.length; i++) {
      const prevEnd = intervals[i - 1][1];
      const currStart = intervals[i][0];
  
      if (currStart < prevEnd) {
        return false;
      }
    }
  
    return true;
  }

  console.log(
    canAttendMeetings([[0,30],[5,10],[15,20]]),
    "→ false"
  );

  console.log(
    canAttendMeetings([[7,10],[2,4]]),
    "→ true"
  );
  
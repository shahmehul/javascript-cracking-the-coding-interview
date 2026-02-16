
function findNextAvailableSlot(calendar,minutes) {
    const busy = [];
    for (let person of calendar) {
        for (let [s,e] of person) {
            busy.push([toMinutes(s), toMinutes(e)]);
        }
    }
    const merged = mergeDuplicates(busy);
    for (let i=1; i < merged.length; i++){
        let gapStart = merged[i-1][1];
        let gapEnd = merged[i][0];

        if(gapEnd - gapStart >= minutes) {
            return `Open Window: ${toTime(gapStart)},${toTime(gapEnd)}`
        }
    }

}

function mergeDuplicates(arr){
    arr.sort((a,b)=> a[0] - b[0]);
    const merged = [];
    for (let [start,end] of arr) {
        if(!merged.length || start > merged[merged.length - 1][1]){
            merged.push([start,end]);
        }else {
            merged[merged.length - 1][1] = Math.max(
                merged[merged.length - 1][1],
                end
            )
        }
    }
    return merged;
}

function toTime(minutes) {
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}


function toMinutes(str) {
    const [h,m] = str.split(":").map(Number);
    return h* 60 + m;
}

const schedules = [
    [
      ["10:00", "10:30"],
      ["10:30", "11:00"],
      ["11:30", "12:30"],
    ],
    [
      ["09:30", "10:15"],
      ["10:15", "10:45"],
      ["11:30", "13:00"],
    ],
  ];
  
  console.log(findNextAvailableSlot(schedules,30));
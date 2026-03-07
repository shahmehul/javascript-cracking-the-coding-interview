/*Input:
//firstDay = [1, 1, 2, 3]
//lastDay  = [1, 2, 2, 3]

 approch : 
Pair investors as [startDay, endDay]
Sort investors by start day
Iterate through each day
Maintain a min heap of ending days
Always meet the investor whose availability ends earliest
*/
// heap mimic 
class PriorityQueue {
    constructor() {
        this.heap = [];
    }

    push(item) {
        this.heap.push(item);
        this.heap.sort((a, b) => a - b);
    }

    pop() {
        return this.heap.shift();
    }

    peek() {
        return this.heap[0];
    }
    size() {
        return this.heap.length;
    }
}

function findMaximumNumberOfMeetings(start, end){
    let investors  = [];
    // prepare intervals
    for (let i =0; i < start.length; i++) {
        investors[i] = [start[i], end[i]]
    }
    // sort intervals from  starting date.
    investors.sort((a,b) => a[0] - b[0])
    console.log('sorted', investors);

    const pq = new PriorityQueue();
    let i =0;
    let attended =0;
    let currentDay = 1;


    while (i < investors.length || pq.size() > 0 ){
        // maintain min heap of ending date
        while (i < investors.length && investors[i][0] === currentDay) {
            pq.push(investors[i][1]);
            i++;
        }
        console.log('pq',pq);

        // remove all events that are expired from pq
        while (pq.peek() < currentDay) {
            pq.pop();
        }

        // attend first meeting from the pq ending soon.
        if (pq.size() > 0){
            pq.pop();
            attended++;
        }
        currentDay++;
    }
    return attended;
}

// console.log(findMaximumNumberOfMeetings([1, 1, 2, 3], [1, 2, 2, 3]));
console.log(findMaximumNumberOfMeetings([1, 1, 1], [3, 3, 3]));

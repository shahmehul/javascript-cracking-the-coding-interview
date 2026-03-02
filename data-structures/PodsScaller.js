/*Question: Horizontal Pod Autoscaler Optimization Developers are optimizing their horizontal pod autoscaler for their microservices. There are $n$ microservices, and the number of pods for the $i^{th}$ microservice is pods[i]. According to traffic patterns, the number of pods for a service can increase or decrease. Additionally, at specific times when there is expected traffic, all services with fewer than $x$ pods are assigned $x$ pods. There is an event log of size $m$, described as a 2D array logs where logs[i] is an array of integers of size 3. The logs have the following interpretations: [1, p, x]: The number of pods of the $p^{th}$ microservice is changed to $x$ ($1 \le p \le n$). [2, -1, x]: All microservices whose number of pods is less than $x$ are changed to $x$. Your task is to find the resulting number of pods for each microservice after processing all the logs. Function Description Complete the function findPodCount in the editor. findPodCount has the following parameters: int pods[n]: the initial number of pods for the microservices. int logs[m][3]: the event log of the horizontal pod autoscaler. Returns int[n]: the $i^{th}$ element represents the final pod count of the $i^{th}$ microservice. Constraints $1 \le n \le 2 \times 10^5$ $1 \le pods[i] \le 10^9$ $1 \le m \le 2 \times 10^5$ $1 \le p \le n$ $0 \le x \le 10^9$ Example Walkthrough Input: n = 4 pods = [2, 4, 1, 4] logs = [[1, 2, 30], [1, 3, 4], [2, -1, 10]] Step-by-Step Execution: Initial State: [2, 4, 1, 4] Log [1, 2, 30]: Change the 2nd microservice to 30 pods. State becomes: [2, 30, 1, 4] Log [1, 3, 4]: Change the 3rd microservice to 4 pods. State becomes: [2, 30, 4, 4] Log [2, -1, 10]: All services with fewer than 10 pods are changed to 10. Microservices 1, 3, and 4 (counts 2, 4, and 4) are all $< 10$, so they become 10. State becomes: [10, 30, 10, 10] Final Output: [10, 30, 10, 10]*/

function findPodCount(pods, logs) {
    const n = pods.length;
    const m = logs.length;
  
    // Track the final value and the timestamp (index) of the last direct update for each service.
    // Initial pods are treated as if they were updated at index -1.
    const lastVal = [...pods];
    const lastUpdateIdx = new Array(n).fill(-1);
  
    for (let i = 0; i < m; i++) {
      const [type, p, x] = logs[i];
  
      if (type === 1) {
        lastVal[p - 1] = x;
        lastUpdateIdx[p - 1] = i;
      }
    }
  
    // Pre-calculate the 'Suffix Maximum' for Type 2 (Global Floor) operations.
    // suffixMaxType2[t] = max(x) for all Type 2 logs at index i >= t.
    const suffixMaxType2 = new Array(m + 1).fill(0);
  
    for (let i = m - 1; i >= 0; i--) {
      const [type, , x] = logs[i];
  
      suffixMaxType2[i] = Math.max(
        suffixMaxType2[i + 1],
        type === 2 ? x : 0
      );
    }
  
    // The final result for service i is:
    // max(value_at_last_direct_update, max_global_floor_after_that_update)
    const result = new Array(n);
  
    for (let i = 0; i < n; i++) {
      const lastT = lastUpdateIdx[i];
      const maxFloorAfter = suffixMaxType2[lastT + 1];
  
      result[i] = Math.max(lastVal[i], maxFloorAfter);
    }
  
    return result;
  }

  const pods = [2,4,1,4] 
  const logs = [[1,2,30],[1,3,4],[2,-1,10]];

  console.log(findPodCount(pods, logs));
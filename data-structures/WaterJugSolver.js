function waterJugSolver(capA, capB, target) {
    const queue = [];
    const visited = new Set();
  
    // store path along with state
    queue.push({ a: 0, b: 0, path: [[0, 0]] });
    visited.add("0,0");
  
    while (queue.length) {
      const { a, b, path } = queue.shift();
  
      // 🎯 goal check
      if (a === target || b === target) {
        return path;
      }
  
      const nextStates = [
        [capA, b], // fill A
        [a, capB], // fill B
        [0, b],    // empty A
        [a, 0],    // empty B
  
        // pour A -> B
        [
          Math.max(0, a - (capB - b)),
          Math.min(capB, b + a)
        ],
  
        // pour B -> A
        [
          Math.min(capA, a + b),
          Math.max(0, b - (capA - a))
        ]
      ];
  
      for (const [na, nb] of nextStates) {
        const key = `${na},${nb}`;
  
        if (!visited.has(key)) {
          visited.add(key);
          queue.push({
            a: na,
            b: nb,
            path: [...path, [na, nb]]
          });
        }
      }
    }
  
    return null; // no solution
  }

  const solution = waterJugSolver(5, 3, 4);

console.log("Steps:");
solution.forEach(step => console.log(step));
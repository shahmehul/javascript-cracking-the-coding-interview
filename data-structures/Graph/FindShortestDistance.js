function shortestPath(input) {
    const adjList = {};
    const dist = {};
    const visited = new Set();
  
    const edges = input.split(";").map(e => e.trim());
  
    let start = null;
  
    // Build graph
    for (const e of edges) {
      if (e === "-1") break;
  
      const [u, v, w] = e.split(" ");
      const weight = Number(w);
  
      if (start === null) start = u;
  
      adjList[u] ??= [];
      adjList[v] ??= [];
  
      adjList[u].push([v, weight]);
      adjList[v].push([u, weight]); // undirected
  
      dist[u] ??= Infinity;
      dist[v] ??= Infinity;
    }
  
    // Start node distance
    dist[start] = 0;
  
    // Dijkstra
    while (visited.size < Object.keys(adjList).length) {
        debugger;
      let current = null;
      let min = Infinity;
  
      // pick unvisited node with smallest distance
      for (const node in dist) {
        if (!visited.has(node) && dist[node] < min) {
          min = dist[node];
          current = node;
        }
      }
  
      if (current === null) break;
      visited.add(current);
  
      // relax neighbors
      for (const [neighbor, weight] of adjList[current]) {
        const newDist = dist[current] + weight;
        if (newDist < dist[neighbor]) {
          dist[neighbor] = newDist;
        }
      }
    }
  
    return dist;
  }
  
  // Example
  console.log(
    shortestPath("1 2 5; 1 3 10; 2 3 1; -1")
  );
  
function plantFlowers(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const houses = [];
    const flowers = new Set();
  
    const directions = [
      [1, 0], [-1, 0], [0, 1], [0, -1]
    ];
  
    // Step 1: Collect all houses
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (grid[r][c] === 1) houses.push([r, c]);
      }
    }
  
    function isValid(r, c) {
      return (
        r >= 0 &&
        c >= 0 &&
        r < rows &&
        c < cols &&
        grid[r][c] === 0 &&
        !flowers.has(`${r},${c}`)
      );
    }
  
    // Step 2: Backtracking
    function backtrack(index) {
      if (index === houses.length) return true;
  
      const [hr, hc] = houses[index];
  
      for (const [dr, dc] of directions) {
        const nr = hr + dr;
        const nc = hc + dc;
  
        if (isValid(nr, nc)) {
          flowers.add(`${nr},${nc}`);
  
          if (backtrack(index + 1)) return true;
  
          // backtrack
          flowers.delete(`${nr},${nc}`);
        }
      }
  
      return false;
    }
  
    const possible = backtrack(0);
    console.log(flowers);
  
    return possible ? [...flowers].map(pos => pos.split(',').map(Number)) : [];
  }

  const grid = [
    [0, 1, 0],
    [0, 0, 0],
    [1, 0, 0]
  ];

  
  console.log(plantFlowers(grid));
function maximalSquare(matrix){
    const rows = matrix.length;
    const cols = matrix[0].length;
    let max = 0;
    let dp = Array.from({ length: rows }, () => Array(cols).fill(0));
    for (let i= 0; i < rows ; i++){
        for (let j = 0; j < rows ; j++){
            if (matrix[i][j] === '1'){
                if(i === 0 || j === 0) {
                    dp[i][j] = 1;    
                } else {
                    dp[i][j] = 1 + Math.min(dp[i-1][j], dp[i][j-1],dp[i-1][j-1]);
                }
            } else {
                dp[i][j] = 0
            }
            max = Math.max(max,dp[i][j]); 
        }
    }
    console.log(dp);
    return max * max;
}

/*
dp table
[
  [ 1, 0, 1, 0, 1, 0 ],
  [ 1, 1, 0, 1, 0, 1 ],
  [ 0, 1, 1, 1, 1, 1 ],
  [ 1, 0, 1, 2, 2, 2 ],
  [ 1, 1, 1, 2, 3, 3 ],
  [ 1, 0, 1, 2, 3, 4 ]
]*/

const land = [
    ['1','0','1','0','1','0'],
    ['1','1','0','1','0','1'],
    ['0','1','1','1','1','1'],
    ['1','0','1','1','1','1'],
    ['1','1','1','1','1','1'],
    ['1','0','1','1','1','1']
  ];
  
  console.log(maximalSquare(land)); // 9

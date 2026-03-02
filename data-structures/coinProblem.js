// implement the changing system.
function getTheChange(input){
    var remainder = Math.floor(input);
    var changeOptions = [25, 10, 5, 1];
    var changeOutput = [];
    
    while (remainder > 0) {
      $.each(changeOptions, function(index, value){
        if (remainder % value >= value) {
          return;
        }

        var numCoins = Math.floor(remainder / value);
        for (var i = 0; i < numCoins; i++) {
          changeOutput.push(value);
        }
        remainder = remainder - (value * numCoins);
      });
    }
    var formattedChangeOutput = $.map(changeOutput, function(value){
      return '¢' + value + ' ';
    });
    return formattedChangeOutput;
}


var coinChangeDp = function(coins, amount) {
  debugger;
  const dp = new Array(amount + 1).fill(Infinity);
  const prevCoin = new Array(amount + 1).fill(-1); // tracks last coin used
  
  dp[0] = 0; // base case: 0 coins for amount 0
  
  for (let i = 1; i <= amount; i++) {
      for (let coin of coins) {
          if (i - coin >= 0 && dp[i - coin] + 1 < dp[i]) {
              dp[i] = dp[i - coin] + 1;
              prevCoin[i] = coin; // record last coin used
          }
      }
  }
  
  if (dp[amount] === Infinity) return [-1, []]; // no solution
  
  // Reconstruct coins used
  const resultCoins = [];
  let curr = amount;
  while (curr > 0) {
      const coin = prevCoin[curr];
      resultCoins.push(coin);
      curr -= coin;
  }
  
  return [dp[amount], resultCoins]; // [min coins, coins used]
};

console.log(coinChangeDp([1, 10, 25, 10],74));
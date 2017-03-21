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

console.log(getTheChange(74));
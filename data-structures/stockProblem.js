//apple stock problem
var list = [1000, 7, 5, 8, 12, 29];
function stocks_n(price_list){
    var maxDif=0, min=price_list[0]

    for (var i in price_list){
        p = price_list[i];
        if (p<min)
            min=p
        else if (p-min>maxDif)
                maxDif=p-min;
   }

    return maxDif
}

console.log(stocks_n(list));
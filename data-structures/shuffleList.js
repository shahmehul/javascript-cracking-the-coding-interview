/**
 * Created by mshah on 1/8/17.
 * shuffle a list
 example : [2,11,37,42,56,0,12,3]
 */


function shuffle(list) {
    var i, j, t;
    for (i = 1; i < list.length; i++) {
        j = Math.floor(Math.random() * (1 + i));  // choose j in [0..i]
        if (j != i) {
            t = list[i];                        // swap list[i] and list[j]
            list[i] = list[j];
            list[j] = t;
        }
    }
    return list;
}

console.log(shuffle([2,11,37,42,56,0,12,3]));

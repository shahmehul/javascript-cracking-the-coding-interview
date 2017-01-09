/**
 * Created by mehulshah on 1/8/17.
 * Given Roman Number find out its decimal value.
 */

function deromanize( roman ) {
    var roman = roman.toUpperCase(),
        lookup = {I:1,V:5,X:10,L:50,C:100,D:500,M:1000},
        number = 0,
        i = roman.length;
    while (i--) {
        if ( lookup[roman[i]] < lookup[roman[i+1]] )
            number -= lookup[roman[i]];
        else
            number += lookup[roman[i]];
    }
    return number;
}

console.log(deromanize('XLVII'));
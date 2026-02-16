/**
 * Created by mehulshah on 1/8/17.
 * String reverse
 */

function reverse(str){
    var last = str.length - 1,c,array= str.split("");
    for(var i = 0 ; i < array.length/2;i++){
        c = array[i];
        array[i] = array[last];
        array[last] = c;
        last = last-1;
    }
    return array.join('');
}
console.log(reverse('abcdefgh'));
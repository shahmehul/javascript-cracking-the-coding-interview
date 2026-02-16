/**
 * Created by mehulshah on 1/8/17.
 * Define a repeatify function on the String object. The function accepts an integer that specifies
 * how many times the string has to be repeated.
 * The function returns the string repeated the number of times specified. */

String.prototype.repetify = function(number){
    var string = this;
    var newString = '';
    for (var i = 0 ; i < number ; i ++){
        newString = newString + string;
    }
    return newString;
}

console.log("Hello".repetify(10));
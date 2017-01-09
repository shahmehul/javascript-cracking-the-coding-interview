/**
 * Created by mehulshah on 1/8/17.
 * string are anagram or not.
 */

var string1 = 'dog';
var string2 = 'god';

if(string1.split("").sort().join() === string2.split("").sort().join()){
    console.log('Strings are anagram');
}else{
    console.log('Strings are not anagram');
}
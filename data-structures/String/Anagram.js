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


//Given an array of strings, group anagrams together.
//For example, given: ["eat", "tea", "tan", "ate", "nat", "bat"], 

var data =["eat", "tea", "tan", "ate", "nat", "bat"];

function getResult(data){
 let map = {},result=[];
 data.forEach((val,index)=>{
   let sortedKey = val.split('').sort().join('');
   if(!map[sortedKey]){
       map[sortedKey]= [val];
   }else{
     map[sortedKey].push(val);
   }
 }) 
   Object.keys(map).forEach((val,index)=>{
       result.push(map[val]);
   })
    console.log(result);
}

getResult(data);

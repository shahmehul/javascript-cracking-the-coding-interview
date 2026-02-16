/**
 * Created by mehulshah on 1/8/17.
 * Input any string count the maximum dept parenthesis
 for example : {abc}{a}{a} return 1
 {{{{abcd}}}} return 4
 {{{abcd} return wrong string
  */
'use strict';
function calculate(input){
    let par_count=0,maxcount=0;
    for(let i=0; i<input.length; i++){
        if(input.charAt(i) == '{'){
            par_count++;
            if(par_count > maxcount){
                maxcount = par_count;
            }
        }else if(input.charAt(i) == '}'){
            if(par_count > 0){
                par_count--;
            }
        }
    }
    return maxcount;
}


var input = '{abc[abc[]]}';
var stack = [];

function areParenthesisBalanaced(str){
    for(let i = 0 ; i <= str.length - 1 ; i ++){
        if (str.charAt(i) == '{' || str.charAt(i) == '['){
            stack.push(str.charAt(i));
        }else if (str.charAt(i) == '}' || str.charAt(i) == ']'){
            let poped = stack.pop();
            if (poped == '{' || poped == '['){
                continue
            }else {
                return false;
            }
        }
    }
    if(stack.length == 0){
        return true;
    }
}

console.log(areParenthesisBalanaced(input));

//console.log(calculate('{{{{{abcd}}}}}'));



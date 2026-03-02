/*
Input:  s = "deeedbbcccbdaa", k = 3
Output: "aa"
*/

function removeKAdjacentDuplicatesInString(str,n){
    if(!str) "";
    let stack = [];
    let stringToReturn = '';

    //loop through each character in str. 
    //if character if present 
    for(const ch of str) {
        if(stack.length && stack[stack.length - 1].char === ch){
            stack[stack.length - 1].count++;
            // remove when count reaches n
            if(stack[stack.length - 1].count === n) {
                stack.pop();
            }
        }else {
            stack.push({char: ch, count: 1})
        }
    }
    console.log(stack);
    for (const {char, count} of stack) {
        stringToReturn += char.repeat(count);
    }
    return stringToReturn;
}

console.log(removeKAdjacentDuplicatesInString('deeedbbcccbdaa',3));

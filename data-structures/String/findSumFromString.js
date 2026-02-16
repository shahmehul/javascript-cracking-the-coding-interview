
function findSum(str){
 if(!str) return 'plese pass the string';
 if(typeof str !== 'string')  return 'please pass the string';
 if (str.length == 0) return 'string is empty';
let result = 0;
var strBuilder = new Array();
let strArr = str.split('');
strArr.forEach((c,i)=>{
   if( c >= '0' && c <= '9'){
       strBuilder.push(c);
   }else {
      if(strBuilder.length > 0){
         result = result + Number(strBuilder.join(''));
         strBuilder = new Array();
      }
   }
});

let ch = str.charAt(str.length - 1);
   if( ch >= '0' && ch <= '9' && str){
      result = result + Number(strBuilder.join(''));
   }
 return result;
}

console.log(findSum('aa20sdsaadsfsd200sdfsf2'));

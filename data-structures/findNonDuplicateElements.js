function findNonDuplicateElements(arr){
   if(Array.isArray(arr) && arr.length > 0){
      let map = {};
      arr.forEach((val,index)=>{
         if(map[val]){
            map[val] = false;
         }else {
            map[val] = true;
         }
      });
      let keys = Object.keys(map),uniqueArr = [];
      keys.forEach((key)=>{
          if (map[key] === true){
              uniqueArr.push(key);
          }     
      });
      return uniqueArr;
   }else {
      return 'please pass valid array';
   }
}

console.log(findNonDuplicateElements([1,1,2,3,5,7,4,2]));
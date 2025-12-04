// for better apporach refer to HashMap/twoSum.js compapre to two-pointer approach

const pairSum =(arr,target)=>{
   
  // declare the map

   let map = new Map();

   //traverse the array
   for(let i=0;i<arr.length;i++){
     let arrVal = arr[i];
     let complement = target-arrVal;

      // check if the complement exists in the map
      if(map.has(complement)){
         return[map.get(complement),i];
      }

      // otherwise store the current value and its index in the map
      map.set(arrVal,i);
   }
    return []; //no answer found

}

let arr =[10,15,3,7];
let target = 17;
console.log(pairSum(arr,target)); // [0,3]
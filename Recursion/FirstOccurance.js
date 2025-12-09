/*
LOGIC: First Occurrence using Recursion

1. Start from index 0.
2. If index reaches the end of the array → return -1 (not found).
3. If current element == target → return current index.
4. Otherwise, call the function for the next index (index + 1).
5. The first matching index will be returned automatically.
*/


const FirstOccurance = (arr,target,index=0)=>{
   let n =arr.length;

   //base case
   if(index===n){ // reached end of array
    return -1; // not found
   }
   // check current element with target
   if(arr[index]===target){
     return  index;
   }

   //recurrnce relation/formula
   return FirstOccurance(arr,target,index+1);
}

console.log("The first occurance is at index : ",FirstOccurance([1,2,3,4,2,5],2));
console.log("The first occurance is at index : ",FirstOccurance([1,2,3,4,5],6));

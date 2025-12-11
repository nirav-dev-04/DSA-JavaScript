/*
LOGIC: Check if Array is Sorted using Recursion

1. Compare the current element with the next element.
2. If current element > next element → return false.
3. Otherwise, recursively check the remaining array.
4. If we reach the last element → return true.
5. This continues until the base case is reached.
*/

// “We compare adjacent elements recursively and move forward. The recurrence is T(n) = T(n−1) + 1,
//  so time and space complexity are both O(n).”

const isSorted =(arr , index=0)=>{
   //base case
   let n = arr.length -1;

   if(index===n)  // this for the last element
    return true;

    //check current element with next element
    if(arr[index]>arr[index+1]){
      return false;
    }

    //recurrnce relation/formula
    return isSorted(arr,index+1);
}

console.log("Is the array sorted ? : ",isSorted([1,2,3,4,5]));
console.log("Is the array sorted ? : ",isSorted([1,3,2,4,5]));

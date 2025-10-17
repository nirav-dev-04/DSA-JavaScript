// A searching algorithm used to find an element’s position in a sorted array.

// Start with two pointers: low (start of array) and high (end of array).

// Find the middle element:
// 𝑚𝑖𝑑=
// Math.floor((low + high) / 2)
// mid=Math.floor((low + high) / 2)
// Compare arr[mid] with target:
// If arr[mid] === target → ✅ Found!
// If arr[mid] > target → search in the left half (move high = mid - 1)
// If arr[mid] < target → search in the right half (move low = mid + 1)
// Repeat until low > high.
// If not found → return -1.


function BinarySearch(arr, target){
    let left = 0;
    let right = arr.length -1;

     while(left<=right){
       let mid = Math.floor((left+right)/2);

       if(arr[mid]===target){
          return mid; // ele found
       }
       else if(arr[mid]>target){
        right = mid-1; // search in left half
       }
       else{
        left = mid+1; // search in right half
       }
     }
     retun -1;
} 

 let arr = [10, 20, 30, 40, 50, 60, 70];
 let target = 50;

 let result = BinarySearch(arr,target);
  if(result !== -1){
    console.log("ele found at index " + result);
  }
  else{
    console.log("ele not found");
  }   
  
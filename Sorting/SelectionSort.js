// 🔹 Logic (in short):

// Divide the array into two parts: sorted (left) and unsorted (right).

// In each pass:

// Find the minimum element from the unsorted part.

// Swap it with the first element of the unsorted part.

// Repeat until the entire array is sorted.
// Worst Case	O(n²)
// Space Complexity	O(1)

// How it works (short example):

// Array: [5, 3, 8, 4, 2]

// Pass 1 → min = 2 → swap with 5 → [2, 3, 8, 4, 5]

// Pass 2 → min = 3 → already in place

// Pass 3 → min = 4 → swap with 8 → [2, 3, 4, 8, 5]

// Pass 4 → min = 5 → swap with 8 → [2, 3, 4, 5, 8]

const SelectionSort =(arr)=>{
  let n = arr.length;

  for(let i = 0 ; i<n-1 ; i++){
      let minIndex = i ; 

       for(j = i+1 ; j<n;j++){
         if(arr[j]<arr[minIndex]){
            minIndex = j;
         }
        }

            //swapp
          if(minIndex !== i){
             let temp = arr[i];
             arr[i]  =arr[minIndex];
             arr[minIndex] = temp;
         }
       }   
  
  return arr;
}

let nums = [64, 25, 12, 22, 11];
  console.log("The sorted array is: " + SelectionSort(nums));
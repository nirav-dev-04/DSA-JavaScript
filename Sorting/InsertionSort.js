// How It Works (Step by Step)

// Start from the second element (index 1), because the first one is already “sorted”.

// Compare the current element with the elements in the sorted part (on its left).

// Shift all elements that are greater than the current element one position to the right.

// Insert the current element into the correct position.

// time complexity: O(n^2) in worst and average case, O(n) in best case (when array is already sorted)

// space complexity: O(1) as it is an in-place sorting algorithm




const insertionSort =(arr) =>{
     let n = arr.length;

      for(let i=1;i<n;i++){
         let current = arr[i];
         let j = i-1;

         //move ele greater than current to one position ahead

         while(j>=0 && arr[j]>current)
         {
           arr[j+1] = arr[j];
           j--;
         }

         //insert current at its correct position

          arr[j+1]  = current;
      }

      return arr;

}

let nums = [5,2,9,1,5,6];
console.log('The SOrted Array is : ' , insertionSort(nums));
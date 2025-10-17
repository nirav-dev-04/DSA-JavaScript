// 🔹 Logic (in short):

// Repeatedly compare adjacent elements and swap them if they’re in the wrong order.
// After each pass, the largest element "bubbles up" to the end of the array.
// Repeat until the array is sorted.
// Worst Case	O(n²)
// Space Complexity	O(1) (in-place sorting)

const BubbleSort =(arr)=>{
    let n = arr.length;

    for(let i=0 ; i<n-1 ; i++){
       let swapped = false;
       
        for(let j=0 ; j<n-i-1 ; j++){
           if(arr[j]>arr[j+1]){
             //swap

              let temp = arr[j];
              arr[j] = arr[j+1];
              arr[j+1] = temp;

              swapped = true;
           }
        }
        //if array is alredy sorted

        if(swapped === false)
          break;
    }
    return arr;
}

let nums = [64, 34, 25, 12, 22, 11, 90];

 console.log("The sorted array is: " + BubbleSort(nums));
 
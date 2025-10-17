// topic: Linear Search Algorithm in JavaScript
// pattern: Pattern is similar to finding largest element — traverse + compare.
// time complexity: O(n)
// space complexity: O(1)


function linearSearch(arr,target){
   for(let i= 0;i<arr.length;i++){
     if(arr[i]===target){
       return i;
     }
    }
    return -1; // ele not found  
   }

    let arr = [10, 23, 45, 70, 11, 15];
    let target = 70;

    let result = linearSearch(arr,target);

    if(result !==-1){
      console.log("ele at found at index " + result);
    }

    else{
       console.log("ele not found");
    }
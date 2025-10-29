const quickSort =(arr)=>{
    let n =  arr.length;

    //base case like array was lenght 1 or empty
    if(n<=1){
       return arr;
    }

    //chose th pivot element(lase ele)
    let pivot = arr[n-1];
    let left =[];
    let right =[];

    //partitioning the array
    for(let i=0;i<n-1;i++){
      if(arr[i]<pivot){
        left.push(arr[i]);
      }

      else{
        right.push(arr[i]);
      }
    }

    //recursively call quickSort on left and right subarrays
    return[...quickSort(left),pivot,...quickSort(right)];
    // this line menas like in left side ele is 1,2, and pivot 4 and right side ele is 5,6
     // s final is [1,2,4,5,6]
}

let nums  = [10,7,8,9,1,5];
console.log('The Sorted Array is : ' , quickSort(nums));
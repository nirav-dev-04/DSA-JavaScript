// topic:  max sum of subarrays.max
// pattern: Pattern is similar to finding largest element — traverse + compare.
// time complexity: O(n)
// space complexity: O(1)


function kadansAlgo(arr){

   let maxSum = arr[0]; //initial zero
   let cuerrentSum =arr[0]; //initial zero

   for(let i =1 ; i<arr.length ;i++){
     cuerrentSum  =Math.max(arr[i],cuerrentSum+arr[i]);
      maxSum = Math.max(maxSum,cuerrentSum);
   }

   return maxSum;
}

 let arr = [-2,1,-3,4,-1,2,1,-5,4];
  console.log(kadansAlgo(arr));
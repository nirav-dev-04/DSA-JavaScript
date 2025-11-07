// ✅ Time Complexity → O(n)
// ✅ Space Complexity → O(1)

const Diagonal =(arr)=>{
   let n = arr.length;
   let sum =0;

   //traverse the matrix

   for(let i = 0 ; i<n ;i++){
     //primary diagonal

     sum+= arr[i][i];

     //secondary diagonal   
      sum+= arr[i][n-i-1];
   }

    //if n is odd then subtract the middle element once
    if(n%2 !==0){
      let  mid = Math.floor(n/2);
      sum -= arr[mid][mid];
    }

   return sum;
}

let arr = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];

console.log("output is the  :" , Diagonal(arr));


/*
LOGIC: Power of X using Recursion

1. If n == 0 → return 1 (because x^0 = 1)
2. Otherwise:
   - Find power(x, n - 1)
   - Multiply result with x
3. Return final multiplied value
4. Problem reduces by 1 in every recursive call
*/


const XPowerOfN = (x,n)=>{
  //base case
  if(n==0) return 1;
  //recurrnce relation/formula
  return x * XPowerOfN(x,n-1);

}
console.log("X Power of N is : ",XPowerOfN(2,5));
/*
LOGIC: Fibonacci Using Recursion

1. If n == 0 → return 0  (first Fibonacci number)
2. If n == 1 → return 1  (second Fibonacci number)
3. Otherwise:
   - Call fibonacci(n - 1)
   - Call fibonacci(n - 2)
   - Add both results
4. Return the final sum
*/
// “The recurrence relation of Fibonacci is T(n) = T(n−1) + T(n−2) + 1,
//  so its time complexity is O(2ⁿ) and space complexity is O(n).”

const Fibonacci = (n)=>{
   //base case 
   if(n===0) return 0;
   if(n===1) return 1;

   //recurrnce relation/formula

   return Fibonacci(n-1)+ Fibonacci(n-2);
}

console.log("The Fibonacci number is : ",Fibonacci(6));
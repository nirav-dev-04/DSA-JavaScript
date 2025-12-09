/*
LOGIC (Descending Order using Recursion):

1. Create a function that takes one number 'n'.
2. If 'n' becomes 0, stop the recursion (base case).
3. Print the current value of 'n'.
4. Call the function again with (n - 1).
5. Repeat until n becomes 0.
*/
// “The recurrence relation is T(n) = T(n−1) + 1, with T(0) = 0. The time complexity is O(n).”


function printDescending(n) {
  /*
  LOGIC:
  1. If n == 0 → stop recursion (base case)
  2. Print current value of n
  3. Call same function with (n - 1)
  */

  if (n === 0) {
    return; // Base Case
  }

  console.log(n);        // Step 2: Print current number
  printDescending(n-1); // Step 3: Recursive Call
}

// Function Call
printDescending(5);

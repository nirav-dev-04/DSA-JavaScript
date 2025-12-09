/*
LOGIC: Last Occurrence using Recursion

1. Start from index 0.
2. If index reaches the end of the array → return -1.
3. Recursively find the last occurrence in the remaining array.
4. After recursion returns:
   - If result != -1 → return that result.
   - Else if current element == target → return current index.
5. This ensures the last match is returned.
*/

function lastOccurrence(arr, target, index = 0) {
  //  Base Case
  if (index === arr.length) {
    return -1;
  }

  //  Recursive Call First
  const foundIndex = lastOccurrence(arr, target, index + 1);

  //  If found later, return it
  if (foundIndex !== -1) {
    return foundIndex;
  }

  //  Otherwise, check current index
  if (arr[index] === target) {
    return index;
  }

  return -1;
}

// Function Calls
console.log(lastOccurrence([2, 4, 6, 8, 6], 6)); // Output: 4
console.log(lastOccurrence([1, 3, 5, 7], 5));   // Output: 2
console.log(lastOccurrence([1, 2, 3], 10));     // Output: -1

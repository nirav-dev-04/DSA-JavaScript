
// concept: Finding the largest element in an array.
// pattern : traversal and comparison
// time complexity: O(n)
// space complexity: O(1)

let numbers = [3, 5, 7, 2, 8];

let largest = numbers[0];

for(let i=1;i<numbers.length;i++){
   if(numbers[i]>largest){
     largest = numbers[i];
   }
}

console.log("The largest number is: " + largest);
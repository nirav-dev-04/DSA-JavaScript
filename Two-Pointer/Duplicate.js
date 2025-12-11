// removed the duplicated number in the string or array
// Two pointers start from both sides.
// Why two pointers?
// You compare characters from front + back.

// first check the element is same or not and move to next ele if find unique ele ment so storein the variable

const removeDuplicates = (arr) =>{
   let i=0;
   for(let j = 1 ;j<arr.length ;j++){
     if(arr[i] !== arr[j]){ // check the element is same or not

      i++;
      arr[i] =arr[j]; // store the unique element
     }
   }
   return i+1; // length of unique element
}
  let arr = [1,1,2,2,3,4,4,5];
  console.log("the length of unique element is: ",removeDuplicates(arr));
// Time Complexity: O(n)
// Space Complexity: O(1)
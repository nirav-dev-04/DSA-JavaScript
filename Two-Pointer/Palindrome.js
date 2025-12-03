// check the plaindrome string  or not

 // Two pointers start from both sides.
// Why two pointers?
// You compare characters from front + back.

 const isPalindrome = (str) =>{
    let i=0;
    let j = str.length -1;

     while(i<j){
       if(str[i] !== str[j]){
         return false;

       }
       i++;
       j--;
     }
     return true;
 }
  let str = "racecar";
  console.log("is palindrome: ",isPalindrome(str));
// Time Complexity: O(n)
// Space Complexity: O(1)
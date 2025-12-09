// Goal: Count how many bits are 1.
// Example:
// n = 1101
// Count 1s:

// 1 1 0 1
// ↑ ↑   ↑
// 1 1   1  → total = 3

// That’s it.
// ✔ Count set bits = count how many ON switches.

function countSetBits(num){
   let count =0 ;
 while(num >0){
   count += num & 1;
    num = num >> 1;
  
 }
  return count;
}

console.log(countSetBits(13)); // 3
// Goal: Count how many bits are 1.

function countSetBits(num){
   let count =0 ;
 while(num >0){
   count += num & 1;
    num = num >> 1;
  
 }
  return count;
}

console.log(countSetBits(13)); // 3
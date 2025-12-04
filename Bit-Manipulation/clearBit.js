function clearBit(num,i) {
   return num & ~(1 << i);
}
console.log(clearBit(13, 2)); // 9

// CLEAR a bit (Make a bit = 0)
// IN THIS WE WILL MAKE THE I-2 BIT IS 0 
//LIKE 1111 =15 SO IN THIS WE WILL MAKE THE I-2 IS 0 SO 1011 = 11
// To clear the i-th bit, we create a mask:
// mask = ~(1 << i)
// Then use AND:
// num & mask
//GET a bit (Check if a bit is 0 or 1)
// To get the i-th bit, we create a mask:
// mask = (1 << i)
// Then use AND:
// num & mask
// If result ≠ 0 → bit is 1
// If result = 0 → bit is 0

// 🔍 Example: Get the 2nd bit
// num = 13        // binary: 1101
// i = 2
// mask = 1 << 2   // 100 = 0100 in the 2 means the push of two zeros after 1
// num & mask = 1101 & 0100 = 0100 (not zero)
// ✔ So the 2nd bit is 1

function getBit(n, i) {
    let mask = 1 << i;
    return (n & mask) ? 1 : 0; 
}
console.log(getBit(13, 2)); // 1
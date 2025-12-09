//A number n is a power of 2 if only one bit is set.
// ⭐ Formula  (n & (n - 1)) === 0 AND also n > 0
// 🔍 Why does this work?
// If n is a power of 2:

// Examples:
// 1 → 0001
// 2 → 0010
// 4 → 0100
// 8 → 1000

// These numbers all have only ONE 1-bit.

// Now look at n - 1:

// n	binary of n	n-1	binary of (n-1)
// 4	0100	3	0011
// 8	1000	7	0111

// When you do n & (n - 1):

// 0100
// 0011
// -----
// 0000  ← becomes zero


// So if the result is 0, it's a power of 2.

function isPowerOfTwo(n) {
  return n>0 && (n & (n-1)) ===0;
}

console.log(isPowerOfTwo(1)); // true
console.log(isPowerOfTwo(10)); // false

// | n  | Binary | Power of 2? |
// | -- | ------ | ----------- |
// | 1  | 0001   | ✔ Yes       |
// | 2  | 0010   | ✔ Yes       |
// | 3  | 0011   | ❌ No        |
// | 4  | 0100   | ✔ Yes       |
// | 5  | 0101   | ❌ No        |
// | 8  | 1000   | ✔ Yes       |
// | 12 | 1100   | ❌ No        |

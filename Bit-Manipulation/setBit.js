// SET a bit (Make a bit = 1)
// To set the i-th bit, create same mask:
// mask = (1 << i)
// Then use OR:
// num | mask

// This forces that bit to become 1.
// 🔍 Example: Set the 1st bit
// num = 8         // binary: 1000
// i = 1
// mask = 1 << 1   // 0010
// num | mask = 1000 | 0010 = 1010
// ✔ So after setting, number becomes 10

function setBit(n, i) {
    let mask = 1 << i;
    return n | mask;
}
console.log(setBit(8, 1)); // 10

// | Operation   | Mask     | Operator | Meaning         |
// | ----------- | -------- | -------- | --------------- |
// | **Get Bit** | `1 << i` | `&`      | Check bit (0/1) |
// | **Set Bit** | `1 << i` | `\|`     | Make bit = 1    |

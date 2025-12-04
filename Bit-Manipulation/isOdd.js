// basically in this we check the given number i odd or even in the case of the bit (bianary representation )
//Every number in binary ends with a last bit (LSB):

// If last bit is 0 → number is Even
// If last bit is 1 → number is Odd

// | Number | Binary | Last Bit | Result |
// | ------ | ------ | -------- | ------ |
// | 6      | `110`  | 0        | Even   |
// | 7      | `111`  | 1        | Odd    |
// | 10     | `1010` | 0        | Even   |
// | 13     | `1101` | 1        | Odd    |

//num & 1
//beacause in this 1 is the binary representation of 1 is 000..0001
//AND(&) checks onlythe last bit if it is 1 then the result will be 1 otherwise 0

function checkOddEven(num) {
    if (num & 1) {
        console.log("Odd");
    } else {
        console.log("Even");
    }
}
checkOddEven(6); // Even
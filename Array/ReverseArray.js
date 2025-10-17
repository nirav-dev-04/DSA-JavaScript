// topic : revered Array.
// pattern : two pointer approach.
// time complexity : O(n)
// space complexity : O(1)

function reveredArray(arr){
   let start = 0; 
   let end = arr.length -1;

    while(start<end){
       //swapping

        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;

        start++;
        end--;

    }
    return arr;
}

let arr = [10, 20, 30, 40, 50];
let result = reveredArray(arr);
console.log(result);
// 🔹 Spiral Matrix Logic

// Create an empty matrix of size n × n.

// Use 4 boundaries:

// top = 0

// bottom = n - 1

// left = 0

// right = n - 1

// Start a counter num = 1.

// Loop until all cells are filled (num <= n*n):

// Fill top row → left → right → then top++

// Fill right column → top → bottom → then right--

// Fill bottom row → right → left → then bottom--

// Fill left column → bottom → top → then left++

// Repeat until all layers are filled.

// ✅ Time Complexity → O(n²)
// ✅ Space Complexity → O(n²) (because we store all n² elements in the matrix)

const SpiralMatrix = (n)=>{
   const result = Array.from({ length: n }, () => Array(n).fill(0));
   let nums = 1;
   let top =0, bottom = n-1, left =0, right = n-1;

   //Traerse the matrix in spiral order
   //left to right

   while(top<=bottom && left<=right){
     for(let i = left ; i<=right ; i++){
       result [top] [i] =nums++;
     }

      top++;

      //top to bottom
      for(let i=top ; i<=bottom ; i++){
         result [i] [right] = nums++;
      }
      right--;

      //right to left
      for(let i = right ; i>=left ; i--){
        result [bottom] [i] = nums++;
      }
      bottom--;

      //bottom to top
      for(let i = bottom ; i>=top ; i--){
        result [i] [left] = nums++;
      }
      left++;
   }
   return result;
}

console.log("the output is : " , SpiralMatrix(4));
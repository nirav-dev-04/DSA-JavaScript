const SearchInSortedMatrix = (matrix, target) => {
    let n = matrix.length;

    let row = 0;
    let col = n-1;

     //traverse the matrix

      while(row<n && col>=0){
         let value = matrix[row][col];

         if(value==target){
           return [row, col];
         }

         else if(value>target){  //move to left side
           col--;
         }

         else{
            row++;   //move to down side
         }
      }
    return [-1, -1];
}

let matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
    [70, 80, 90, 100]
];

let target = 3;
console.log("Target found at index: " + SearchInSortedMatrix(matrix, target));
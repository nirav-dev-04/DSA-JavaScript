const MergeSort = (arr) => {
  let n = arr.length;

  // If array has only one element or empty
  if (n <= 1) {
    return arr;
  }

  // Divide array into two halves
  let mid = Math.floor(n / 2);
  let left = MergeSort(arr.slice(0, mid));
  let right = MergeSort(arr.slice(mid));

  // Merge both halves
  return Merge(left, right);
};

const Merge = (left, right) => {
  let result = [];
  let i = 0;
  let j = 0;

  // Compare elements from left and right arrays
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // Add remaining elements (if any)
  while (i < left.length) {
    result.push(left[i]);
    i++;
  }

  while (j < right.length) {
    result.push(right[j]);
    j++;
  }

  return result;
};

let arr = [38, 27, 43, 3, 9, 82, 10];
console.log("Sorted Array is:", MergeSort(arr));

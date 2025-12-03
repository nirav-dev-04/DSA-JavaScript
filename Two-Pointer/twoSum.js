// is for the sorted array
// Approach

// Start i at 0
// Start j at last index
// Move inward based on sum

// this is the example of the opposite of the two pointer approach
// where we are looking for a specific target sum
// rather than just checking all pairs  

 const twoSum = (arr,target) =>{ 
    let n = arr.length;
    let i=0;
    let j= n-1;

     while(i<j){
       let sum = arr[i] + arr[j];

        if(sum==target){
           return [i,j]; // return indexies in case in this asked to incresed the index by 1 so add +1 both sides
        }

        else if(sum<target){  //in this case the left side incrsed by 1 so i++ 
            i++;
        }
        else{
           j--; // in this case the right side decreased by 1 so j-- sum>target
        }
     }
      return [-1,-1]; // not found
 }

 let arr = [1,2,3,4,6];
 let target = 3;
 console.log("the indexies are: ",twoSum(arr,target));
// Time Complexity: O(n)
// Space Complexity: O(1)



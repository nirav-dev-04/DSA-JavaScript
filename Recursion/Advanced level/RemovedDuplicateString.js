// 1. Take the first character.
// 2. If we have not seen it before → add it to answer.
// 3. Move to the next character using recursion.
// 4. Stop when we reach the end of the string.

function  removeDuplicates(str,i=0,seen={},ans=""){

    //base case
    if(i==str.length){
       return ans;
    }

    //kaam

    let ch = str[i];

    //check if char is seen or not
    if(!seen[ch]){
       ans+=ch;  //store and add in ans
       seen[ch]=true; //mark as seen

    }

    //recurive call/formauls
     return removeDuplicates(str,i+1,seen,ans);
}
console.log(removeDuplicates("hyy")); 
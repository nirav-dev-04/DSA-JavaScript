// using recursion

// If you place 1 vertical tile → solve for (n-1)
// If you place 2 horizontal tiles → solve for (n-2)
// Total ways = ways(n-1) + ways(n-2)
// n = 0 → 1 way
// n = 1 → 1 way



const TP = (n) =>{
   //base case
  if(n==0 || n==1)
    return 1;

  //recursive case/formula
  return TP(n-1) + TP(n-2);
   

}

console.log(TP(5));   //8
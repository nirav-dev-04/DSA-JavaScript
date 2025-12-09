const SumOfNNaturalNumbers = (n) => {

   let sum = 0;
   if (n===1) //base case
    return 1;
   else{
    sum = n + SumOfNNaturalNumbers(n-1); // recurrnce formaula/relation
   }
    return sum;
}

console.log("The syums is the : ",SumOfNNaturalNumbers(5));
    



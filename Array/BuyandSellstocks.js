// used the kadansAlgo logic
// topic: Buy and sell stocks to maximize profit
// pattern: Pattern is similar to finding largest element — traverse + compare.
// time complexity: O(n)
// space complexity: O(1)

function maxProfit(prices){
   let minPrice = Infinity;
    let maxProfit = 0;

   for(let price of prices){
     minPrice = Math.min(minPrice,price);
      maxProfit = Math.max(maxProfit,price - minPrice);
   }
   return maxProfit;
}

let prices = [7,1,5,3,6,4];
console.log(maxProfit(prices));
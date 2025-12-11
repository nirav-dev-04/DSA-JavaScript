// For n friends:

// Option 1: Friend stays single
// Remaining friends = n-1
// Ways = f(n-1)

// Option 2: Friend pairs with any one of the (n-1) friends
// Choose 1 from (n-1) friends → (n-1) ways
// Remaining friends = n-2
// Ways = (n-1) * f(n-2)

// Total ways = f(n-1) + (n-1) * f(n-2)

const friendPair = (n) => {
  //base case
  if(n===1) return 1;
  if(n===2) return 2;

  //for single person
  const single = friendPair(n-1);

  //for pairing
  let pair = (n-1)*friendPair(n-2);

  return single + pair;
}

console.log(friendPair(4)); //10
// We want binary strings of length n with no consecutive 1s.

// If we put 0 → safe → solve for (n-1)
// If we put 1 → allowed only if previous was 0 → solve for (n-2)

// Total ways = f(n-1) + f(n-2)

// Base:
// f(1) = 2   // 0,1
// f(2) = 3   // 00,01,10

const binaryString = (n) => {
  //base case

  if(n==1) return 2;
  if(n==2) return 3;

  //recursive case/formula
  return binaryString(n-1) + binaryString(n-2);
}
console.log(binaryString(4)); 
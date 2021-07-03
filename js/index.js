// Recursion
// base case is so important!

function power(base, exp) {
  if (exp === 0) return 1;
  if (exp === 1) return base;
  return base * power(base, exp - 1);
}

function factorial(num) {
  if (num === 0) return 1;
  if (num === 1) return num;
  return num * factorial(num - 1);
}

function productOfArray(arr) {
  if (!arr.length) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}

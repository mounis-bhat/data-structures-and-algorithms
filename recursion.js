//* Recursion: When a function calls itself, until it doesn't! In recursion we are doing the same thing in each iteration and each time we run the function we are making the problem smaller. In recursion we have a base case and a recursive case. When we hit base case the function stops calling itself and in recursive case it continues as expected

const factorial = function (n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
};

const result = factorial(5);

console.log(result);

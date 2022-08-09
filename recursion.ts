//* Recursion: When a function calls itself, until it doesn't! In recursion we are doing the same thing in each iteration and each time we run the function we are making the problem smaller. In recursion we have a base case and a recursive case. When we hit base case the function stops calling itself and in recursive case it continues as expected

//* Factorial
function factorial(n: number): number {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

//* String reversal
function reverseString(str: string): string {
  if (str === "") return "";
  return reverseString(str.substring(1)) + str.charAt(0);
}

//* Palindrome
function isPalindrome(strs: string): boolean {
  if (strs.length === 0 || strs.length === 1) return true;
  if (strs.charAt(0) === strs.charAt(strs.length - 1)) {
    return isPalindrome(strs.substring(1, strs.length - 1));
  }
  return false;
}

//* Convert to binary
function convertToBinary(num: number, result = ""): number {
  if (num === 0) return Number(result);
  result = (num % 2) + result;
  return convertToBinary(Math.floor(num / 2), result);
}

//* Sum upto n
function sum(num: number): number {
  if (num === 1) return num;
  return num + sum(num - 1);
}

//* Binary Search Algorithm (Divide and conquer, works on sorted arrays)
function binarySearch(
  arr: number[],
  left: number,
  right: number,
  target: number
): number {
  if (left > right) throw "Invalid Number";

  let mid = Math.floor((left + right) / 2);

  if (target === arr[mid]) return mid;

  if (target < arr[mid]) {
    return binarySearch(arr, left, mid - 1, target);
  }
  return binarySearch(arr, mid + 1, right, target);
}

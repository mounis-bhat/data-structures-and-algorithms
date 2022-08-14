//* Anagram

const anagram = function (firstString, secondString) {
  let firstCharMap = new Map();
  let secondCharMap = new Map();

  if (firstString.length !== secondString.length) return false;

  for (character of firstString) {
    if (firstCharMap.get(character)) {
      firstCharMap.set(character, firstCharMap.get(character) + 1);
    } else {
      firstCharMap.set(character, 1);
    }
  }

  for (character of secondString) {
    if (secondCharMap.get(character)) {
      secondCharMap.set(character, secondCharMap.get(character) + 1);
    } else {
      secondCharMap.set(character, 1);
    }
  }

  for (entry of firstCharMap.keys()) {
    if (firstCharMap.get(entry) !== secondCharMap.get(entry)) {
      return false;
    }
  }

  return true;
};

//* Smallest missing natural number in an array

const getSmallestNumber = function (array = [0]) {
  // let max = 0;
  // let items = new Map();
  // for (char of array) {
  //   if (max < char) max = char;
  //   items.set(char, true);
  // }
  // max++;
  // for (let i = 1; i <= max; i++) {
  //   if (!items.get(i)) return i;
  // }

  let result = [];

  for (let i = 0; i < array.length; i++)
    if (array[i] > 0) {
      result[array[i] - 1] = array[i];
    }

  for (let i = 0; i <= result.length; i++) if (!result[i]) return i + 1;
};

/*
 * Implement a function called memoize which returns another function that memoizes the results based on input params
 */

const double = function (a) {
  console.log("Running");
  return a + a;
};

const memoize = function (fn) {
  const map = new Map();

  return function (n) {
    if (!map.has(n)) {
      const res = fn(n);
      map.set(n, res);
      console.log(res);
    } else {
      console.log(map.get(n));
    }
  };
};

const memoizedDbl = memoize(double);

memoizedDbl(5);
memoizedDbl(5);

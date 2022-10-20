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

// Check if a sentence is a pangram

/**
 * @param {string} sentence
 * @return {boolean}
 */

const checkIfPangram = function (sentence) {
  const alphabets = {
    a: false,
    b: false,
    c: false,
    d: false,
    e: false,
    f: false,
    g: false,
    h: false,
    i: false,
    j: false,
    k: false,
    l: false,
    m: false,
    n: false,
    o: false,
    p: false,
    q: false,
    r: false,
    s: false,
    t: false,
    u: false,
    v: false,
    w: false,
    x: false,
    y: false,
    z: false,
  };

  for (char of sentence) {
    alphabets[char] = true;
  }

  for (let alphabet in alphabets) {
    if (!alphabets[alphabet]) return false;
  }

  return true;

  // const uniqueAlphabets = new Set(sentence.split(""));

  // if (!uniqueAlphabets.size > 26) return false;

  // return true
};

// Implement valid parentheses

const isValid = function (s) {
  const bracket = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  let heap = [];

  for (char of s) {
    if (bracket[char]) {
      heap.push(bracket[char]);
    } else {
      const popped = heap.pop();
      if (char !== popped) return false;
    }
  }
  return !heap.length;
};

const removeDuplicates = function (nums) {
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] === nums[index + 1]) {
      nums.splice(index, 1);
      index--;
    }
  }
  return nums;
};

// alternate method

const removeDuplicatesAlt = function (nums) {
  return new Set(nums);
};

const removeElement = function (nums, val) {
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] === val) {
      nums.splice(index, 1);
      index--;
    }
  }
  return nums;
};

const searchInsert = function (nums, target) {
  for (let index = 0; index < nums.length; index++)
    if (target <= nums[index]) return index;
  return nums.length;
};

const lengthOfLastWord = function (s) {
  let words = s.split(" ").filter((value) => value.length > 0);
  return words[words.length - 1].length;
};

const plusOne = function (array) {
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] !== 9) {
      array[i] = array[i] + 1;
      return array;
    } else {
      array[i] = 0;
    }
  }
  array.unshift(1);
  return array;
};

const twoSum = function (array, target) {
  const numsMap = {};

  for ([key, value] of array.entries()) {
    numsMap[value] = key;
  }

  for ([key, value] of array.entries()) {
    const complement = target - value;
    if (numsMap[complement]) {
      return [key, numsMap[complement]];
    }
  }
};

const removeVowels = function (string) {
  const vowels = ["a", "e", "i", "o", "u"];

  let removed = "";

  for (char of string) {
    if (!vowels.includes(char)) {
      removed += char;
    }
  }

  return removed;
};

const findLargest = function (string) {
  const removePunctuation = string
    .split("")
    .filter((value) => value !== ",")
    .join("");

  const uniques = new Set(removePunctuation.split(" "));

  const arr = Array.from(uniques);

  const sorted = arr.sort((a, b) => b.length - a.length);

  const [largest] = sorted;

  return largest;
};

const printNumber = function (i) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(i);
      resolve();
    }, 1000);
  });
};

const printAll = async function () {
  for (let i = 1; i <= 3; i++) {
    await printNumber(i);
  }
};

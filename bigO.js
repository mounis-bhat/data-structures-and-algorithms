//* Asymptotic notations help of to figure out the complexity of a code block, in other words they determine the efficiency and quality of our code.

//* A code block can take a certain amount of time and memory to complete it's execution, we use time complexity to determine how fast our code runs and space complexity to determine how much memory our code uses

//* Time complexity is measured in terms of number of operations because a faster machine can complete the task in less time then a slow machine, so time cannot be used as a unit for efficiency here. So we use the number of operations because it is always same

//* Asymptotic notations include:

//? Big Omega(Ω) Best case
//? Big Theta(θ) Average case
//? Big Oh(O) Worst case

//$: O(n) (Proportional)

const logItems = function (n) {
  for (let index = 0; index < n; index++) {
    console.log(index);
  }
};

//  logItems(5);

//* We passed logItems the number 5 (n) and it ran 5 (n) times, it creates a linear graph, the number of operations is always going to be proportional to (n)

/*

            |    /
            |   /
opeations ^ |  / O(n)
            | /
        n > |/_______  

*/

//? Drop constants

//* If we run another loop inside logItems functions the number of operations will be 2n, but this is where the simplification comes in, it doesn't matter if it's 2n 3n or 100n, if there is a constant we drop the constant we drop it and we say this code is O(n)

//$: O(n^2) (Nested Loops)

const logItemsNested = function (n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
};

// logItemsNested(5);

// * If we run a loop inside a loop the number of opeations will be n squared, that's the gist of O(n^2), just like the concept of Drop constants, it doesn't matter the what the value of the exponent is, any exponential value of n will be considered as O(n^2), the graph created is exponential

/*
            |  |
            |  |
opeations ^ |  | O(n^2)
            | /
        n > |/_______
*/

//? Drop Non-Dominants

//* Let's say we have another loop inside logItemsNested function, when we run it the number of operations will be O(n^2 + n), if the value of n is 100, n^2 will be 10000, here the value of n is neglegible when compared with n^2 so we follow the concept of Dropping Non-Dominants, so we remove n from O(n^2 + n) and the notation becomes O(n^2)

//$: O(1) (Constant)

const double = function (n) {
  return n + n;
};

const result = double(5);

console.log(result);

//* When we run a single opeation get the complexity of O(1), the graph is a line on x axis, it's also known as constant time complexity

/*
            |  
            |  
opeations ^ |   
            | 
        n > |___________ O(1) 

*/

//$: O(log n) (Divide and conquer)

//* When we use divide and conquer on a sorted array to find an element we get the complexity of O(log n)

/*

            |  
            |  
opeations ^ |   
            | ___________ O(log n)
        n > |/___________  

*/

//? Different terms for input

const logDiffItems = function (n, m) {
  for (let index = 0; index < n; index++) {
    console.log(index);
  }
  for (let index = 0; index < m; index++) {
    console.log(index);
  }
};

logDiffItems(2, 10000000000);

//* In the above case we can't consider both arguments as n and drop constant because both the arguments can have huge variation in thier values, so in this case the complexity becomes O(m+n), similarly for nested loops the complexity will be O(m*n)

//$ JS Arrays

//* Array.prototype.pop(), Array.prototype.push() and getting items from array using the index have a complexity of O(1) and rest of the common methods like Array.prototype.splice(), Array.prototype.shift() etc have the complexity of O(n)

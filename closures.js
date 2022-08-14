// * JS engine allows us to access variables that are in the outer execution context of a function, that's the gist of closures.

// Basic example
function makeGreet(lang) {
  return function (firstName, lastName) {
    lang === "en" && console.log("Hello " + firstName + " " + lastName);
    lang === "es" && console.log("Hola " + firstName + " " + lastName);
  };
}

let greetEn = makeGreet("en");
let greetEs = makeGreet("es");

greetEn("John", "Doe");
greetEs("John", "Doe");

// * This example of closures helps us to understand that functions don't affect variable values unless we dont have an execution context, in this case if use don't use an IIFE and return a function inside it the value i will always be 2. So we create a new execution context by calling the function inside the push function and we receive desired values. We can also initialize a new variable and set it's value equal to i inside the for loop by using 'let', that's will also give us the desired values. This happens because let is block scoped

function makeFunctions() {
  let arr = [];

  for (i = 0; i < 2; i++) {
    arr.push(
      (function (j) {
        return function () {
          console.log(j);
        };
      })(i)
    );
  }

  return arr;
}

let fns = makeFunctions();

fns[0]();
fns[1]();

/*
* Implement a counter function
! But the count should increment only when the function is called
 */

const counter = function () {
  let value = 0;
  return function () {
    return ++value;
  };
};

const count = counter();

console.log(count());
console.log(count());

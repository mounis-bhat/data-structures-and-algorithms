let myObj = {
  firstName: "Mounis",
  lastName: "Bhat",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

function logName(lang) {
  console.log(this.fullName());
  console.log(lang);
  console.log("-------------------------");
}

//* bind is a property of the function object, it returns a new function (makes a copy of the function), it takes an argument which allows the 'this' keyword to point to the argument which was provided. In the below example logName.bind(myObj); returns a function which is called by using IIFE, the argument i.e 'myObj' allows 'this' keyword of logName function to point to myObj

logName.bind(myObj)("En");

//* call is another property of the function object, it calls the function directly unlike bind(which creates a new copy of the function), it takes an argument which allows the 'this' keyword to point to the argument which was provided. In the below example logName.call(myObj, "En"); calls the function on the go, the argument i.e 'myObj' allows 'this' keyword of logName function to point to myObj and we normally provide the other arguments

logName.call(myObj, "Es");

//* apply is very similar to call, the only difference is that it takes the arguments as an array

logName.apply(myObj, ["Ar"]);

//* Usage: In this example newObj doesn't have the property fullName so we use call method to get the full name(function borrowing)

const newObj = {
  firstName: "Muhammad",
  lastName: "Nouman",
};

function showUsage() {
  let name = myObj.fullName.call(newObj);
  console.log(name);
}

//* Function currying: Creating a copy of a function with default parameters, in the example below we are currying the product function using bind. By providing parameters to bind we make the argument values constant for the product function.

function product(a, b) {
  return a * b;
}

console.log(product.bind(this, 2)(3));

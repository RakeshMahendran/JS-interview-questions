// Function in javascript

// Q1 - What is Function Declarations?

function square(num) {
  return num * num;
}

square(5);
//This is also known as function definition, function statement

//What is Function expression?

//When we store a function to a constant or variable that is known as function expression, we
const squaring = function square(num) {
  return num * num;
};

//Here this is known as anonymous function declaration.

// Q-3 What are first class functions

function square(num) {
  return num * num;
}

function display(fn) {
  console.log("Square is", fn(5));
}

display(square);

// A first class function is a function where we can pass another function in it just like a variable and manipulate it and return it

//Q-4 What is IIFE?
//IIFE means immmediately invoked Function Expressions

(function something(n) {
  console.log(n * n);
})(4);

// The function which is immediately invoked after its declaration is known  as IIFE

//Q-5 Output based IIFE
(function iife(x) {
  (function iffe2(y) {
    console.log(x, y);
  })(2);
})(3);

//Q-6 Closure
//The ability of a function to access variables and constants which are lexically out of its scope is known as closure

//Q-7 Function scope

var name = "Rakesh";
var num1 = 5;
var num2 = 3;

function fn1() {
  return num1 * num2;
}

console.log(fn1()); //Rrturns 15

function Multiply() {
  num1 = 8;
  num2 = 10;
  function fn2() {
    return name + num1 * num2;
  }

  return fn2();
}

console.log(Multiply());

//Q-8 Function scope output based

for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log("i", i);
  }, i * 1000);
}

//For using let we will get the output like i 1, i2,i3,i4,i5 cause it has block scope
//But when we use var , that is not block scoped

//Q-9 Function Hoissting
funcHost();

function funcHost(x) {
  console.log("x", x);
  x = 4;
}
//the console.log(x) will be undefined but we can call the function before or after its declaration that doesn't be undefined

//Q-10 output based func scope
//When we have a variable present in a scope we will not considered the variable of the same name outside the scope
var x = 21;

var fun = function () {
  console.log(x);
  var x = 20;
};

fun();

//Q--11 Params vs Arguments

//The values we receive inside a function is called params
function something1(num1, num2) {
  console.log("num1*num2", num1 * num2);
}
//The values that we pass inside the function is called arguments
something1(5, 6);

//Here we are using the "..." "spreadoperator" to spread the values in the array to their original type

function something2(num1, num2) {
  console.log("nunum2", num1 * num2);
}

var arr = [5, 6];

something2(...arr);

//Here we are using the "..." "restoperator" to resturcture the values into an array
function somethin(...num) {
  console.log("nunum2", num[0] * num[1]);
}

var arr = [6, 6];

somethin(...arr);

//Also we can have this example
function something4(...just) {
  console.log("nunum2", just);
}

something4(7, 7);

//Output based params vs arguments

function opsomen(a, x, y, ...number) {
  console.log(x, y, number); // this will print 6 7 [] (an empty array)
}

opsomen(5, 6, 7);

//Call back function
//Passing one function into another function and calling it

//Arrow functiions vs Regular function

//1-Syntax
function square1(num) {
  num * num;
}

const square2 = (num) => {
  return num * num;
};

//2- Implicit "return" keyword
const square3 = (num) => num * num;

//3-arguments
function fn() {
  console.log(arguments);
}

fn(1, 2, 3);

//we can't do this in arrow function this will return arguments undefined, you need to pass the arguments as params
const fn2 = (params) => {
  console.log(params);
};
fn2(1, 2, 3);

//4 - this keyword - o/p based

let user = {
  username: "Ronaldo",
  rc1: () => {
    console.log("this.username", this.username); // undeffined
  },
  rc2() {
    console.log("this.username", this.username); // ronaldo
  },
};

user.rc1();
user.rc2();

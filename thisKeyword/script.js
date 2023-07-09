// 'this' keyword in Js (Implicit Binding)
//Explain 'this keyword?
//Similar to english this keyword is used to reference something in js also

const user = {
  name: "Rakesh",
  age: 20,
  getDetails() {
    console.log(this);
  },
};

user.getDetails();

//This keyword in normal function refers to the immediate parent object but
//in arrow function this keyword will focus on the window object only
//The arrow function will refer to the parent function only if it is inside a normal function

const user1 = {
  name: "Rakesh",
  age: 20,
  getDetails() {
    const nestedFunction = () => console.log(this, "this");
    nestedFunction();
    //this will work normally as the function , this will refer to the parent object
  },
};

user1.getDetails();

const user2 = {
  name: "Rakesh",
  age: 20,
  getDetails: () => {
    const nestedFunction = () => console.log(this, "this");
    nestedFunction();
    //this will refer to the window object
  },
};

user2.getDetails();

//this keyword inside a class or constructor
class hee {
  constructor(n) {
    this.name = n;
  }

  getName() {
    console.log(this.name, "hello");
  }
}

const User = new hee("Rak");

console.log("user", User);

//What is the output

const printParent = {
  firstName: "John Constantine",
  getNamesss() {
    const firstName = "Johnwick";
    return this.firstName;
  },
};

console.log(printParent.getNamesss(), "user.getName()");
//Here the out will be the John constanting, lets break it down how
//the print parent will give the printParent object and when we use getNamesss function
// in dot notation we will get access to print the getNamess which is returning the immediate parent name only

//What is the result of accessing its ref?WHY?
function makeUser() {
  return {
    name: "Johnny",
    ref: this,
  };
}

let using = makeUser();

console.log(using.ref.name);
//The result for this will be " "(empty), because when we console using it gives the
// makeUser function object and then using the dot notation we are entering in to the ref
//the ref will refer to the window object, so there is not key called name in the window object
//so it will print an empty string

//So how to fix the above ref
//By making the ref a function, we can get the immediate parent name

function continuingUser() {
  return {
    name: "Johnny",
    ref() {
      return this;
    },
  };
}

let continuing = continuingUser();

console.log(continuing.ref().name);
//this will give the immediate parent functions name

const regretUser = {
  name: "Johny Bairstow",
  logMessage() {
    console.log(this.name, "ki");
  },
};
//
setTimeout(regretUser.logMessage, 1000);
//this will print " "(emptu string) with ki

//To fix and get the name we need to use the anonymous function
setTimeout(function () {
  regretUser.logMessage();
}, 1000);

//we can also fix this by calling the
//logMessage();
//function

//q-4 : what is the output?
const outputUser = {
  name: "James Anderson",
  greet() {
    return `Hello, ${this.name}`;
  },
  farewell: () => {
    return `Hello, ${this.name}`;
  },
};

console.log(outputUser.greet());
console.log(outputUser.farewell());

//q-5 create an object calculator

let calculator = {
  name: "Calculator",
  read() {
    //  this.a = +prompt("a = ", 0)
    //  this.b = +prompt("b = ", 0);
    this.a = 10;
    this.b = 10;
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

console.log(calculator.read(), "read");
console.log(calculator.sum(), "calculator.sum()");
console.log(calculator.mul(), "calculator.mul()");

//q-6 : what will be the output

var length = 4;
function callback() {
  console.log(this.length);
  //this will print only 4 not 5 because of the immediate parent object has no length variable so it will take the global variable

}

const object = {
  length: 5,
  method(fn){
    fn()
  },
};

object.method(callback)

//similarly when we do it for another method
var length = 4;
function callback() {
  console.log(this.length);

}

const object2= {
  length: 5,
  method() {
    //now when the function refers to the arguments we can access it using the index method
    //arguments = [callback,2,3]
    //and this will give the length of the array because the array will have an object and it is a function of immmediate parent object
    arguments[0]();
  },
};

object2.method(callback,2, 3);
//answer 3

//q-7 : Implement calc
let calc = {
  total:0,
  add(a){
    this.total += a;
    return this
  },
  multiply(a){
    this.total *= a;
    return this
  },
  subtract(a){
    this.total -= a;
    return this
  }
}


const result = calc.add(10).multiply(5).subtract(30).add(10)
console.log("result.total",result.total);



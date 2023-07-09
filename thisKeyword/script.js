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
    console.log(this.name,"hello");
  }
}

const User = new hee("Rak");

console.log("user",User);

//What is the output

const printParent = {
  firstName:"John Constantine",
  getNamesss(){
    const firstName = "Johnwick"
    return this.firstName
  }
}

console.log(printParent.getNamesss(),"user.getName()")
//Here the out will be the John constanting, lets break it down how
//the print parent will give the printParent object and when we use getNamesss function
// in dot notation we will get access to print the getNamess which is returning the immediate parent name only



//What is the result of accessing its ref?WHY?
function makeUser() {
  return {
    name:"Johnny",
    ref:this,
  }
}

let using = makeUser()

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
    ref(){
      return this
    },
  };
}

let continuing = continuingUser();

console.log(continuing.ref().name);
//this will give the immediate parent functions name 


const regretUser = {
  name:"Johny Bairstow",
  logMessage(){
    console.log(this.name,"ki")
  }
}
//
setTimeout(regretUser.logMessage,1000)
//this will print " "(emptu string) with ki

//To fix and get the name we need to use the anonymous function
setTimeout(function(){
  regretUser.logMessage();
}, 1000)

//we can also fix this by calling the 
logMessage( )
//function
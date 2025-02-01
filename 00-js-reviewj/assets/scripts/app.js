
//Import and Export
import { apiKey , newkey as newerkey} from "./util.js"; //normal import & alias
import defaulval from './util.js'; //default import
import * as util from "./util.js"; //can import all as object
console.log(apiKey);
console.log("default is : " + defaulval);
console.log("alias is : " + newerkey);
console.log("Object is: " + util.newkey); //use object like this

// Variables and constants
let userMessage = "Hello world"; //variable
const message = "hi hello"; //constants cannot be reassigned. (readonly)


//Operators +-/* but also === (equality), >,<,>=,<=, 

//Functions
function greet(name = "Sam") // you can set a default val and override
{
    console.log("hi there " + name);
}
greet("Max");


//objects
const users = {
    name: "max",
    age: 18
}
console.log(users.name);


//building a class
class User {
    constructor(name ,age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log("hello");
    }
}
const newUser = new User("sam", 24);
newUser.greet();



// //arrays
const hobbies = ["sport", "cook", "reading"];
console.log(hobbies[1]);
const editHobbies = hobbies.map((item)=> item + "!");
console.log(editHobbies);



// //destructuring
const [firstName, lastName] = ["Sam", "Wimmer"]; //by position
const {name, age} = { //by name
    name: "max",
    age: 18
};
function storeOrder({id, currency}) { // destructuring
    localStorage.setItem('id', id);
    localStorage.setItem('currency', currency);
  }



// //spread operator "..."
const oldHobbies = ["sport", "cook", "reading"];
const newHobbies = ["gym", "school"];
const allHobbies = [...oldHobbies, ...newHobbies];
console.log(allHobbies);
const user = { //by name
    name: "max",
    age: 18
};
const extendedUser = { //by name
    hair: "brown",
    sport: "soccer",
    ...user
};


//if and loops
const olderHobbies = ["sport", "cook", "reading"];

for(const hobby of olderHobbies)
{
    console.log(hobby)
}


function handle(){ console.log("time out");}
const handle2 = () => console.log("time out again");

setTimeout(handle, 2000);
setTimeout(handle2, 4000);
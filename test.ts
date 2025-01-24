import { stringify } from "querystring"

console.log("hi im testing typescript")



//variable declaration


let age: number = 19

let username: string = "saurav"

let isStudent : boolean  = true

let hobbies :string[]  = ["coading " , "Gaming"]


let city = "patna"

let userId : string | number 


userId = "saurav9097"
userId = 327868329

// console.log(age , username , isStudent , hobbies,city , userId)



//functions declaration

function addn(a:number , b:number) :number {
    return (a+b)
}

function add(a:number , b:number) : string{
    return String(a+b)
}

const multiply = (x:number , y:number) : number => x*y



console.log(add(3,4))

function greet (name:string , age?:number):string{
    return age? `hello ${name} , age${age}` : `hello${name}`
}

console.log(greet("saurav"))


//objects and interfaces

/** defining object type **/

const person : {name : string , age:number | string} = {
    name : "saurav",
    age : 19
}

console.log(person)

/**using an interface**/

interface User {
    name : string ,
    age :  number | string,
    isAdmin : boolean
}

const user1 :User = {
    name : "saurav",
    age  : "19" ,
    isAdmin : false

}

console.log(user1)


//classes and objects 

class Car {
    brand: string;
    x: number;  // Declare x as a class property

    constructor(brand: string, x: number) {
        this.brand = brand;
        this.x = x;  // Initialize x inside the constructor
    }

    drive(): void {
        console.log(`${this.brand} is driving`);
    }

    table(): number {
        console.log(this.x * this.x);  // Use 'this.x' instead of 'x'
        return this.x * this.x;  // Return a number as expected
    }
}

const myCar = new Car("Tesla", 4);  // Now passing two arguments correctly

myCar.drive();  // Output: "Tesla is driving"
myCar.table();  // Output: "16"

//Enums (Predefined Values)

enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}
console.log(Direction.Up); // Output: 1

//Type Aliases

type Employee = { name: string; role: string };
const dev: Employee = { name: "Saurav", role: "Software Engineer" };



function pair<T, U>(first: T, second: U): [T, U] {
    return [first, second];
}



//1️⃣ What is a Generic Function?

// A generic function allows you to write reusable functions that work with multiple types instead of a single fixed type.



let mixedPair = pair<string, number>("Saurav", 19);
console.log(mixedPair); // Output: ["Saurav", 19]

function printObject<T>(obj: T): void {
    console.log(obj);
}

printObject({ name: "Saurav", age: 19 }); // ✅ Works with an object
printObject([1, 2, 3]); // ✅ Works with an array
printObject("Hello TypeScript"); // ✅ Works with a string


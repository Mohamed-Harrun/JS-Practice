// Perfect — you want **tasks/exercises mapped to this syllabus** so you can practice after each stage.
// I’ll create **practical tasks from beginner → pro**, following the same 17 sections.

// ---

// # **JavaScript Syllabus – Tasks**

// ## 1. **Introduction & Basics**

// * Create a simple calculator (add, subtract, multiply, divide).

// ---

// * Print `"Hello, JavaScript!"` in console.
console.log("Hello JavaScript");
// * Declare variables with `var`, `let`, `const` and show the difference.
var a =10
function variables(){
    let b=10
    console.log(a+b)
    return a;
}
console.log(variables());
// console.log("This value will n't show",b);
// * Check types using `typeof`.
console.log( "Type of data:",typeof a);

// ## 2. **Control Flow**

// * Write a program to check if a number is **even or odd**.
function oddEven (num){
if(num%2===0){
    console.log(`The Number ${num} is Even number`);
}
else{
    console.log(`The Number ${num} is Odd number`);
}
}
oddEven(5);
// * Print grades based on marks using `if-else`.

const m1 = 90;
const m2 = 99;
if (m1 && m2 >=90) {
    console.log(`The grade is A`)
} else {
    console.log(`The grade is B`)
}
// * Make a **simple menu** using `switch` (1: Tea, 2: Coffee, 3: Juice).
const menu = 'Tea';
switch(menu){
    case 'Tea':
        console.log(`The Item selected is ${menu}`);
        break;
    case 'Coffee':
        console.log(`The Item selected is ${menu}`);
        break;
    case 'Juice':
        console.log(`The Item selected is ${menu}`);
        break;
    default:
        console.log(`The Item are not existed`);
        break;
}
// * Print numbers from 1–50 using `for` loop.
for(i=0; i<=50; i++){
    console.log(i);
}
// * Print all even numbers from 1–100 using `while`.
let number = 1;
while(number<101){
    console.log(number);
    number++
}

// ---

// ## 3. **Functions**

// * Write a function to find **factorial** of a number.
function fact (num){
    let result = 1;
    for(i=num; i>0; i--){
    result *= i;
}
console.log(result)
}
fact(5);

// * Create a function that reverses a string.

function reverse(){
    let str = "Mohamed";
    console.log(str.split('').reverse().join(''))
}
reverse();
// * Write an **arrow function** to add two numbers.
adds =  (a,b) => {
return a+b;
}
console.log(adds(4,5));

// * Create a function that accepts any number of arguments and returns their sum (rest operator).
function sum (...numbers){
return numbers.reduce((total, num)=> total+num, 0)
}
console.log(sum(1,2,3,4,5));

// ---

// ## 4. **Objects & Arrays**

// * Create an object `car` with properties (brand, model, year) and a method `start()`.
const car = {
    brand: "BMW",
    model:"M3",
    year:2022,
    start: ()=>"The Car is started"
}
// * Access values using dot and bracket notation.
console.log(car.brand,car.model,car.year,car.start)
// * Create an array of numbers and:
const arr = [1,2,8,9,11,22,30,45];
//   * Find the max number.
console.log(Math.max(...arr));
//   * Use `map()` to double all numbers.
const MAP = arr.map((element)=>{
    return element*2;
})
console.log(MAP);
//   * Use `filter()` to get only even numbers.
const FILTER = arr.filter((element)=>element%2===0);
console.log(FILTER);
//   * Use `reduce()` to calculate sum.
const REDUCE = arr.reduce((total,element)=>total+element,0);
console.log(REDUCE);

// ---

// ## 5. **DOM Manipulation**

// * Create a button in HTML that changes background color on click.
const color = document.getElementById('color');
// const body = document.getElementsByTagName('body')
color.addEventListener('click',()=>{
    document.body.style.backgroundColor='gray';
})
// * Add a list of items dynamically with JavaScript. 
const newItem = document.getElementById('newItem');
const addBtn = document.getElementById('addBtn');
const listItem = document.getElementById('listItem');

addBtn.addEventListener('click', ()=>{
    const value = newItem.value.trim();
    if(value){
        const li = document.createElement('li');
        li.textContent=value;
        listItem.appendChild(li)
        newItem.value='';
    }
    else{
        alert('Bro add pannu')
    }
})

// * Create a counter with **Increment/Decrement** buttons.
const add = document.getElementById('add')
const sub = document.getElementById('sub')
const mainValue = document.getElementById('mainValue')
add.addEventListener('click',()=>{
const value =Number(mainValue.textContent);
mainValue.textContent = value+1;
})
sub.addEventListener('click',()=>{
const value =Number(mainValue.textContent);
mainValue.textContent = value-1;
})
// ---

// ## 6. **ES6+ Features**

// * Use template literals to print:
//   `"Hello, my name is X and I am Y years old."`
// * Create two JS files with modules (`import` & `export`).
// * Write an IIFE that runs automatically.
// * Use optional chaining to safely access `user.address.city`.

// ---

// ## 7. **Asynchronous JS**

// * Use `setTimeout` to print `"Loading..."` after 3 seconds.
setTimeout(()=>{
    console.log("Loading...");
},3000)
// * Use `setInterval` to print numbers 1–10 every second.
function intervel (){
    setInterval(()=>{
for(i=1;i<=10;i++){
    console.log(i)
}
},1000)
}
// intervel();
// * Create a **fake promise** that resolves after 2 seconds.
const promise = new Promise((resolve, reject)=>{
    resolve: console.log("Resolved")
    reject: console.log("Rejected")
})

promise.resolve
// * Fetch data from a public API (like `https://jsonplaceholder.typicode.com/posts`) and display titles.
async function fetchs (){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const response = await res.json();
    console.log(response)
}
fetchs();

// ---

// ## 8. **Advanced JS Concepts**

// * Write a closure that remembers a number and adds to it each call.
// * Demonstrate hoisting with `var` and `let`.
// * Create a class `Student` with properties and a method `getDetails()`.
// * Extend a class `Person` into `Employee`.

// ---

// ## 9. **Data Structures**

// * Use `Map` to store student marks.
// * Use `Set` to remove duplicates from an array.
// * Implement a **stack** with push/pop in JS.
// * Implement a **queue** with enqueue/dequeue.

// ---

// ## 10. **Error Handling**

// * Write code that throws an error if age < 18.
// * Use `try...catch` to handle division by zero.
// * Create a custom error `"Invalid Input"`.

// ---

// ## 11. **Advanced ES Features**

// * Create a generator function that yields numbers 1–5.
// * Use a `Symbol` as a unique object key.
// * Create a Proxy that logs whenever a property is accessed.

// ---

// ## 12. **JSON & APIs**

// * Convert a JS object to JSON (`JSON.stringify`).
// * Parse a JSON string to JS object (`JSON.parse`).
// * Fetch user data from API and display in list.

// ---

// ## 13. **Web APIs**

// * Save user’s name in **localStorage** and retrieve it.
// * Create a click counter using **sessionStorage**.
// * Use Geolocation API to get user’s location.
// * Copy text to clipboard with JS.

// ---

// ## 14. **Patterns**

// * Implement a **module pattern** using IIFE.
// * Create a singleton object (only one instance allowed).
// * Build a simple observer pattern (subscribe/notify).

// ---

// ## 15. **Testing & Tooling**

// * Write unit tests for a function that adds two numbers (using Jest or similar).
// * Setup ESLint in a project and fix warnings.
// * Transpile ES6 code to ES5 using Babel.

// ---

// ## 16. **Performance & Best Practices**

// * Implement a **debounce** function for a search bar.
// * Implement a **throttle** function for scroll events.
// * Optimize a loop that runs 1M times (compare `for` vs `map`).
// * Practice event delegation on multiple buttons.

// ---

// ## 17. **Interview-Level Challenges**

// * Implement your own `map()` as a polyfill.
// * Implement your own `bind()` as a polyfill.
// * Use `Promise.all` to run multiple promises together.
// * Write a function to flatten a nested array `[1, [2, [3, 4]]] → [1, 2, 3, 4]`.

// ---

// 👉 By completing these tasks section by section, you’ll **cover the entire roadmap from beginner to pro**.

// Do you want me to **make this into a 30-day daily task plan** (like Day 1: Basics, Day 2: Control Flow…), so you can follow it step by step?

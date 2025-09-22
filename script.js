// Perfect — you want **tasks/exercises mapped to this syllabus** so you can practice after each stage.
// I’ll create **practical tasks from beginner → pro**, following the same sections.

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


// ## . **Asynchronous JS**

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


// ##  **JSON & APIs**

// * Convert a JS object to JSON (`JSON.stringify`).
const obj = {
    name: 'Harrun',
    age: 22,
    isDeveloper: true
};
const json = JSON.stringify(obj);
console.log(json);
// * Parse a JSON string to JS object (`JSON.parse`).
const JSO = JSON.parse(json);
console.log(JSO);   
// ---

let promise = new Promise((resolve, reject)=>{
    let success = true;
    if(success){
        resolve("Promise is success")
    }
    else{
        reject("Promise is failed")
    }
})

promise.
then((r)=> console.log("The promise is resolved:", r)).
catch((err)=>console.log("Error:",err))


//  rotate an Array. 

const rtArr = [1,2,3,4,5];
let final = [];
for (i=1;i<rtArr.length;i++){
    final.push(rtArr[i]);
}
final.push(rtArr[0])
    console.log("Final",final);

const arr1  = [1,2,3,4];
const arr2  = [5,3,6,7,8];

const full = [...arr1, ...arr2];
const full1 = full.sort((a,b)=>a-b);
let duplicate = []
for(i=0; i<full1.length-1;i++){
    let test = full1[i]
    console.log("Value",test)
    for(j=i+1;j<full1.length;j++){
        let test2 = full1[j];
        if(test===test2){
            duplicate.push(test);
        }
        else{
            console.log("no duplicate")
        }
    }
}
console.log(full1)
console.log("The Duplicate value",duplicate)

//  async await
async function wait (){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            reject("The Promise Error")
        },2000)
    })
}
async function  getData(){
try {
    console.log("Waiting for the result");
    const response = await wait();
    console.log(response);
} catch (error) {
    console.log("Error", error);
}
}

getData();

// function fetchTodos () {
//     fetch("https://jsonplaceholder.typicode.com/todos")
//     .then((res)=>res.json())
//     .then((data)=> console.log(data))
//     .catch((error)=>console.log("Error:",error));
// }

// fetchTodos();

async function fetching (){
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos")
        const data = await res.json();
        console.log("Data:",data);
    } catch (error) {
        console.log("Error",error)
    }
}

fetching();

//  successfully complted the JavaScript Practice.

//  pattern 
// 1 3 4 10
// 2 5 9 11
// 6 8 12 15
// 7 13 14 16

//  one row four numbers 
// total 4 rows and 4 columns
// first up to down then down to up

function newMission (){
    for(i=1;i<=16;i++){
        console.log(i);
    }
}
newMission();
for (let i=1; i<=5; i++){
    let row ='';
    for(let j=1; j<=i; j++){
        row += '*';
    }
    console.log(row);
}

for (let i=1;i<=3;i++){
    for(let j=1; j<=4;j++){
        console.log(`i${i} j${j} `);
    }
}

for(let i=0;i<=3;i++){
    let row = '';
    for(let j=1; j<=i; j++){
        row += '*';
    }
    console.log(row)
}
//  Declaring a 2d array.

const grids = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

console.log(grids[1][0]);


const rows = 5;
const cols = 4;
const grid = [];
for (let i = 0; i < rows; i++) {
    grid[i] = [i];
  for (let j = 0; j < cols; j++) {
    grid[i][j] = j;
  }
}
console.log(grid);



/* 10 numbers last four namber take add and print */


// const numbersss = prompt("Enter your number:");
// const lastFour = numbersss.slice(-4); 
// let sumss = 0;

// for (let i = 0; i < lastFour.length; i++) {
//   sumss += Number(lastFour[i]); 
// }

// console.log("Sum of last 4 digits:", sumss);



const two = () => {
  let arrs = [1,1,2,4,3,4,5,6];
  let target = 6;

  for (let i = 0; i < arrs.length - 1; i++) {
    if (arrs[i] !== arrs[i+1]) {
      if (arrs[i] + arrs[i+1] === target) {
        console.log(arrs[i], arrs[i+1]);
      } else {
        console.log(`the number ${arrs[i]} and ${arrs[i+1]} is not a pair`);
      }
    } else {
      console.log(`the number ${arrs[i]} and ${arrs[i+1]} is not a pair`);
    }
  }
}
two();

/* take nested for loop in this loop outer loop is hour hand and inner loop is minute hand 
which means the hour takes one step forward and the inner loop will take 60 steps to make outer loop run one time */

const nest = ()=>{
    let arrs = [1,1,2,4,3,4,5,6];
    let target = 6;
    let sum=0;
    console.log(arrs.length);
 for(let i=0; i<arrs.length-1; i++){
    console.log(i);
    for(let j=1; j<arrs.length; j++){
        console.log(`the first value is ${arrs[i]} and second value is ${arrs[j]}`)
        if(arrs[i]!==arrs[j]){
            sum = arrs[i]+arrs[j];
            if(sum===target){
                console.log(`the number ${arrs[i]} and ${arrs[j]} are valid pair`);
            }else{
                console.log(`the number ${arrs[i]} and ${arrs[j]} are not valid pair`);
            }
            sum=0;
        }
        else{
            console.log(`the number ${arrs[i]} and ${arrs[j]} are not valid`);
        }
    }
 }   
}
nest();

/*  inga paaru first index aa edukkum  aprm atha matra index kuda compare pannum 
ippa ithula enna pannanum na first rendu num compare same aa iruntha 
number ra pottu not valid nu kattu
apdi illana add pannu target kuda compare pannu equal la iruntha 
equal nu solli print pannu
*/


//  find second largest number in an array without using inbuilt methods


const secondLargestt = ()=>{
    let array =[1,30,2,3,45,4,5,6,7,8,9,25];
    let first = 0;
    let second = 0;
    console.log(array.length-1);
    for(let i=0; i<array.length-1; i++){
        console.log(i);
        for(let j=1; j<array.length; j++){
            if(array[i]>array[j]){
                first=array[i];
            }
            else{
                second=array[j];
            }
        }
    }
    console.log(first);
}

// first oru program irukku na logic aa think panni eutha kathukko ithiini naalum athan panna inimey inum naraya pannanum
// appo than intha program la irukkra mathiri varathu

const secondLargest = ()=>{
const array = [1,2,3,4,18,26,58,57];
let first = -Infinity
let second = -Infinity
for(let num of array){
    if( num>first){
        second = first;
        first = num;
    }
    else if(num<first && num>second){
        second=num;
    }
}
console.log(second);
}

secondLargest();
/* 
Write a Program to check given year is Leap Year or not without using modulus (%) 
operator. 
Example: 
Input: 2024 
Output: It is a Leap Year */

// leap year means divisible by4 & by 400 
// and not by 100
const isDivisible = (year, divisor)=>{
    return Math.floor(year/divisor)*divisor === year;
}
const leapYear = (inp)=>{
    if((isDivisible(inp,4) && !isDivisible(inp,100)) || isDivisible(inp,400)){
        console.log(`the given year:${inp} is a leap year`);
    }
    else{
        console.log(`the given year:${inp} is not a leap year`);
    }
}
leapYear(2024);
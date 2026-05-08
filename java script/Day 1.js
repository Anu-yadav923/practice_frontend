/*
console.log("hello");
let name = "Kiki";

let message = `
<h1>Hello ${name}</h1>
<p>Frontend Developer</p>
`;

console.log(message);

console.log(`sum is ${3+5}`); 

  ---ODD EVEN--
let number = prompt("Enter a number : ")

if(number % 2 == 0){
    console.log(`Even number: ${number}`);
} else {
   console.log(`odd number: ${number}`); 
}

    //  GRADE CALCULATOR

 let marks = prompt("Enter your marks : ");

 if( 80 <= marks && marks  <= 90 ) {
    console.log("Grade A");
 } else if ( 70 <= marks && marks <= 80 ) {
    console.log("Grade B");
 } else if ( 60 >= marks && marks <= 70 ) {
    console.log("Grade C");
 } else if ( 50 >= marks && marks <= 60 ) {
    console.log("Grade D");
 }else if( 40 >= marks && marks <= 30 ) {
    console.log("Grade E");
 } else {
    console.log("fail..");
 } 


for(let i = 10; i > 0; i--) {
    console.log(i);
}


let sum = 0;
for(let i = 1; i<= 100; i++) {
    sum += i;
   
}
console.log(sum);
*/

let fruits = ["mango", "banana", "apple"];

for(let fruit of fruits) {
    console.log(fruit);
}

function greeting(name) {
    console.log(`hello ${name}`);
}

greeting("Anu");


let numbers = [2,4,6,3,2,9];
let maxVal = numbers[0];
for(let i = 1; i<numbers.length; i++){
    if(numbers[i] >= maxVal){
        maxVal = numbers[i];
    }
}

console.log(maxVal);
let call = prompt("choose 1: sum,2: minus, 3: mul, 4: division");

function sum(a,b) {
    return a+b;
}
function minus(a,b) {
    return a-b;
}
function mul(a,b) {
    return a*b;
}
function division(a,b) {
    return a/b;
} 
if(call == 'sum') {
    let result = sum(2,3);
console.log(result);
}if(call == 'minus') {
    let result = minus(2,3);
console.log(result);
}
if(call == 'mul') {
    let result = mul(2,3);
console.log(result);
}
if(call == 'division') {
    let result = division(2,3);
console.log(result);
}
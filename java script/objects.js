let user = {
    name : 'Anu',
    age : 21,
    passing_year : 2027
};
let key = 'age';


console.log(user.name);
console.log(user[key]);
user.age = 22;
user.country = "INDIA";
delete user.country;
console.log(user);

// METHODS--function inside object

let car = {
    brand:'BMW',
    color :() =>{
       console.log('black') 
    },
    
}
console.log(car);

// NESTED OBJECT
let student = {
    name : "anu",
    address : {
        city: "Hazaribagh",
        state: "Jharkhand"
    }
};
console.log(student.address.city);


// ARRAY OF OBJECTS
let snacks = [
    {
        chocolate : 'Dairy milk',
        price : 20
    },

    {
        ice_cream : 'amul',
        price : 20
    }

];
console.log(snacks[0]);
console.log(snacks[0].price);

// MAP -- always returns a new array, original array is untouched.
let numbers = [1,2,3];

let double = numbers.map((num) =>{
    return num * 2;
});

console.log(double);
console.log(numbers);

// FILTER -- keeps only the elements that passes the condition
let values = [1,2,3,4,5];
let even = values.filter((num) =>{
    return num % 2 === 0;
});
console.log(even);
console.log(values);

//FIND() -- returns the first matching value.
let username = [
   {
    student: 'Anu'
   },

   {
    student: 'Gourab'
   }
];

let name = username.find((idx) =>{
    return idx.student === 'Anu';
});
// Async function
console.log("start");
setTimeout(() =>{
    console.log("Hiii")
},3000)
console.log("end");

//mini-project for async/await

let btn = document.getElementById("btn");
btn.addEventListener("click", async() =>{
    let response =await fetch( "https://jsonplaceholder.typicode.com/users");
    console.log(response);
    let data = await response.json();
    console.log(data);
})
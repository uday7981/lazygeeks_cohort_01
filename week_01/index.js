//variables in js
let userName = "John";
const age = 20;

console.log(userName, age);

//strings in js
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log(fullName);

//numbers in js
let num1 = 10;
let num2 = 20;
let sum = num1 + num2;
console.log(sum);

//arrays in js
let fruits = ["apple", "banana", "cherry"];
console.log(fruits);

//objects in js
let person = {
    name: "John",
    age: 20,
    city: "New York"
};
console.log(person);

//loops in js
var users = ["John", "Jane", "Jim", "Jill"];// john ==> 0

for (let i = 0; i < users.length; i++) {
    console.log(users[i]);
}




//while loop
let i = 0;
while (i < users.length) {
    console.log(users[i]);
    i++;
}

var users = [{
    username: "John",
    age: 20,
    city: "New York"
},
{
    username: "Jane",
    age: 21,
    city: "New York"
}]

console.log(users[0].username + " is " + users[0].age + " years old and lives in " + users[0].city);

// //function to print user
function printUser(user) {
    console.log(user.username + "is" + user.age + "years old and lives in" + user.city);
}
for (let i = 0; i < users.length; i++) {
    printUser(users[i]);
}


function sumAll(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
}
console.log(sumAll(1, 10));




// Callback function example
// A callback is a function passed as an argument to another function

// Example 1: Simple callback
function greet(name, callback) {
    console.log('Hello ' + name);
    callback(); // Executing the callback function
}

function callbackFunction() {
    console.log('I am callback function');
}

// Passing function as an argument
greet('John', callbackFunction);

// Example 2: Callback with parameters
function calculator(num1, num2, operation) {
    return operation(num1, num2);
}

// Different callback functions
function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

// Using calculator with different callbacks
console.log('Addition:', calculator(5, 3, add)); // Will output: Addition: 8
console.log('Multiplication:', calculator(5, 3, multiply)); // Will output: Multiplication: 15

// Example 3: Real-world like scenario
function fetchData(callback) {
    // Simulating an API call with setTimeout
    setTimeout(() => {
        const data = {
            id: 1,
            name: 'John Doe',
            email: 'john@example.com'
        };
        callback(data);
    }, 2000);
}

function processData(data) {
    console.log('Processed data:', data);
}

// Fetching and processing data
console.log('Fetching data...');
fetchData(processData);


//star pattern
for (let i = 1; i <= 5; i++) {
    console.log("*".repeat(i));
}

//star pattern without method

//outer loop is for rows
for (let i = 1; i <= 5; i++) {
    let star = "";
    //inner loop is for columns
    for (let j = 1; j <= i; j++) {
        star += "*";
    }
    //logs the new stars in new line
    console.log(star);
}





for


//pyramid pattern with function
function pyramid(n) {
        for (let i = 1; i <= n; i++) {
            console.log(" ".repeat(n - i) + "*".repeat(i));
        }
    }
pyramid(5);


    //star pattern with two functions


    //complexfn which inputs very large number and returns the sum of all numbers from 1 to that number
    function sumOfNumbers(n) {
        let sum = 0;
        for (let i = 1; i <= n; i++) {
            sum += i;
        }
        return sum;
    }
console.log(sumOfNumbers(1000000000));


//example of asyncronous function. I have a hey.txt file. I want to read the file and print the sum of all numbers in the file. use fs module to read the file.

// This section of code demonstrates the asynchronous nature of JavaScript.
// In JavaScript, some operations like reading a file or making a network request take time to complete.
// To handle these operations, JavaScript uses callbacks or promises to execute code after the operation is done.
// This is known as asynchronous programming.

// But, you might wonder, how does JavaScript do multiple things at the same time if it's single-threaded?
// The answer is, it doesn't. JavaScript can only do one thing at a time.
// However, it can switch between tasks very quickly, so it seems like it's doing multiple things at the same time.

// Think of it like a chef in a kitchen. The chef can only chop one vegetable at a time.
// But, the chef can quickly switch between chopping different vegetables, so it seems like they're chopping multiple vegetables at the same time.

// In JavaScript, this switching between tasks is done by the event loop.
// The event loop is like a manager that decides which task to execute next.

// Now, let's look at an example of asynchronous programming in JavaScript.
// First, let's define a function to calculate the sum of numbers from 0 to n.
function sum(n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += i;
    }
    console.log(sum);
}

// Next, we define a function that will be called when the file reading operation is complete.
// This function takes two parameters: an error object (if an error occurred) and the data read from the file.
function fileIsRead(err, data) {
    // If there's an error, log it and exit.
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    // If no error, convert the data to a number and call the sum function with it.
    sum(Number(data));
}

// Now, let's use the fs module to read a file asynchronously.
const fs = require('fs');
// The fs.readFile function takes three parameters: the file path, the encoding, and a callback function.
// The callback function is called when the file reading operation is complete.
fs.readFile('hey.txt', 'utf8', fileIsRead);

// Note that the following two console.log statements are executed immediately after the fs.readFile call.
// This is because the file reading operation is asynchronous, and the code execution does not wait for it to complete.
// Instead, the event loop switches to the next task, which is logging the messages to the console.
console.log("Reading file...");
console.log("File read successfully");

// So, even though JavaScript is single-threaded, it can still do multiple things at the same time using asynchronous programming and the event loop.

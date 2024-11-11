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


const fs = require('fs');

fs.readFile('chocolate.txt', 'utf8', fileIsRead);





var a = 10;
var b = "super";



console.log(a + b);




// // for (let i = 1; i <= 5; i++) {

// //     let star = "";
// //     for (let j = 1; j <= i; j++) {
// //         star += "**";
// //     }

// //     console.log(star);
// // }





// //DRY //DONT REPEAT YOURSELF

// function sum(firstNumber, lastNumber) {

//     console.log(firstNumber + lastNumber);
// }

// function multiply(firstNumber, lastNumber) {
//     console.log(firstNumber * lastNumber);
// }

// function divide(firstNumber, lastNumber) {
//     console.log(firstNumber / lastNumber);
// }

// function modulus(firstNumber, lastNumber) {
//     console.log(firstNumber % lastNumber);
// }

// function subtract(firstNumber, lastNumber) {
//     console.log(firstNumber - lastNumber);
// }


// console.log(multiply(10000, 2000));
















// console.log(sum(100, 200));









//*
//**
//***
//****
//*****




for (let i = 1; i <= 6; i++) {
    console.log("**".repeat(i));
}

for (let i = 1; i <= 5; i++) {
    let star = "";
    //inner loop is for columns
    for (let j = 1; j <= i; j++) {
        star += "*";
    }
    //logs the new stars in new line
    console.log(star);
}
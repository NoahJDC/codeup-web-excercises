"use strict";

// /**
//  * TODO:
//  * Create a function called 'sayHello' that takes a parameter 'name'.
//  * When called, the function should return a message that says hello to the passed in name.
//  *
//  * Example
//  * > sayHello("codeup") // returns "Hello, codeup!"
//  */
// function sayHello(name){
//     return "Hello, " + name;
// }
//
//
//     console.log(sayHello("Codeup"));
//
//
// /**
//  * TODO:
//  * Call the function 'sayHello' and pass your name as a string literal argument.
//  * Store the result of the function call in a variable named 'helloMessage'.
//  *
//  * console.log 'helloMessage' to check your work
//  */
// var helloMessage = sayHello("Noah");
// console.log(helloMessage);
//
//
//
// /**
//  * TODO:
//  * Store your name as a string in a variable named 'myName', and pass that
//  * variable to the 'sayHello' function. You should see the same output in the
//  * console.
//  */
//  var myName = "Noah";
//  console.log(sayHello(myName));
//
//
// // Don't modify the following line, it generates a random number between 1 and 3
// // and stores it in a variable named random
// var random = Math.floor((Math.random() * 3) + 1);
//
// /**
//  * TODO:
//  * Create a function called 'isTwo' that takes a number as a parameter.
//  * The function should return a boolean value based on whether or not the passed
//  * number is the number 2.
//  *
//  * Example
//  * > isTwo(1) // returns false
//  * > isTwo(2) // returns true
//  * > isTwo(3) // returns false
//  *
//  * Call the function 'isTwo' passing the variable 'random' as a argument.
//  *
//  * console.log *outside of the function* to check your work (you should see a
//  * different result everytime you refresh the page if you are using the random
//  * number)
//  */
// function isTwo(random){
//     return random === 2;
// }
// console.log(isTwo(random));
//
//
//
// /**
//  * TODO:
//  * Create a function named 'calculateTip' to calculate a tip on a bill at a
//  * restaurant. The function should accept a tip percentage and the total of the
//  * bill, and return the amount to tip
//  *
//  * Examples:
//  * > calculateTip(0.20, 20) // returns 4
//  * > calculateTip(0.25, 25.50) // returns 6.37
//  * > calculateTip(0.15, 33.42) // returns 5.013
//  */
//
// function calculateTip(percent, total){
//     var tip = total*(percent/100);
//     return tip;
// }
//  // console.log(calculateTip(10, 200));
//
// /**
//  * TODO:
//  * Use prompt and alert in combination with your calculateTip function to
//  * prompt the user for the bill total and a percentage they would like to tip,
//  * then display the dollar amount they should tip
//  */
// var amountTip = prompt("How much tip would you like to tip?");
// var billTotal = prompt("What was the total of the bill?");
// alert("You can tip: $" + calculateTip(amountTip, billTotal));
//
// /**
//  * TODO:
//  * Create a function named `applyDiscount`. This function should accept a price
//  * (before a discount is applied), and a discount percentage (a number between 0
//  * and 1). It should return the result of applying the discount to the original
//  * price.
//  *
//  * Example:
//  * > var originalPrice = 100;
//  * > var dicountPercent = .2; // 20%
//  * > applyDiscount(originalPrice, dicountPercent) // 80
//  *
//  * > applyDiscount(45.99, 0.12) // 40.4712
//  */
//
// function applyDiscount(price, percentage){
//     return (price - (price * percentage)).toFixed(2);
//
// }
//
// console.log(applyDiscount(45.99, 0.12));


/**
 * Extra function drills
 */

function identity(x){
    return x;
}
console.log(identity("sick"));

function isOdd(number){
    return (number % 2) ===1;
}
// console.log(isOdd(100));

function isEven(number) {
    return (number % 2) ===0;
}
// console.log(isEven(2));

function isPositive(number){
    return (number > 0)
}
// console.log(isPositive(-2));

function decrement(number){
    return (number - 1)
}
// console.log(decrement(4));

function hasSpaces(string) {
    return string.indexOf(' ') > -1;

}
console.log(hasSpaces('hello'));

function isFive(number){
    return number === 5;
}
console.log(isFive(5));

function square(number) {
    return number * number;
}
console.log(square(2));

function cube(number){
    return number * number *number;
}
console.log(cube(3));

function half(number){
    return number / 2;
}
console.log(half(4));

function double(number){
    return number * 2;
}
console.log(double(4));

function isValidPassword(username, password){
    return password.length > 5
        && password.indexOf(username) === -1
        && username.length <= 20
        && password[0] !== " "
        && password[password.length -1] !== " "
        && username[0] !== " "
        && username[username.length -1] !== " ";
}
console.log(isValidPassword('codeup', 'notastrongpassword'));

function isRightTriangle(a, b, c){
    return ((a * a) + (b * b)) === (c * c);
}
console.log (isRightTriangle(3, 4, 5));
//
//
//
// ** write a function named decrement that accepts a number
// ** and returns the number minus 1
// ** accepts a number, (takes in, is passed)
// function decrement(someNumber){
//     console.log('decrement was called!') ** having console.log inside the function is not bad for debugging, but not needed for end result.
//     return someNumber - 1;
// }
// **defining a function does_not_run the code in the function
// console.log(decrement(12));
//
// ** check our work, console.log the return value


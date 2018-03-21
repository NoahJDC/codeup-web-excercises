"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

var answer = confirm ("Would you like to enter a number?");
if(answer) {
    var inputNumber = parseInt(prompt("Input a number: "));
    if (isNaN(inputNumber)){
        alert("is not a number")
    }
    if ((inputNumber % 2) === 0) {
        alert("Number is even")
    } else {
        alert("Number is odd")
    }
    alert(inputNumber + 100);

    if ((inputNumber < 0)) {
        alert('Number is negative')
    } else {
        alert('Number is positive')
    }
}


/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
//
// function analyzeColor(color) {
//     if (color === 'blue') {
//         console.log(color + ' is the color of the sky.')
//     } else if (color === 'red') {
//         console.log('Strawberries are ' + color)
//     } else if (color === 'cyan') {
//         console.log("I don't know anything about " + color)
//     } else if (color === 'orange') {
//         console.log('Nothing rhymes with ' + color)
//     } else if (color === 'yellow') {
//         console.log('The banana is ' + color)
//     } else if (color === 'indigo') {
//         console.log(color + " is just like purple")
//     } else if (color === 'violet') {
//         console.log(color + ", you're turning violet.")
//     } else if (color === 'green') {
//         console.log("The leaves are " + color)
//     }
//     else {
//         console.log("Does not match color option.")
//     }
//
// }
// analyzeColor('orange');

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */
// analyzeColor(randomColor);

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

//
// function switchColor(color) {
//     switch (color) {
//         case "red":
//             alert("Strawberries are red.");
//             break;
//         case "orange":
//             alert("nothing rhymes with orange");
//             break;
//         case "yellow":
//             alert("Banana's are yellow.");
//             break;
//         case "green":
//             alert("The leaves are green.");
//             break;
//         case "blue":
//             alert("The sky is blue.");
//             break;
//         case "indigo":
//             alert("Indigo is basically purple");
//             break;
//         case "violet":
//             alert("Violet, you're turning violet.")
//             break;
//         default:
//             alert("None apply")
//             break;
//     }
// }
// switchColor(randomColor);
//
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

// var colorInput = prompt("Input a color: ");
// analyzeColor(colorInput);
// analyzeColor('input a color'); /** trying stuff out */
//
//
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(luckyNumber, totalAmount){
    var percentage;
    var afterDiscount;

    if (luckyNumber < 0 || luckyNumber > 5){
        return "Invalid lucky number given.";
    }
    percentage = calculatePercentage(luckyNumber);
    afterDiscount = totalAmount - (totalAmount * percentage);

    return afterDiscount;
}

console.log(calculateTotal(3, 45));



/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6


function calculatePercentage(num){
    var percentage;
    switch (num){
        case 0:
            alert("none apply");
            break;
        case 1:
            percentage = .10;
            break;
        case 2:
            percentage = .25;
            break;
        case 3:
            percentage = .35;
            break;
        case 4:
            percentage = .5;
            break;
        default:
            percentage = 1;
            break;
    }
    return percentage;
}

var luckyNumber = Math.floor(Math.random() * 6);

var totalBill = prompt("Input total bill: ");

alert("Your lucky number is: " + luckyNumber) ;
alert("Price before discount: " + totalBill);
alert("Price after discount: " + calculateTotal(luckyNumber, totalBill));




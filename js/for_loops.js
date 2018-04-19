"use strict";

function showMultiplicationTable(y){
    var x = 1;
    while(x <= 10){
        console.log( x + ' * ' + y +  " = " + (x * y));
        x++;
    }
}
showMultiplicationTable(2);



function oddOrEven() {

    for (var i = 0; i < 10; i++) {
        var randomNumber = Math.floor(Math.random() * 180) + ;
        if ((randomNumber % 2) === 0) {
        console.log(randomNumber + ' ' + "are evens");
        } else {
            console.log(randomNumber + ' ' + "are odds");
        }
    }
}
oddOrEven();

function Repeat() {
    for (var i = 1; i <= 9; i++) {
        var string = i.toString();
        var output = " ";
        for (var j = 0; j < i; j++) {
            output += string;
        }
        console.log(output);
    }
}
Repeat();

function reverse(){
    for (var x=100; x >0 ; x-=5){
        console.log(x)
    }
}
reverse();


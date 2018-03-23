"use strict";


var x = 2;
var y = 2;
while (y <= 65536){
    console.log(y);
    y = x * y;

}

var allCones = Math.floor(Math.random() * 50) + 50;
do{
    var conesSold = Math.floor(Math.random() * 5) + 1;
    if(conesSold<= allCones) {
        console.log(conesSold + ' cones sold... ');
        allCones -= conesSold;
    } else {
        console.log('Cannot sell you ' + conesSold + '  cones I only have ' + allCones + '...');
    }
} while(allCones > 0);
console.log('Yay! I sold them all!')
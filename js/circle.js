(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,
        getArea: function () {
            return Math.PI * this.radius * this.radius;
        },
        logInfo: function (doRounding) {
            if(doRounding) {
                var area = Math.round(this.getArea());
            } else {
                var area = this.getArea();
            }
            console.log("Area of a circle with radius: " + this.radius + ", is: " + area);
        }
    };
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");

    // log info about the circle when radius is 5
    circle.radius = 5;
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

})();

    // TODO: Change the radius of the circle to 5.
            // TODO: complete this method
            // hint: area = pi * radius^2

            // return; // TODO: return the proper value

            // TODO: complete this method.

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value



/* BONUS */




}]

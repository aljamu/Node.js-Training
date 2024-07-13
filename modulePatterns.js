module.exports.adder = function(a, b){
    return `The sum of the two numbers is: ${a+b}`  //-> Template Sting
};

module.exports.subtract = function(a, b){
    return `The difference of the two numbers is: ${a-b}`  //-> Template Sting
};

module.exports.pi = 3.142;


/*IST DAS GLEICHE WIE:

var adder = function(a, b){
    return `The sum of the two numbers is: ${a+b}`  //-> Template Sting
};

var subtract = function(a, b){
    return `The difference of the two numbers is: ${a-b}`  //-> Template Sting
};

var pi = 3.14;

module.exports = {
    adder: adder,
    subtract: subtract,
    pi: pi } */


/* ODER:

var adder = function(a, b){
    return `The sum of the two numbers is: ${a+b}`  //-> Template Sting
};

var subtract = function(a, b){
    return `The difference of the two numbers is: ${a-b}`  //-> Template Sting
};

var pi = 3.14;

module.exports.adder = adder;
module.exports.subtract = subtract;
module.exports.pi = pi;
*/


/* GLOBAL OBJECT:
---------------------------------------
console.log("Hello World");
console.log("Du befindest dich in (dir): " + __dirname) //Node kann anzeigen, in welcher dir oder welcher Datei wir sind
console.log("Du befindest dich in (file): " + __filename) //Node kann anzeigen, in welcher dir oder welcher Datei wir sind

setTimeout(function(){
    console.log("2 setTimeout-seconds have passed")
}, 2000); // nach 3 Sekunden output:"3 seconds have passed"

//var time = 0;
//setInterval(function(){
//    time += 2;
//    console.log(time + " seconds have passed")
//}, 2000); // alle 2 Sekunden Output: 2/4/6/8/etc. seconds have passed 
//PROBLEM: Der Code läuft unendlich lange weiter. 
//Besser:

var time = 0;
var timer = setInterval(function(){
    time += 1;
    console.log(time + " setInterval-seconds have passed")
    if (time > 2){
        clearInterval(timer);
    }
}, 2000);
*/

/*FUNCTION EXPRESSIONS:
---------------------------------------
//Funktionen im normalen Javascript:
function sayHi(){
console.log("Hi");
};

sayHi();

// Function Expression in Node.js:
var sayBye = function(){
console.log("Bye")
}; //=>"anonymous Function" -> Funktion hat keinen Name und ist in Variable gespeichert

sayBye();

function callFunction(anotherFunction){ // Funktion als Parameter
    anotherFunction();
}

callFunction(sayBye);
//callFunktion(sayHi()); Funktioniert NICHT!
*/

/*MODULES:
---------------------------------------*/
var arrayCounter = require("./arrayCountModule"); //required Module
console.log(arrayCounter(['Cod', 'Shellfish', 'Salmon']));
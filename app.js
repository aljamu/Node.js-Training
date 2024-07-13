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
---------------------------------------
var arrayCounter = require("./arrayCountModule"); //required Module in Variable hinterlegt, denn in arrayCountModule wird ja das "Ergebnis" der Funktion durch module.exports "übergeben"
console.log(arrayCounter(['Cod', 'Shellfish', 'Salmon']));
*/

/*MODULE PATTERNS:
---------------------------------------
var zeugsAusModuleExportObjekt = require("./modulePatterns"); //Objekt mit module.exports.ObjectProperties in Variable gespeichert

console.log(zeugsAusModuleExportObjekt.adder(3,5))
console.log(zeugsAusModuleExportObjekt.subtract(11, 4))
console.log(zeugsAusModuleExportObjekt.adder(zeugsAusModuleExportObjekt.pi, 3))
*/

/*EVENTS WITH EVENT MODULE:
---------------------------------------
var events = require("events");
var util = require("util");

//In normalem JavaScript: element.on('click', function(){})

var myEmitter = new events.EventEmitter();
myEmitter.on('someEvent', function(msg){
    console.log(msg);
});
myEmitter.emit('someEvent', "The event was emitted")

var person = function(name){
    this.name = name;
};

util.inherits(person, events.EventEmitter)

var james = new person("James");
var mary = new person("Mary");
var ryan = new person("Ryan");
var people = [james, mary, ryan];

people.forEach(function(person){
    person.on('speak', function(msg){
        console.log(person.name + ' said: ' + msg )
    })
})

james.emit('speak', '"Hey dudes"')
mary.emit('speak', '"I am a Dudette!?"')
ryan.emit('speak', '"Ha Ha Ha"')
*/

/*READ AND WRITE FILES WITH fs:
---------------------------------------
var fs = require("fs");

fs.readFile("fs_readMe.txt", "utf8", function(err, data){
    console.log(data);
    fs.writeFile("fs_writeMeAsync.txt", data, (err)=>{ })
}); //Asynchron: läuft "parallel" zum Code

console.log("Obwohl dieses console.log später/weiter unten im Code steht, wird es trotzdem DAVOR gelogged (weil, vereinfacht gesagt, der Code davor eine asynchrone Funktion aufruft)")
*/

/*CREATE AND DELETE:
---------------------------------------
var fs = require("fs");

fs.unlink("fs_writeMe.txt", (err)=>{ }); //Datei löschen

fs.mkdirSync("newDirectory")
fs.mkdir("newAsyncDirectory", function(){
    fs.readFile("fs_readMe.txt", "utf8", function(err, data){
        fs.writeFile("./newAsyncDirectory/fs_writeMeInNewDir.txt", data, (err)=>{ })
    })
}) 

//fs.rmdirSync(". . .") Directory löschen
*/

/*SERVER ERSTELLEN:
---------------------------------------*/
var http = require("http");

var server = http.createServer(function(req, res){ //req, res sind Objekte
    console.log(`Request was made: ${req.url}`)
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end('Hello World')
})

server.listen(3000, '127.0.0.1'); //Node wird angewiesen, auf Port 3000 im Localhost zu hören
console.log("Listening to port 3000") //Feedback als Info
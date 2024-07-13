/* OHNE EXPRESS NUR MIT NODE: 
-----------------------------------------
var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req, res){
    console.log(`Request was made: ${req.url}`)
    if(req.url === '/home' || req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'})
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    }else if(req.url === '/contact'){
        res.writeHead(200, {'Content-Type': 'text/html'})
        fs.createReadStream(__dirname + '/contact.html').pipe(res);
    }else if(req.url === '/api/ninjas'){
        var ninjas = [{name: "James", age: 29}, {name: "Yoshi", age: 22}]
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(ninjas))
    }else{
        res.writeHead(404, {'Content-Type': 'text/html'})
        fs.createReadStream(__dirname + '/404.html').pipe(res);
    }
})

server.listen(3000, '127.0.0.1')
console.log("Listening to port 3000") */

/* MIT EXPRESS: 
-----------------------------------------*/
//starten im Terminal mit nodemon index.js
//https://www.youtube.com/watch?v=9TSBKO59u0Y&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp&index=23
var express = require("express");
var app = express();

//Routen
app.get("/", function(req, res){ //Express erweitert diese req, res Objekte und fügt zusätzliche Funktionen hinzu
    res.send("<h1>This is the Homepage</h1>") //Content-Type und Header muss nicht länger angegeben werden. Express erkennt dies automatisch
});
app.get("/contact", function(req, res){ //Express erweitert diese req, res Objekte und fügt zusätzliche Funktionen hinzu
    res.send("<h1>This is the Contact Page</h1>") //Content-Type und Header muss nicht länger angegeben werden. Express erkennt dies automatisch
})

app.listen(3000)
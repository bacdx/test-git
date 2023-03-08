// var http = require('http');
// var uc = require('upper-case');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.write(uc.upperCase('Hello World!\n'))
//   res.end(uc.upperCase('Hello World! \n CP17302 \n MOB 403 - sever androi'));
// }).listen(3000);

 const express = require("express");
 const app = express();

app.listen(3000, () => {
  console.log("Application started and Listening on port 3000");
});

app.get("/", (req, res) => {
  res.sendFile("C:\Users\ASUS\Desktop\MOB402-LapTrinhSever\Lab1\index.html");
});
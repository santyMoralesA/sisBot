// const dfMessenger = document.querySelector('df-messenger');
// dfMessenger.addEventListener('event-type', function (event) {
//   // Handle event  
// });

const express = require('express');
const app = express();
app.use(express.static(__dirname + "/public/"));
app.listen('3000', function() {
   console.log("Servidor Web iniciado escuchando en puerto 3000. http://localhost:3000/");
})

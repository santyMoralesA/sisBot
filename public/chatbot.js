window.addEventListener("dfMessengerLoaded", function (event) {
  console.log("Chatbot cargado e inicializado correctamente" + event);

  const dfMessenger = document.querySelector("df-messenger");
  dfMessenger.renderCustomText("¡Hola! Soy SisBot 🤖, tu asistente virtual de Sistemas. Podes preguntarme lo que necesites sobre el area");
});

const dfMessenger = document.querySelector('df-messenger');
dfMessenger.addEventListener('event-type', function (event) {
  // Handle event
});

// const express = require('express');
// const app = express();

// // Configura el middleware para servir archivos estáticos
// app.use(express.static('public'));

// app.use('/styles', express.static('styles', { type: 'text/css' }));

// // Inicia el servidor
// app.listen(3000, () => {
//   console.log('Servidor iniciado en http://localhost:3000');
// });




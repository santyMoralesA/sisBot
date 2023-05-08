window.addEventListener("dfMessengerLoaded", function (event) {
  console.log("Chatbot cargado e inicializado correctamente" + event);

  const dfMessenger = document.querySelector("df-messenger");
  dfMessenger.renderCustomText("¡Hola! Soy SisBot, ¿En que puedo ayudarte ?");
});

const dfMessenger = document.querySelector('df-messenger');
dfMessenger.addEventListener('event-type', function (event) {
  // Handle event
});
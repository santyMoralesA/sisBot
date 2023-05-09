window.addEventListener("dfMessengerLoaded", function (event) {
  console.log("Chatbot cargado e inicializado correctamente" + event);

  const dfMessenger = document.querySelector("df-messenger");
  dfMessenger.renderCustomText("¡Hola! Soy SisBot, ¿En que puedo ayudarte?");
});

const dfMessenger = document.querySelector('df-messenger');
dfMessenger.addEventListener('event-type', function (event) {
  // Handle event
});



// function mostrarBotonSoloUnaVez() {

//   var contexto = {
//     name: "contextoSap",
//     lifespanCount: 1,
//     parameters: {
//       // Aquí puedes agregar cualquier parámetro que quieras asociar con este contexto
//     }
//   };

//   const contexto = "contextoSap"; 
//   const boton = document.querySelector("button[data-name='button_sap']");


//   if (!sessionStorage.getItem(contexto)) {
//     boton.style.display = "block";
//     sessionStorage.setItem(contexto, true);
//   } else {
//     boton.style.display = "none";
//   }

//   if (typeof codigoPersonalizado === "string" && codigoPersonalizado.trim() !== "") {
//     eval(codigoPersonalizado);
//     miCodigoPersonalizado();
//   }
// }

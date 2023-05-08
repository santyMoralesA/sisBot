window.addEventListener("dfMessengerLoaded", function (event) {
  console.log("Chatbot cargado e inicializado correctamente" + event);

  const dfMessenger = document.querySelector("df-messenger");
  dfMessenger.renderCustomText("¡Hola! Soy SisBot, ¿En que puedo ayudarte?");

  dfMessenger.addEventListener("df-list-element-clicked", function (event) {
    const opcionSeleccionada = event.detail.element.title;
    alert("Has seleccionado la opción: " + opcionSeleccionada);
  });

  dfMessenger.addEventListener("df-user-input-entered", function (event) {
    const inputUsuario = event.detail.input;
    console.log("El usuario escribió: " + inputUsuario);
  });
});

// // Obtener los botones por su id
// const opcion1 = document.getElementById("opcion1");
// const opcion2 = document.getElementById("opcion2");
// const opcion3 = document.getElementById("opcion3");

// // Agregar un evento de click a cada botón
// opcion1.addEventListener("click", function () {
//   hacerAlgoConOpcion1();
// });

// opcion2.addEventListener("click", function () {
//   hacerAlgoConOpcion2();
// });

// opcion3.addEventListener("click", function () {
//   hacerAlgoConOpcion3();
// });

// // Definir las funciones para cada opción

// function hacerAlgoConOpcion1() {
//   console.log("Se hizo clic en la opción 1");
//   const dfMessenger = document.querySelector('df-messenger');
// dfMessenger.renderCustomText('Custom text');
// }

// function hacerAlgoConOpcion2() {
//   console.log("Se hizo clic en la opción 2");
//   // Tu código aquí para hacer algo con la opción 1
// }

// function hacerAlgoConOpcion3() {
//   console.log("Se hizo clic en la opción 3");
//   // Tu código aquí para hacer algo con la opción 1
// }

// // const buttonCard = {
// //   "card": {
// //     "title": "Mi botón",
// //     "buttons": [
// //       {
// //         "text": "SAP",
// //         "postback": "SAP"
// //       }
// //     ]
// //   }
// // };

// // function addCustomButton() {
// //   dfMessenger.renderCustomCard(buttonCard);
// // }

// function addSAPButton() {
//   dfMessenger.setUserInput({
//     userInput: [
//       {
//         type: 'button',
//         icon: 'EXTENSION',
//         text: 'SAP',
//         postback: 'SAP',
//         menu: {
//           items: [
//             {text: 'Opción 1', postback: 'OPCION_1'},
//             {text: 'Opción 2', postback: 'OPCION_2'},
//             {text: 'Opción 3', postback: 'OPCION_3'},
//           ],
//         },
//       },
//     ],
//   });
// }

// window.addEventListener('load', function() {
//   addSAPButton();
// });

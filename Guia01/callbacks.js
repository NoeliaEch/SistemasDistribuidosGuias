// npm install prompt -- save
let prompt = require('prompt');
let prompt_sync = require('prompt-sync')({sigint: true});


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  

// start the prompt
prompt.start();


function saludar(nombre) {
    console.log('Hola ' + nombre);
}

// prompt es asincronico, va a retornar una promesa.
// La funcion procesarEntradaUsuario debe ser async
let procesarEntradaUsuario = async function(callback) {

    console.log("Por favor, ingresa tu nombre")
    const {username} = await prompt.get(['username']);
    //console.log(username);
    callback(username);
}

let procesarEntradaUsuarioSync = function(callback) {
    // No termina la ejecucion, se debe tocar ctrl +c
    const name = prompt_sync('Por favor, ingresa tu nombre: ');
    callback(name);
}

let opcion = 2; 
// opcion = 0 --> Sin tiempo de espera, asincronico
// Opcion = 1 --> Con tiempo de espera, asincronico
// Opcion = 2 --> Sincronico

if (opcion===0) {
    console.log("---------------------------------------------------------");
    console.log("-- La funcion procesarEntradaUsuario es asincronica --");
    procesarEntradaUsuario(saludar);
    // este console log se va a imprimir antes que el saludo
    console.log('\nGracias, hasta luego.');
} else if (opcion===1) {
    // Ahora utilizo un setTime out
    console.log("---------------------------------------------------------");
    console.log("-- La funcion procesarEntradaUsuario es asincronica --");
    console.log("Hay una espera de 3 segundos antes de mostrar el prompt");
    setTimeout(function() {
        procesarEntradaUsuario(saludar);
    }, 3000);

    console.log('\nGracias, hasta luego.');
    console.log("---------------------------------------------------------");
} else if (opcion===2) {
    console.log("---------------------------------------------------------");
    console.log("-- La funcion procesarEntradaUsuarioSync es Sincronica --");
    procesarEntradaUsuarioSync(saludar);
    console.log('\nGracias, hasta luego.');
    console.log("---------------------------------------------------------");
}
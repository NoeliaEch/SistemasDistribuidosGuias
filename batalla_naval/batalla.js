
let prompt_sync = require('prompt-sync')({});

let letras = ['A', 'B', 'C', 'D', 'E'];
let numeros = [1, 2, 3, 4, 5];

let barcos = [];


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const generoBarcos = (letras, numeros, nro_barcos) =>{
    let barcos = [];
    let aux;
    let rand_idx_letter;
    let rand_idx_number;

    for (let i=0; i<nro_barcos; i++) {
        rand_idx_letter = getRandomInt(letras.length);
        rand_idx_number = getRandomInt(numeros.length);
    
        aux = letras[rand_idx_letter]+numeros[rand_idx_number];
        barcos.push(aux);    
    }
    return barcos;
}

const showInstructions = () =>{
    console.log("--------------------------------------------------------------");
    console.log("---------- BIENVENIDOS AL JUEGO DE LA BATALLA NAVAL ----------");
    console.log("--------------------------------------------------------------");
    
    console.log("\n\n\n--------------------------------------------------------------");
    console.log("-----------------  OBJETIVOS DEL JUEGO  ----------------------");
    console.log("--------------------------------------------------------------");
    console.log("1) Adivinar todos los barcos");
    console.log("2) Se debe ingresar letra y numero, sin espacio entre medio");
    console.log("3) Por ejemplo: A5");
    console.log("5) Las letras permitidas son A, B, C, D, E");
    console.log("4) Los numeros permitidos son A, B, C, D, E");
    console.log("5) Si quiere terminar el juego antes de tiempo, presione Q");
    console.log("--------------------------------------------------------------");
    console.log("\n--------------------------------------------------------------");
    console.log("Coder: NoeliaEch");
    console.log("--------------------------------------------------------------");
    console.log("\n\n");
};

const iniciaJuego = (barcos_iniciales, max_chances=1000) =>  {

    let it=0;
    let adivino=false;
    let guess, guess_letra, guess_nro;
    let idx_guess;
    let remaining_barcos = barcos_iniciales.length;
    
    showInstructions();
    console.log("Barcos a hundir: ", remaining_barcos);
    while (it<max_chances && !adivino) {

        console.log("-------------------------------------------------------");
        console.log("Intento nro ",it+1);
        guess = prompt_sync("Por favor ingresa un barco ");
        
        
        if (guess==='Q' || guess==='q') break;
        guess = guess[0].toLocaleUpperCase()+guess[1];
        console.log("Barco a intentar hundir = ", guess);
        idx_guess =barcos_iniciales.indexOf(guess);
        if (idx_guess!=-1) {
            console.log("Bravo!! Has acertado a un barco");
            barcos_iniciales.splice(idx_guess,1);
            remaining_barcos--;
            if (barcos_iniciales.length==0) {
                adivino=true;
                console.log("Victoria!!!!!");
                
            }
            else {
                console.log(`Aun quedan ${remaining_barcos} barcos`)
            }
        }
        console.log("-------------------------------------------------------");
        it++;
    }
    if (guess=='Q' || guess=='q') {
        console.log("\n-------------------------------------------------------");
        console.log('\nAwwww, que pena que abandones justo ahora.');
        console.log("-------------------------------------------------------");
        console.log("\n\n\n\n\n\n\n");
    }

}

barcos = generoBarcos(letras, numeros, 5);

iniciaJuego(barcos);

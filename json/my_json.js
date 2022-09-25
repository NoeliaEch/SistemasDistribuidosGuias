/*
Realice un programa que defina un objeto con al menos 5 propiedades (un String, un
Object, un Array, un Number y un Boolean), lo convierta a JSON y muestre por pantalla
tanto el JSON como el objeto original. ¿Qué diferencias encuentra?
*/

let myObj = {
    nombre: "Mi hermoso objeto",
    objeto: {nombre: 'objetito',
            num_de_la_suerte: 16},
    cosas_favoritas:['chocolate', 'xbox', 'dinero'],
    numero_favorito: 16,
    soy_genial:true
}

console.log("------------------------------------------");
console.log("-- Imprimo el objeto puro");
console.log(myObj);
console.log("------------------------------------------");
console.log("-- Imprimo el objeto stringifeado");
console.log(JSON.stringify(myObj));
console.log("------------------------------------------");
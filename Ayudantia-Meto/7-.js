// Crea un array de números y utiliza filter para obtener los números mayores a 5.

let numeros = [7, 5, 3, 59, 4, 2]

// // Usar filter para obtener los números mayores a 5
// let mayor5 = numeros.filter(function(numero) {
//     return numero > 5;
// });

let mayor5 = numeros.filter(numero => numero > 5);
console.log(mayor5);

// Mostrar el nuevo array en consola
console.log(mayor5);
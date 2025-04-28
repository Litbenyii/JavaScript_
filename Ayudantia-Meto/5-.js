// Crea un array de 3 números, multiplícalos por 2 y guárdalos en un nuevo array usando map.

let numeros = [9, 8, 7];

let PorDos = numeros.map(function(numero) {
    return numero * 2;
});

console.log(PorDos);

// Crea un array con 5 frutas y recórrelo con un bucle for, mostrando cada fruta en consola.

// let frutas = ["manzana", "cereza", "platano", "naranja", "sandia"];

// for(let i=0;i<frutas.length;i++){           // i < frutas.length (que sea menor a la cantidad de frutas)
//     console.log(frutas[i]);                 // muestra la fruta actual
// }

let frutas = ["manzana", "cereza", "platano", "naranja", "sandia"];

for(i of frutas){
    console.log(i);
}
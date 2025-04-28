// Crea un array de objetos donde cada objeto tenga un nombre y una edad. 
// Luego, muestra en consola el nombre de cada persona usando forEach.

let objetos = [{nombre: "juan", edad: 30}, {nombre: "tomas", edad: 34}, {nombre: "enrique", edad: 27}];

// objetos.forEach(function(objeto){
//     console.log(objeto)
// });

objetos.forEach(objetos => console.log(objetos));
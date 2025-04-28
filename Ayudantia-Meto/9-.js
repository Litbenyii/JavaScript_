// Crea una función asincrónica que espere 2 segundos y luego devuelva un mensaje. 
// Usa await para esperar su resultado e imprimirlo.

function Mensaje(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('diaaaaaablo loooco')
        }, 2000);
    });
}

async function mostrar() {
    console.log('inicia la operacion');

    let mensaje = await Mensaje();

    console.log(mensaje);    
}

mostrar();

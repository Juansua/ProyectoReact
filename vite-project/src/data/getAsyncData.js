import products from './data.js'

export default function getAsyncData() {
    console.log("Solicitando Datos")
    //.... Ejecutando tarea
    const promiseData = new Promise((resolve, reject) => {
        const errorFatal = false;

        setTimeout(() => {
            errorFatal ? reject("Algo salió mal!!!") :

            console.log("Promesa Terminada");
            resolve(products);
        }, 2000);
    })

    console.log("Promesa Generada")
  return promiseData;
}

//React
// getAsyncData()
//     .then( (respuesta) => {console.log(respuesta)})
//     .catch( (error) => {console.log(error)})

// console.log("Sigo trabajando...")
import products from './data.js'

export default function getAsyncData() {
    console.log("Solicitando Datos")
    //.... Ejecutando tarea
    const promiseData = new Promise((resolve, reject) => {
        const errorFatal = false;
            errorFatal ? reject("Algo salió mal!!!") : resolve(products);
    })

    console.log("Promesa Generada")
  return promiseData;
}

export function getAsyncDataById(id) {
    const promiseData = new Promise((resolve) => {
// TODO: validar si encontramos un producto -> si no es así, rechazamos la promesa
                const itemRequested = products.find( (item) => item.id === Number(id));
                resolve(itemRequested);
    }
)
    console.log("Promesa Generada")
    return promiseData;
}

export function getAsyncDataByCategory(cateId) {

    const promiseData = new Promise((resolve) => {
                const itemRequested = products.filter( (item) => item.category.toLowerCase() === cateId.toLowerCase());
                resolve(itemRequested);
    }
)
    console.log("Promesa Generada")
    return promiseData;
}
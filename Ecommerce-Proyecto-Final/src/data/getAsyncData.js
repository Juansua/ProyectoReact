import products from './data.js'

export default function getAsyncData() {
    console.log("Solicitando Datos")
    //.... Ejecutando tarea
    const promiseData = new Promise((resolve, reject) => {
        const errorFatal = false;

        setTimeout(() => {
            errorFatal ? reject("Algo salió mal!!!") : resolve(products);
        }, 500);
    })

    console.log("Promesa Generada")
  return promiseData;
}

export function getAsyncDataById(id) {
    const promiseData = new Promise((resolve) => {
// TODO: validar si encontramos un producto -> si no es así, rechazamos la promesa
        setTimeout(() => {
                const itemRequested = products.find( (item) => item.id === Number(id));
                resolve(itemRequested);
        }, 500);
    }
)
    console.log("Promesa Generada")
    return promiseData;
}

export function getAsyncDataByCategory(cateId) {

    const promiseData = new Promise((resolve) => {

        setTimeout(() => {
                const itemRequested = products.filter( (item) => item.category.toLowerCase() === cateId.toLowerCase());
                resolve(itemRequested);
        }, 500);
    }
)
    console.log("Promesa Generada")
    return promiseData;
}
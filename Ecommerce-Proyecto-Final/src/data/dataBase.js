import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc } from "firebase/firestore";
import products from "./data.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiSj226aouLBTIOJTMK1HNNSxkLByvMBY",
  authDomain: "react-ecommerce-210ae.firebaseapp.com",
  projectId: "react-ecommerce-210ae",
  storageBucket: "react-ecommerce-210ae.firebasestorage.app",
  messagingSenderId: "258615950342",
  appId: "1:258615950342:web:c8e32cb2927f9da0ab9787"
};

// 1. Conexión con Firebase
const app = initializeApp(firebaseConfig);

// 2. Conexión con la  base de datos de Firestore
const db = getFirestore(app);

// 3. Funciones para extraer datos
export default async function getAsyncData() {

    // Leer todos los documentos de la colección "products"
    const collectionRef = collection(db, "products");  //Referencia de colección
    const productsSnapshot = await getDocs(collectionRef);  //Snapshot de datos

    // snapshot -> docs
    const documentsData = productsSnapshot.docs.map( doc => {
      return { ...doc.data(), id: doc.id}

      // LO MISMO QUE ARRIBA, PERO ARRIBA ES SUGAR SYNTAX
      // const fullData = doc.data()
      // fullData.id = doc.id;
      // return fullData;
    } );

    return documentsData;
}

// ----> Función para obtener todos los productos
export async function getAsyncDataById(id) {
  const docRef = doc(db, "products", id);
  const docSnapshot = await getDoc(docRef);
  const docData = docSnapshot.data();

  return docData;
}

// ----> Función para obtener los productos por cada categoría
export async function getAsyncDataByCategory(cateId) {

  const productsColRef = query(collection(db, "products"), where("category", "==", cateId));

  const productsSnapshot = await getDocs(productsColRef);

  const documentsData = productsSnapshot.docs.map( doc => {
      return { ...doc.data(), id: doc.id}
  });
      return documentsData;
}

// ----> Función para exportar productos a la base de datos (solo usar si de verdad quieres subir muchos productos)
export async function exportProductsToDB() {
  //for... of
  // lo mismo que products.forEach( item => {} )
  for(let item of products){
    delete products.id;
    const docID = await addDoc( collection(db, "products"), item)
    console.log("Creado Documento", docID.id)
  }
}

// ----> Función para crear una orden de compra
export async function createBuyOrder(orderData) {
  console.log(orderData)
  const newOrderDoc = await addDoc(collection(db, "orders"), orderData);

  return newOrderDoc.id;
}

export async function getAsyncDataByDiscount() {
  //Busco los documentos que cumplan con la característica
  const q = query(collection(db, "products"), where("discount", "==", true));
  
  //Recibo los documentos por medio de getDocs
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });
}
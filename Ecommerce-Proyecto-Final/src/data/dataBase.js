import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where } from "firebase/firestore";
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
console.log(db);

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

export async function getAsyncDataById(id) {
  const docRef = doc(db, "products", id);
  const docSnapshot = await getDoc(docRef);
  const docData = docSnapshot.data();

  return docData;
}

export async function getAsyncDataByCategory(cateId) {

  const productsColRef = query(collection(db, "products"), where("category", "==", cateId));

  const productsSnapshot = await getDocs(productsColRef);

  const documentsData = productsSnapshot.docs.map( doc => {
      return { ...doc.data(), id: doc.id}
  });
      return documentsData;
}
import Item from "./Item"
import getAsyncData from "../data/getAsyncData";
import { useState, useEffect } from "react";

function ItemListContainer() {
  //State
  const [products, setProducts] = useState([]);

  //Use Effect - Promise
  useEffect(() => {
    return () => {
      const respuestaPromise = getAsyncData();
      console.log(respuestaPromise)
      respuestaPromise
      .then( (respuesta) => setProducts(respuesta))
      .catch( (error) => alert(error))
    }
  }, [])

  //Map
    const list = products.map(({id, ...props}) => (<Item key={id} {...props}/>))

  return (
    <main className='container mx-auto my-8 flex flex-wrap gap-12 justify-center'>
        {list}
    </main>
  )
}

export default ItemListContainer
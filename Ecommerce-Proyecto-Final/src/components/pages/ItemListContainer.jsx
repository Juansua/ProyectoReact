import Item from "../common/Item"
import getAsyncData, { getAsyncDataByCategory} from "../../data/getAsyncData";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ItemListContainer() {
  //State
  const [products, setProducts] = useState([]);
  const { cateId } = useParams();

  //Use Effect - Promise
  useEffect(() => {
    if (cateId === undefined) {
      const respuestaPromise = getAsyncData();
      console.log(respuestaPromise);
      respuestaPromise
        .then((respuesta) => setProducts(respuesta))
        .catch((error) => alert(error));
    } else {
      const respuestaPromise = getAsyncDataByCategory(cateId);
      console.log(respuestaPromise);
      respuestaPromise
        .then((respuesta) => setProducts(respuesta))
        .catch((error) => alert(error));
    }
  }, [ cateId]);

  //Map
    const list = products.map(({id, ...props}) => (<Item key={id} id={id} {...props}/>))

  return (
    <main className='container mx-auto my-8 flex flex-wrap gap-12 justify-center'>
        {list}
    </main>
  )
}

export default ItemListContainer
import getAsyncData, { getAsyncDataByCategory} from "../../data/dataBase";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductList from "../layout/body/ProductList";

function ItemListContainer() {
  //State
  const [products, setProducts] = useState([]);
  const { cateId } = useParams();

  //Use Effect - Promise
  useEffect(() => {
    if (cateId === undefined) {
      const respuestaPromise = getAsyncData();
      respuestaPromise
        .then((respuesta) => setProducts(respuesta))
        .catch((error) => alert(error));
    } else {
      const respuestaPromise = getAsyncDataByCategory(cateId);
      respuestaPromise
        .then((respuesta) => setProducts(respuesta))
        .catch((error) => alert(error));
    }
  }, [ cateId ]);

  return (
      <ProductList products={products}/>
  )
}

export default ItemListContainer
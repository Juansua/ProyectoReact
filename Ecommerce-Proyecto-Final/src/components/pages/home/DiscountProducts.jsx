import { getAsyncDataByDiscount } from "../../../data/dataBase"
import { useEffect, useState } from "react";
import ProductList from "../../layout/body/ProductList"
import Loader from "../../common/Loader"

function DiscountProducts() {
  const [products, setProducts] = useState([]);
  const [ isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true)
    const respuestaPromise = getAsyncDataByDiscount();
    respuestaPromise
    .then((data) => {
      setProducts(data);
      setIsLoading(false);
    })
    .catch((error) => {
      console.error("Error fetching discount products:", error);
      setIsLoading(false);
    })
  },[])

  if(isLoading){
    return <Loader/>
  }else{
      return (
    <section>
        <ProductList products={products}></ProductList>
    </section>
  )
  }
}

export default DiscountProducts
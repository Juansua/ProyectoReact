import { getAsyncDataByDiscount } from "../../../data/dataBase"
import { useEffect, useState } from "react";
import ProductList from "../../layout/body/ProductList"
import CardSkeleton from "../../common/Skeletons/CardSkeleton";
// import Loader from "../../common/Loader"

function DiscountProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setTimeout(() => {

      async function getProducts() {
        const response = await getAsyncDataByDiscount();
        setProducts(response)
      }

      getProducts()
      
    }, "500");
  },[])

  if ( !!products.length)
  return (

      <ProductList products={products}/>

  )
  return (
    <div className="flex flex-wrap gap-5 justify-center my-8">
      {[...Array(5)].map((_, index) => (
        <CardSkeleton key={index} />
      ))}
    </div>
    )
}

export default DiscountProducts
import { getAsyncDataByDiscount } from "../../../data/dataBase"
import { useEffect, useState } from "react";
import ProductList from "../../layout/body/ProductList"
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
    }, "1000");
  },[])

  return (
    <section className="container mx-auto text-left mt-[50px] mb-[110px] px-4 sm:px-0">
      <h2 className="text-[32px] font-medium text-pri-green-800 border-b-[3px] border-[#E2E5DA]">
        Featured Products
      </h2>
      <ProductList products={products}/>
    </section>
  )
}

export default DiscountProducts
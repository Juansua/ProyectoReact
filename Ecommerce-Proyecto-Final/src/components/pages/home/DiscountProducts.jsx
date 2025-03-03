import { getAsyncDataByDiscount } from "../../../data/dataBase"
import { useEffect, useState } from "react";
import ProductList from "../../layout/body/ProductList"
// import Loader from "../../common/Loader"

function DiscountProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const response = await getAsyncDataByDiscount();
      setProducts(response)
    }
    getProducts()
  },[])

  return (
    <section className="container mx-auto text-left my-[110px]">
      <h2 className="text-[32px] font-medium text-pri-green-800 border-b-[3px] border-[#E2E5DA]">
        Featured Products
      </h2>
      <ProductList products={products}/>
    </section>
  )
}

export default DiscountProducts
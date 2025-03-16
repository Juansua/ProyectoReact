import getAsyncData, { getAsyncDataByCategory} from "../../data/dataBase";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductList from "../layout/body/ProductList";
import CardSkeleton from "../common/Skeletons/CardSkeleton";

function ItemListContainer() {
  //State
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const { cateId } = useParams();

  //Use Effect - Promise
  useEffect(() => {
    setIsLoading(true)
      if (cateId === undefined) {
        setTimeout(() => {

          async function getAllItems() {
            const response = await getAsyncData()

          setProducts(response)
          setIsLoading(false)
        }
        getAllItems()
      }, "500");
      } else {
        setTimeout(() => {

          async function getItemsByCate() {
          const response = await getAsyncDataByCategory(cateId)

          setProducts(response)
          setIsLoading(false)
        }
        getItemsByCate()
      }, "500");
      }
  }, [ cateId ]);

  if ( isLoading )
    return (
      <div className={`flex flex-wrap gap-5 justify-center my-8`}>
        {[...Array(5)].map((_, index) => (
          <CardSkeleton key={index} />
        ))}
      </div>
      )
      
    return (
    <ProductList products={products}/>
    )
}

export default ItemListContainer
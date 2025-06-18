import getAsyncData, { getAsyncDataByCategory } from "../../data/dataBase";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductList from "../layout/body/ProductList";
import CardSkeleton from "../common/Skeletons/CardSkeleton";

function ItemListContainer() {
  //State
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { cateId } = useParams();

  //Use Effect - Promise
  useEffect(() => {
    setIsLoading(true);
    if (cateId === undefined) {
      async function getAllItems() {
        const response = await getAsyncData();

        setProducts(response);
        setIsLoading(false);
      }
      getAllItems();
    } else {
      async function getItemsByCate() {
        const response = await getAsyncDataByCategory(cateId);

        setProducts(response);
        setIsLoading(false);
      }
      getItemsByCate();
    }
  }, [cateId]);

  if (isLoading)
    return (
      <div className={`flex flex-wrap gap-5 justify-center my-8`}>
        {[...Array(5)].map((_, index) => (
          <CardSkeleton key={index} />
        ))}
      </div>
    );

  return <ProductList products={products} />;
}

export default ItemListContainer;

import { useState, useEffect } from "react"
import { getAsyncDataById } from "../../data/dataBase"
import ItemDetail from "../common/ItemDetail"
import { useParams } from "react-router-dom"
import ItemDetailSkele from "../common/Skeletons/ItemDetailSkele"


function ItemDetailContainer() {
    const [itemInfo, setItemInfo] = useState(null)
    const { id } = useParams()

    useEffect(() => {

        setTimeout(() => {
            async function getItemData() {
                const response = await getAsyncDataById(id)
                setItemInfo(response)
            }
            getItemData()
        }, "500");

    }, [id]);
    
    if ( itemInfo )
    return (
      <section className='container mx-auto my-8 justify-center'>
          <ItemDetail {...itemInfo}/>
      </section>
    )
    return (
        <div className="">
            <ItemDetailSkele/>
        </div>
    )
}

export default ItemDetailContainer
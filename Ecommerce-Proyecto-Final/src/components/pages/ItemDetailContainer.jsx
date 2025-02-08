import { useState, useEffect } from "react"
import { getAsyncDataById } from "../../data/dataBase"
import ItemDetail from "../common/ItemDetail"
import { useParams } from "react-router-dom"
import Loader from "../common/Loader"


function ItemDetailContainer() {
    const [itemInfo, setItemInfo] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        async function getItemData() {
            const response = await getAsyncDataById(id)
            setItemInfo(response)
        }
        getItemData()
    }, [id]);

    if ( itemInfo )
    return (
      <section className='container mx-auto my-8 justify-center'>
          <ItemDetail {...itemInfo}/>
      </section>
    )
    return <Loader/>
}

export default ItemDetailContainer
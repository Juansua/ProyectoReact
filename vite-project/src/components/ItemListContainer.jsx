import Item from "./Item"
import products from "../data/data"
function ItemListContainer() {
    const list = products.map(({id, ...props}) => (<Item key={id} {...props}/>))
  return (
    <main className='container mx-auto my-8 flex flex-wrap gap-12 justify-center'>
        {list}
    </main>
  )
}

export default ItemListContainer
import Item from "../../common/Item"

function ProductList({products}) {
    const list = products.map(({id, ...props}) => (<Item key={id} id={id} {...props}/>))
  return (
    <main className='container mx-auto my-8 flex flex-wrap gap-5 justify-center animate-in fade-in duration-400'>
        {list}
    </main>
  )
}

export default ProductList
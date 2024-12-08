function ItemListContainer({greeting}) {
  return (
    <div className="shadow-lg shadow-cyan-500/20 p-8">
        <h1 className="font-mono uppercase text-3xl text-orange-300">{greeting}</h1>
    </div>
  )
}

export default ItemListContainer
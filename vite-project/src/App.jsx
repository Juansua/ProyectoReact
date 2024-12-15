import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import products from '../data.js'

function App() {
  const list = products.map(({id, ...props}) => (<ItemListContainer key={id} {...props}/>))

  return (
    <>
    <header className='bg-lime-50 h-20 flex'>
      <nav className=' container mx-auto my-auto flex justify-between'>
        <span className='text-2xl font-bold'>HADA</span>
        <NavBar />
      </nav>
    </header>
    <main className='container mx-auto my-8 flex flex-wrap gap-12 justify-center'>
      {list}
    </main>
    </>
  )
}

export default App

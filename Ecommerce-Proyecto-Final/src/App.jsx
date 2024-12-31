import './App.css'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'

function App() {
  return (
    <>
    <header className='bg-lime-50 h-20 flex'>
      <nav className=' container mx-auto my-auto flex justify-between'>
        <span className='text-2xl font-bold'>HADA</span>
        <NavBar />
      </nav>
    </header>
    <ItemListContainer/>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header className='bg-lime-50 h-20 flex'>
      <nav className=' container mx-auto my-auto flex justify-between'>
        <span className='text-2xl font-bold'>HADA</span>
        <NavBar />
      </nav>
    </header>
    <main>
      <ItemListContainer greeting="Bienvenido a HADA" />
    </main>
    </>
  )
}

export default App

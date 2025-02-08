import './App.css'
import ItemDetailContainer from './components/pages/ItemDetailContainer'
import ItemListContainer from './components/pages/ItemListContainer'
import NavBar from './components/layout/navbar/NavBar'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import NavCategory from './components/layout/body/NavCategory'
import { CartContextProvider } from './context/cartContext'
import CartContainer from './components/layout/navbar/CartContainer'
// import { exportProductsToDB } from './data/dataBase'

function App() {

  return (
  // Le damos valor al provider
  <CartContextProvider>
    <BrowserRouter>
      <header className='bg-lime-50 h-20 flex'>
        <nav className=' container mx-auto my-auto flex justify-between'>
          <span className='text-2xl font-bold'>HADA</span>
          <NavBar />
          {/* <button onClick={exportProductsToDB}>Exportar Base de Datos</button> */}
        </nav>
      </header>
      
      <NavCategory/>

      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='/category/:cateId' element={<ItemListContainer/>}/>
        <Route path='/cart' element={<CartContainer/>}/>
      </Routes>
      
    </BrowserRouter>
  </CartContextProvider>
  )
}

export default App

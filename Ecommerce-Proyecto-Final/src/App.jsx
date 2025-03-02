import './App.css'
import ItemDetailContainer from './components/pages/ItemDetailContainer'
import ItemListContainer from './components/pages/ItemListContainer'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import NavCategory from './components/layout/body/NavCategory'
import { CartContextProvider } from './context/cartContext'
import CartContainer from './components/layout/navbar/CartContainer'
import Header from './components/layout/body/Header'
import Home from './components/pages/home/Home'
// import { exportProductsToDB } from './data/dataBase'

function App() {

  return (
  // Le damos valor al provider
  <CartContextProvider>
    <BrowserRouter>

      <Header/>
      <NavCategory/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop-now' element={<ItemListContainer/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='/category/:cateId' element={<ItemListContainer/>}/>
        <Route path='/cart' element={<CartContainer/>}/>
      </Routes>
      
    </BrowserRouter>
  </CartContextProvider>
  )
}

export default App

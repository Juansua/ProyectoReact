import "./App.css";
import ItemDetail from "./components/common/ItemDetail";
import ItemListContainer from "./components/pages/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavCategory from "./components/layout/body/NavCategory";
import { CartContextProvider } from "./context/cartContext";
import CartContainer from "./components/layout/navbar/cart/CartContainer";
import Header from "./components/layout/body/Header";
import Home from "./components/pages/home/Home";
import Footer from "./components/layout/footer/Footer";
// import { exportProductsToDB } from './data/dataBase'

function App() {
  return (
    // Le damos valor al provider
    <CartContextProvider>
      <BrowserRouter>
        <Header />
        <NavCategory />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop-now" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetail />} />
          <Route path="/category/:cateId" element={<ItemListContainer />} />
          <Route path="/cart" element={<CartContainer />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;

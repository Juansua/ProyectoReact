import React from 'react'
import cartContext from '../../../context/cartContext'
import { useContext, useState } from 'react'
import { createBuyOrder } from '../../../data/dataBase';

function CartContainer() {
  // Conectarlo al context -> useContext, cartContext
    const { cartItems, removeItem, getTotalPrice } = useContext(cartContext);

    const [ orderId, setOrderId] = useState(null);

      const [userData, setUserData] = useState({
        username: "",
        surname: "",
        age: "",
      });

      // Función para guardar los datos del usuario comprador
      function onInputChange(evt) {
        //1. Que input modificamos
        const inputName = evt.target.name;
        // 2. Copiar el state
        const newUserData = { ...userData };
        // 3. modifico el nuevo objecot
        newUserData[inputName] = evt.target.value;
        // 4. update del state
        setUserData(newUserData);
      }

    async function handleCheckout(evt) {
      evt.preventDefault();

      const orderData = {
        buyer: {
          username: userData.username,
          surname: userData.surname,
          age: userData.age,
        },
        items: cartItems,
        total: getTotalPrice(),
        date: new Date() //Timestamp de Firestore
      }

      const newOrder = await createBuyOrder(orderData);
      setOrderId(newOrder);
      console.log("Compra Realizada", newOrder);
    }

  return (
    <div>
      {/* Mostrar el listado de productos -> */}
        {
            cartItems.map( item => 
                <div className='bg-slate-100 p-8 border' key={item.id}>
                    <h3>{item.title}</h3>
                    <p>Precio: ${item.price}</p>
                    <p>Unidades: {item.count}</p>
                    <button className='bg-red-700 hover:bg-red-800 text-white font-bold py-1 px-8 rounded mx-auto mt-4' onClick={() => {removeItem(item.id)}}>Eliminar</button>
                </div>
             )
        }
        {/* Formulario de usuario comprador */}
        <form className='bg-lime-50 flex flex-col gap-4 p-4'>
          <h2>Completa tus datos para la compra 🛍</h2>
          <div className='gap-2 flex flex-col w-80 bg-slate-300 m-auto py-4'>
            <div className=' flex justify-between px-6 '>
              <label>Nombre</label>
              <input name="username" type="text" onChange={onInputChange} />
            </div>

            <div className=' flex justify-between px-6 '>
              <label>Apellido</label>
              <input name="surname" type="text" onChange={onInputChange} />
            </div>

            <div className=' flex justify-between px-6 '>
              <label>Edad</label>
              <input name="age" type="text" onChange={onInputChange} />
            </div>
          </div>

          <button className='bg-slate-500 hover:bg-slate-600 text-white font-bold py-2 px-6 rounded m-auto'
            disabled={
              !(
                userData.username !== "" &&
                userData.surname !== "" &&
                userData.age !== ""
              )
            }
            onClick={handleCheckout}
          >
            Realizar Compra
          </button>
          <div>
            {orderId === null ? "" : <h2>Gracias por tu compra! Tu ID de compra es: {orderId}</h2>}
          </div>
        </form>
    </div>
  )
}

export default CartContainer
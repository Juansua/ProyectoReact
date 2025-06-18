import cartContext from "../../../../context/cartContext";
import { useContext, useState } from "react";
import { createBuyOrder } from "../../../../data/dataBase";
import CartForm from "./CartForm";

function CartContainer() {
  // Conectarlo al context -> useContext, cartContext
  const { cartItems, deleteItem, removeItem, getTotalPrice } =
    useContext(cartContext);

  const [orderId, setOrderId] = useState(null);

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
      date: new Date(), //Timestamp de Firestore
    };

    const newOrder = await createBuyOrder(orderData);
    setOrderId(newOrder);
    console.log("Compra Realizada", newOrder);
  }

  return (
    <div className="container bg-slate-500 lg:max-w-[1018px] mt-10 mx-auto text-left">
      <h2>Review your products</h2>
      {/* Mostrar el listado de productos -> */}
      {cartItems.map((item) => (
        <div
          className="bg-white p-8 border flex justify-between items-center"
          key={item.id}
        >
          <div className="flex gap-8">
            <img className="w-[120px]" src={item.image} alt={item.image} />
            <div className="text-left">
              <p className="first-letter:uppercase">{item.category}</p>
              <h3>{item.title}</h3>
              <p>Unidades: {item.count}</p>
              <button
                className="bg-red-700 hover:bg-red-800 text-white font-bold py-1 px-8 rounded mx-auto mt-4"
                onClick={() => {
                  removeItem(item.id);
                }}
              >
                Eliminar
              </button>
            </div>
          </div>
          <p>Precio: ${item.price}</p>
        </div>
      ))}
      {/* Formulario de usuario comprador */}
      <CartForm
        onInputChange={onInputChange}
        handleCheckout={handleCheckout}
        orderId={orderId}
        userData={userData}
      />
    </div>
  );
}

export default CartContainer;

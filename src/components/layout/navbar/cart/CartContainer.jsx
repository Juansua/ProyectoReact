import cartContext from "../../../../context/cartContext";
import { useContext, useState } from "react";
import { createBuyOrder } from "../../../../data/dataBase";
import CartForm from "./CartForm";
import Footer from "../../footer/Footer";

function CartContainer() {
  // Conectarlo al context -> useContext, cartContext
  const { cartItems, removeItem, getTotalPrice } = useContext(cartContext);

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

  if (cartItems != 0)
    return (
      //TODO Add an empty state and improve products UI
      <div className="container lg:max-w-[1018px] mb-[150px] mt-[2%] mx-auto text-left">
        <h2 className="text-[18px] font-semibold text-pri-green-800 pb-[16px]">
          Review your products
        </h2>
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
                  className="bg-slate-200 hover:bg-slate-300 text-slate-800 mx-auto mt-4 py-2 px-8 rounded-lg text-sm"
                  onClick={() => {
                    removeItem(item.id);
                  }}
                >
                  Remove Item
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
  return (
    <div className="container lg:max-w-[1018px] my-[200px] mx-auto">
      <h2 className="text-2xl font-bold text-pri-green-800 pb-4">
        Your cart is empty!
      </h2>
      <p className="text-lg text-pri-green-800">
        Go ahead and add your products
      </p>
    </div>
  );
}

export default CartContainer;

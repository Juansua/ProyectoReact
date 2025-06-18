function CartForm({ onInputChange, handleCheckout, orderId, userData }) {
  return (
    <form className="bg-lime-50 flex flex-col gap-4 p-4">
      <h2>Completa tus datos para la compra 🛍</h2>
      <div className="gap-2 flex flex-col w-80 bg-slate-300 m-auto py-4">
        <div className=" flex justify-between px-6 ">
          <label>Nombre</label>
          <input name="username" type="text" onChange={onInputChange} />
        </div>

        <div className=" flex justify-between px-6 ">
          <label>Apellido</label>
          <input name="surname" type="text" onChange={onInputChange} />
        </div>

        <div className=" flex justify-between px-6 ">
          <label>Edad</label>
          <input name="age" type="text" onChange={onInputChange} />
        </div>
      </div>

      <button
        className="bg-slate-500 hover:bg-slate-600 text-white font-bold py-2 px-6 rounded m-auto"
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
        {orderId === null ? (
          ""
        ) : (
          <h2>Gracias por tu compra! Tu ID de compra es: {orderId}</h2>
        )}
      </div>
    </form>
  );
}

export default CartForm;

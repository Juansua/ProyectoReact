function CartForm({ onInputChange, handleCheckout, orderId, userData }) {
  return (
    // TODO Improve the form UI
    <form className="bg-pri-green-50 flex flex-col gap-8 py-8 text-center">
      <h2>Fill your shipping info for the purchase 🛍</h2>
      <div className="gap-2 flex flex-col w-1/2 bg-pri-green-200 m-auto py-4 text-pri-green-900">
        <div className=" flex justify-between px-6">
          <label>Name</label>
          <input
            className="px-3 w-1/2 text-sm font-light"
            placeholder="Jhon"
            name="username"
            type="text"
            onChange={onInputChange}
          />
        </div>

        <div className=" flex justify-between px-6 ">
          <label>Lastname</label>
          <input
            className="px-3 w-1/2 text-sm font-light"
            placeholder="Smith"
            name="surname"
            type="text"
            onChange={onInputChange}
          />
        </div>

        <div className=" flex justify-between px-6 ">
          <label>Phone number</label>
          <input
            className="px-3 w-1/2 text-sm font-light"
            name="age"
            placeholder="+57 000 000 0000"
            type="text"
            onChange={onInputChange}
            autoComplete="off"
          />
        </div>

        <div className=" flex justify-between px-6 ">
          <label>Shipping Address</label>
          <input
            className="px-3 w-1/2 text-sm font-light"
            name="age"
            placeholder="47 W 13th St, New York"
            type="text"
            onChange={onInputChange}
          />
        </div>
      </div>
      <button
        className="bg-slate-500 hover:bg-slate-600 text-white py-3 px-8 rounded-lg m-auto"
        disabled={
          !(
            userData.username !== "" &&
            userData.surname !== "" &&
            userData.age !== ""
          )
        }
        onClick={handleCheckout}
      >
        Complete my purchase
      </button>
      {/* TODO Mejorar la experiencia luego de que la persona termina su compra. */}
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

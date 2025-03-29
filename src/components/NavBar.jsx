import CartDetails from "./CartDetails";

const NavBar = ({ cartValue, cartDetails, totalCartPrice }) => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="flex items-end gap-5">
          <img
            className="w-20"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/1280px-Adidas_Logo.svg.png?20240107104015"
            alt=""
          />
          <h1 className="text-2xl lg:text-4xl font-bold">
            Adidas Water Bottles
          </h1>
        </div>
        <p className="text-2xl lg:text-3xl font-bold border-2 border-orange-800 py-2 px-4 rounded-xl">
          Cart: {cartValue.length}
        </p>
      </div>
      <div className="border-2 border-cyan-800 py-2 px-5 rounded-2xl space-y-2">
        <div className="flex justify-between text-3xl font-bold">
          <h1>Cart Items:</h1>
          <p>Total price: ${totalCartPrice}</p>
        </div>
        <div>
          {cartDetails.map((cart) => (
            <CartDetails key={cart.id} cart={cart}></CartDetails>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;

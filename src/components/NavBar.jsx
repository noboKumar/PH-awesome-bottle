import CartDetails from "./CartDetails";

const NavBar = ({ cartValue, cartDetails, totalCartPrice }) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex items-end gap-5">
          <img
            className="w-20"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/1280px-Adidas_Logo.svg.png?20240107104015"
            alt=""
          />
          <h1 className="text-2xl font-bold lg:text-4xl">
            Adidas Water Bottles
          </h1>
        </div>
        <p className="rounded-xl border-2 border-orange-800 px-4 py-2 text-2xl font-bold lg:text-3xl">
          Cart: {cartValue.length}
        </p>
      </div>
      <div className="space-y-2 rounded-2xl border-4 border-t-gray-800 px-5 py-2">
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

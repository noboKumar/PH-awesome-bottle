import React, { use, useState } from "react";
import Bottle from "../bottle/Bottle";
import NavBar from "../NavBar";

const Bottles = ({ bottlesPromise }) => {
  const bottles = use(bottlesPromise);

  const [cartValue, setCartValue] = useState([]);

  const handleAddToCart = (bottle) => {
    const newCartValue = [...cartValue, bottle];
    setCartValue(newCartValue);
  };
  const [cartDetails, setCartDetails] = useState([]);

  const handleCartDetails = (bottle) => {
    const newCartDetails = [...cartDetails, bottle];
    setCartDetails(newCartDetails);
  };

  const [totalCartPrice, setTotalCartPrice] = useState(0);

  const handleTotalCartPrice = (price) => {
    setTotalCartPrice(totalCartPrice + price);
  };

  return (
    <div className="space-y-5">
      <NavBar
        cartValue={cartValue}
        cartDetails={cartDetails}
        totalCartPrice={totalCartPrice}
      ></NavBar>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            handleAddToCart={handleAddToCart}
            handleCartDetails={handleCartDetails}
            handleTotalCartPrice={handleTotalCartPrice}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;

import React from "react";

const CartDetails = ({ cart }) => {
  const { img, name, price } = cart;
  return (
    <div>
      <div className="flex items-center gap-5 space-y-5">
        <img className="w-20 rounded-2xl" src={img} alt={name} />
        <div className="text-2xl flex gap-5">
          <h1>{name}</h1>
          <p>${price}</p>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;

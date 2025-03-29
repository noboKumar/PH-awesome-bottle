import React from "react";

const Bottle = ({
  bottle,
  handleAddToCart,
  handleCartDetails,
  handleTotalCartPrice,
}) => {
  const { img, name, price, ratings, ratingsCount, stock } = bottle;

  const handleBuyNowBtn = () => {
    handleCartDetails(bottle);
    handleAddToCart(bottle);
    handleTotalCartPrice(price);
  };

  return (
    <div className="space-y-2 rounded-2xl border-4 border-cyan-800 bg-slate-100 p-6 drop-shadow-xl">
      <img
        className="mx-auto w-6/12 rounded-xl border-2 border-gray-400"
        src={img}
        alt={name}
      />
      <h1 className="text-3xl">{name}</h1>
      <p className="text-2xl font-semibold">Price: ${price}</p>
      <p className="text-xl">
        {ratings}⭐ ({ratingsCount})
      </p>
      <p
        className={`text-xl ${stock < 10 ? "font-semibold text-red-500" : ""}`}
      >
        Available Products: {stock}
      </p>
      <button onClick={handleBuyNowBtn} className="bg-gray-300">
        Buy Now
      </button>
    </div>
  );
};

export default Bottle;

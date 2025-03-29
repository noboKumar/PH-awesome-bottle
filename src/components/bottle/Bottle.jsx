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
    <div className="border-4 drop-shadow-xl bg-slate-100 border-cyan-800 rounded-xl p-6 space-y-2">
      <img
        className="w-6/12 rounded-xl mx-auto border-2 border-gray-400"
        src={img}
        alt={name}
      />
      <h1 className="text-3xl">{name}</h1>
      <p className="text-2xl font-semibold">Price: ${price}</p>
      <p className="text-xl">
        {ratings}⭐ ({ratingsCount})
      </p>
      <p
        className={`text-xl ${stock < 10 ? "text-red-500 font-semibold" : ""}`}
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

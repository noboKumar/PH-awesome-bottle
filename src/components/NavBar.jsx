import React from "react";

const NavBar = () => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="flex items-end gap-5">
          <img
            className="w-20"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/1280px-Adidas_Logo.svg.png?20240107104015"
            alt=""
          />
          <h1 className="text-2xl lg:text-4xl font-bold">Adidas Water Bottles</h1>
        </div>
        <p className="text-2xl lg:text-3xl font-bold border-2 border-orange-800 py-2 px-4 rounded-xl">
          Cart: 0
        </p>
      </div>
      <div className="border-2 border-amber-700 p-2 rounded-2xl">
        <h1 className="text-3xl font-bold">Cart Items:</h1>
        <div></div>
      </div>
    </div>
  );
};

export default NavBar;

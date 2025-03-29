import React, { use } from "react";
import Bottle from "../bottle/Bottle";

const Bottles = ({ bottlesPromise }) => {
  const bottles = use(bottlesPromise);
  console.log(bottles);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      {bottles.map((bottle) => (
        <Bottle key={bottle.id} bottle={bottle}></Bottle>
      ))}
    </div>
  );
};

export default Bottles;

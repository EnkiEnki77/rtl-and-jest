import React from "react";
import Options from "./Options";

const OrderForm = () => {
  return (
    <div className="flex flex-col items-center  h-screen">
      <h1 className="capitalize mt-10 text-6xl">design your sundae</h1>
      <form className="w-full pl-[505px] flex flex-col pt-10 gap-10 ">
        <Options optionTitle="scoops" price={"2"} />
        <Options optionTitle="toppings" price={"1.5"} />
        <h2 className="text-3xl">Grand total: $10.50</h2>
        <button
          className="text-black text-center flex items-center justify-center px-3 py-3 w-1/4 bg-gray-400 cursor-pointer"
          type="submit"
        >
          Order Sundae!
        </button>
      </form>
    </div>
  );
};

export default OrderForm;

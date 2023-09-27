import React, { useState } from "react";

const CounterQuantity = () => {
  let [counter, setCounter] = useState(1);
  return (
    <>
      <div className="flex">
        <button
          className="flex border p-2 bg-gray-100 hover:bg-main hover:text-white"
          onClick={() => {
            if (counter !== 0) setCounter((counter = counter - 1));
          }}
        >
          -
        </button>
        <span className="border-y p-2 bg-gray-100 flex justify-center items-center w-[50px]">
          <p>{counter}</p>
        </span>
        <button
          className="flex border p-2 bg-gray-100 hover:bg-main hover:text-white"
          onClick={() => setCounter((counter = counter + 1))}
        >
          +
        </button>
      </div>
    </>
  );
};

export default CounterQuantity;

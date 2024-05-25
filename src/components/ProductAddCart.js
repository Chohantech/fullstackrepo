import { Minus, Plus } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const ProductAddCart = () => {


  const [BtnAmount, setBtnAmount] = useState(1); // Initial amount
  const [counter, setCounter] = useState(1); // Initial counter
  const [amount, setAmount] = useState("£200.00"); // Initial amount value


  const handleIncrease = () => {
    setCounter(counter + 1); // Increment counter
    setAmount(BtnAmount + BtnAmount); // Double the amount
  };

  const handleDecrease = () => {
    if (counter > 1) {
      setCounter(counter - 1); // Decrement counter
      setBtnAmount(amount - amount / 2); // Halve the amount
    }
  };

  const [shake, setShake] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShake(true);
      setTimeout(() => {
        setShake(false);
      }, 1000); // Duration of the shake animation
    }, 5000); // Interval between each shake animation

    return () => clearInterval(interval);
  }, []);

    return (
        <div className="flex gap-5 max-md:justify-center  items-center">
        <div className="flex border-black border-[1px] justify-between items-center rounded-2xl py-[0.6rem] px-3 w-[25%] text-sm max-sm:py-[0.3rem]">
          <Minus
            strokeWidth={4}
            className=" w-3 h-3 cursor-pointer"
            onClick={handleDecrease}
          />

          <span>{counter}</span>
          <Plus
            strokeWidth={4}
            className=" w-3 h-3 cursor-pointer"
            onClick={handleIncrease}
          />
        </div>

        <button
          className={`bg-[#00acbb] w-[30%] hover:bg-[#00666e] text-sm text-white font-bold py-[0.6rem] px-8 rounded-2xl max-sm:py-[0.3rem] ${
            shake ? "animate__animated animate__shakeX" : ""
          }`}
          onClick={() => console.log("Add to cart clicked")}
        >
          Add to Cart
        </button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="#ffffff" d="M0 0h24v24H0z" />
          <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z"
            stroke="#000"
            stroke-width="2"
          />
        </svg>

        <button className="rounded-2xl py-[0.6rem] border-[1px]  border-black px-3 w-[20%] text-sm max-sm:py-[0.3rem]">
          Order Swatch
        </button>
      </div>
    );
};

export default ProductAddCart;
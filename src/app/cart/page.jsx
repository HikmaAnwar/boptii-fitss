"use client";
import { useState } from "react";
import { useParams } from "next/navigation";

const CartPage = () => {
  const params = useParams();
  const [cartItems, setCartItems] = useState([]);

  const handleContinueShopping = () => {
    params.push("/services");
  };

  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl text-black mt-44 font-serif ml-4 sm:ml-8 mb-4">
        Shopping Cart
      </h1>
      {cartItems.length > 0 ? (
        <div>
          <ul className="space-y-4">
            {cartItems.map((item, index) => (
              <li key={index} className="p-4 border rounded-lg shadow-md">
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p>{item.description}</p>
                <p className="font-bold mt-2">${item.price}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="text-gray-700 px-4 sm:px-8 py-4 font-serif">
          <p className="text-lg">You have nothing in your shopping cart.</p>
          <button
            onClick={handleContinueShopping}
            className="mt-4 bg-brown-dark text-white text-lg py-3 px-4 sm:py-4 sm:px-6 rounded-xl hover:bg-brown-light transition"
          >
            Continue Shopping
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;

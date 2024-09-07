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
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
      {cartItems.length > 0 ? (
        <div>
          <ul className="space-y-4">
            {cartItems.map((item, index) => (
              <li key={index} className="p-4 border rounded shadow-md">
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p>{item.description}</p>
                <p className="font-bold mt-2">${item.price}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="text-center py-8">
          <p className="text-xl">You have nothing in your shopping cart.</p>
          <button
            onClick={handleContinueShopping}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Continue Shopping
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;

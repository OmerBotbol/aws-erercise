import React, { useState } from "react";
import CartPage from "./components/CartPage";
import ShopPage from "./components/ShopPage";

function App() {
  const [moveToCart, setMoveToCart] = useState(false);
  const shoppingItems = [
    { name: "T-Shirt", price: 30 },
    { name: "Pants", price: 20 },
    { name: "Dress", price: 50 },
    { name: "Shoes", price: 25 },
    { name: "Socks", price: 10 },
    { name: "Accessories", price: 15 },
  ];
  const cart = [];
  const addToCart = (itemToAdd) => {
    const index = cart.findIndex((item) => item.name === itemToAdd);
    if (index === -1) {
      return cart.push({
        name: itemToAdd,
        quantity: 1,
      });
    }
    return cart[index].quantity++;
  };

  return (
    <>
      {moveToCart ? (
        <CartPage cart={cart} />
      ) : (
        <ShopPage shoppingItems={shoppingItems} addToCart={addToCart} />
      )}
      <button onClick={() => setMoveToCart((prev) => !prev)}>
        Move To Cart
      </button>
    </>
  );
}

export default App;

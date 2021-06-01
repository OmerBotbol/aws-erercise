import React, { useState } from "react";
import CartPage from "./components/CartPage";
import ShopPage from "./components/ShopPage";

function App() {
  const [moveToCart, setMoveToCart] = useState(false);
  const [cart, setCart] = useState([]);
  const [sum, setSum] = useState(0);
  const shoppingItems = [
    { name: "T-Shirt", price: 30 },
    { name: "Pants", price: 20 },
    { name: "Dress", price: 50 },
    { name: "Shoes", price: 25 },
    { name: "Socks", price: 10 },
    { name: "Accessories", price: 15 },
  ];
  const addToCart = (itemToAdd) => {
    const index = cart.findIndex((item) => item.name === itemToAdd.name);
    if (index === -1) {
      setCart((prev) => [
        ...prev,
        {
          name: itemToAdd.name,
          totalPrice: itemToAdd.price,
          quantity: 1,
        },
      ]);
    } else {
      cart[index].quantity++;
      cart[index].totalPrice = cart[index].totalPrice + itemToAdd.price;
    }
    setSum((prev) => prev + itemToAdd.price);
  };

  return (
    <>
      {moveToCart ? (
        <CartPage cart={cart} sum={sum} />
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

import React, { useEffect, useState } from "react";
import CartPage from "./components/CartPage";
import ShopPage from "./components/ShopPage";
import axios from "axios";

function App() {
  const [moveToCart, setMoveToCart] = useState(false);
  const [cart, setCart] = useState([]);
  const [sum, setSum] = useState(0);
  const [shoppingItems, setShoppingItems] = useState([]);

  useEffect(() => {
    axios.get("/shopping-items").then((data) => {
      setShoppingItems(data.data);
    });
  }, []);

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

  const removeFromCart = (itemToRemove) => {
    const itemData = shoppingItems.find(
      (item) => item.name === itemToRemove.name
    );
    const currentTotalPrice = itemToRemove.totalPrice - itemData.price;
    const updatedCart = cart.map((item) => {
      if (item.name === itemToRemove.name) {
        item.quantity--;
        item.totalPrice = currentTotalPrice;
      }
      return item;
    });
    if (currentTotalPrice === 0) {
      const index = updatedCart.findIndex(
        (item) => item.name === itemToRemove.name
      );
      updatedCart.splice(index, 1);
      setCart(updatedCart);
    } else {
      setCart(updatedCart);
    }
    setSum((prev) => prev - itemData.price);
  };

  return (
    <>
      {moveToCart ? (
        <CartPage cart={cart} sum={sum} removeFromCart={removeFromCart} />
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

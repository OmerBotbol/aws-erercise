import React from "react";
import Item from "./Item";

function ShopPage({ shoppingItems, addToCart }) {
  return (
    <>
      <h1>My Shop</h1>
      <ol>
        {shoppingItems?.map((shoppingItem, i) => {
          return (
            <Item key={i} shoppingItem={shoppingItem} addToCart={addToCart} />
          );
        })}
      </ol>
    </>
  );
}

export default ShopPage;

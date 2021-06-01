import React from "react";

function Item({ shoppingItem, addToCart }) {
  return (
    <>
      <li>
        {shoppingItem.name} {shoppingItem.price}$
        <button onClick={() => addToCart(shoppingItem)}>Add To Cart</button>
      </li>
    </>
  );
}

export default Item;

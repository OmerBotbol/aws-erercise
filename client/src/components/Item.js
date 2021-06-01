import React from "react";

function Item({ shoppingItem, addToCart }) {
  return (
    <>
      <li>
        {shoppingItem.name} {shoppingItem.price}$
        <button onClick={() => addToCart(shoppingItem.name)}>
          Add To Cart
        </button>
      </li>
    </>
  );
}

export default Item;

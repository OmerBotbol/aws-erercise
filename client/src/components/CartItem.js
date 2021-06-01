import React from "react";

function CartItem({ item, removeFromCart }) {
  return (
    <>
      <li>
        {item.quantity} {item.name} {item.totalPrice}$
      </li>
      <button onClick={() => removeFromCart(item)}>Remove</button>
    </>
  );
}

export default CartItem;

import React from "react";

function CartItem({ item }) {
  return (
    <>
      <li>
        {item.name} {item.totalPrice}$
      </li>
    </>
  );
}

export default CartItem;

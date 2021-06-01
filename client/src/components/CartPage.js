import React, { useState } from "react";
import CartItem from "./CartItem";

function CartPage({ cart, sum, removeFromCart }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    console.log(`Thanks for buying in MyShop, ${name}!`);
    console.log(`The items will send to ${address}`);
    console.log(`You will get alarm before approaching to ${phoneNumber}`);
    console.log(`A list of the items you ordered sent to ${email}`);
  };

  return (
    <>
      {console.log(cart)}
      <form>
        <h1>My Cart</h1>
        <label>Full Name: </label>
        <input required type="text" onChange={(e) => setName(e.target.value)} />
        <label>Address: </label>
        <input
          required
          type="text"
          onChange={(e) => setAddress(e.target.value)}
        />
        <label>Phone Number: </label>
        <input
          required
          type="tel"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <label>Email Address: </label>
        <input
          required
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={() => handleSubmit()}>submit</button>
      </form>
      <ol>
        {cart?.map((item, i) => {
          return (
            <CartItem key={i} item={item} removeFromCart={removeFromCart} />
          );
        })}
      </ol>
      <div>Total Price: {sum}$</div>
    </>
  );
}

export default CartPage;

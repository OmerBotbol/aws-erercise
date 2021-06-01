import React, { useState } from "react";
import CartItem from "./CartItem";

function CartPage({ cart, sum }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    console.log(name);
    console.log(address);
    console.log(phoneNumber);
    console.log(email);
  };

  return (
    <>
      <form>
        <h1>My Cart</h1>
        <label>Full Name: </label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <label>Address: </label>
        <input type="text" onChange={(e) => setAddress(e.target.value)} />
        <label>Phone Number: </label>
        <input type="tel" onChange={(e) => setPhoneNumber(e.target.value)} />
        <label>Email Address: </label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
        <button onClick={() => handleSubmit()}>submit</button>
      </form>
      <ol>
        {cart?.map((item, i) => {
          return <CartItem key={i} item={item} />;
        })}
      </ol>
      <div>Total Price: {sum}$</div>
    </>
  );
}

export default CartPage;

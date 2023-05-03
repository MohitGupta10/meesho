import "./cart/cart.css";
import { useState } from "react";
let total = 0;
export const Carted = (props) => {
  const [quantity, setQuantity] = useState(1);
  const Add = () => {
    setQuantity(quantity + 1);
  };
  const Sub = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  let subtotal = props.price * quantity;
  let discountP = Math.floor(subtotal * props.discount) / 100;
  let totalsubtotal = Math.floor(subtotal - discountP);
  return (
    <>
      <div className="Carted">
        <img src={props.img} alt="" />
        <p>{props.brand}</p>
        <p>{props.categories}</p>
        <p>{props.price}</p>
        <p>{props.discount}</p>
        <input type="text" value={quantity} />
        <button onClick={Add}>+</button>
        <button onClick={Sub}>-</button>
        <p>Subtotal:{totalsubtotal}</p>
      </div>
    </>
  );
};

import "./cart/cart.css";
import { useState } from "react";
var total = [];
export const Carted = (props) => {
  const [quantity, setQuantity] = useState(1);
  let totalsubtotal = 0;
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
  totalsubtotal = Math.floor(subtotal - discountP);
  // console.log(totalsubtotal);
  total.push(totalsubtotal);
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

export const TOTAL = () => {
  var sum = 0;
  for (let i = 0; i < total.length; i++) {
    if (i % 2 == 0) {
      sum += total[i];
    }
  }

  return (
    <>
      <h2>TOTAL:{sum}</h2>
    </>
  );
};

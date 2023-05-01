import { useLocation } from "react-router-dom";
import { useState } from "react";
import "./cart.css";
export const CartPage = () => {
  const location = useLocation();
  const data = location.state;
  const [cartitem, setCartitem] = useState([data]);
  const Remove = (item) => {
    // console.log("hi")
    console.log(item.id);
    let hardcopy = [...cartitem[0]];
    console.log(hardcopy);
    const removeItem = hardcopy.filter((el) => el.id === item.id);
    console.log(removeItem);
    // hardcopy = hardcopy.filter((el) => el.id !== item.id);
    //  setCartitem(hardcopy);
    // console.log(hardcopy);
  };
  const addPrice=(items)=>{
        
  }
  const price=(items)=>{

  }
  return (
    <>
      {/* <div>
        {
        cartitem[0].map((items) => {
          return (
            <>
              <div className="cart">
                <ul>
                  <li>
                    <img src={items.images[0]} />
                  </li>
                  <li>{items.title}</li>
                  <li>PRICE:{items.price}</li>
                  <li>DISCOunt:{items.discountPercentage}</li>
                  <button>+</button>
                  <button>-</button>
                  <button onClick={Remove(items)}>Remove</button>
                </ul>
              </div>
            </>
          );
        })}
        <h2>TOTAL AMOUNT</h2>
      </div> */}

      {cartitem[0]?.map((items) => {
        return (
          <>
            <div className="cart">
              <ul>
                <li>
                  <img src={items.images[0]} />
                </li>
                <li>{items.title}</li>
                <li>PRICE:{items.price}</li>
                <li>DISCOunt:{items.discountPercentage}</li>
                <button onClick={addPrice(items)}>+</button>
                <button onClick={price(items)}>-</button>
                <button onClick={Remove(items)}>Remove</button>
              </ul>
            </div>
          </>
        );
      })}
      <h2>TOTAL AMOUNT</h2>
    </>
  );
};

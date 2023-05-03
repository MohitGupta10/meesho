// import { useLocation } from "react-router-dom";
import { Carted } from "../carted";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./cart.css";
export const CartPage = () => {
  const [carted, setCarted] = useState([]);
  const navigate = useNavigate();
  let total = 0;
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("items"));
    if (cart) {
      setCarted(cart);
    }
  }, []);
  const pay = () => {
    alert("ORDER PLACE SUCCESSFULLY ");
    localStorage.removeItem("items");
    navigate("/");
  };
  const remove = (index) => {
    // console.log(item);
    const deleted = [...carted].filter((cardItems, e) => e !== index);
    // console.log(deleted);
    setCarted(deleted);
  };
  return (
    <>
      <h1>SHOPING CART </h1>
      {carted.length === 0 ? (
        <div>EMPTY CARD</div>
      ) : (
        <div className="carted-main">
          {carted.map((item, index) => {
            total += item.price;
            return (
              <>
                <div className="carted-main1">
                  <div className="carted-data">
                    <Carted
                      brand={item.brand}
                      img={item.images[0]}
                      categories={item.category}
                      price={item.price}
                      discount={item.discountPercentage}
                    />
                    <button onClick={() => remove(index)}>Remove</button>
                  </div>
                </div>
              </>
            );
          })}
          <h2>TOTAL:{total}</h2>
          <button onClick={pay}>Pay</button>
        </div>
      )}
    </>
  );
};

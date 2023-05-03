// import { useLocation } from "react-router-dom";
import { Carted } from "../carted";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TOTAL } from "../carted";
import "./cart.css";
export const CartPage = () => {
  const [carted, setCarted] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("items"));
    if (cart) {
      setCarted(cart);
    }
  }, []);
  const pay = () => {
    alert("ORDER PLACE SUCCESSFULLY ");
    localStorage.removeItem("items");
    window.location.reload(true);
    navigate("/");
  };
  const remove = (index) => {
    // console.log(item);
    const deleted = [...carted].filter((cardItems, e) => e !== index);
    // console.log(deleted);
    setCarted(deleted);
    localStorage.setItem("items", JSON.stringify(deleted));
    window.location.reload(true);
  };
  const viewProduct = () => {
    navigate("/");
  };
  return (
    <>
      <h1>SHOPING CART </h1>
      {carted.length === 0 ? (
        <div className="empty">
          <img
            src="https://images.meesho.com/images/pow/empty-cart.png"
            alt=""
          />
          <p>Your card is Empty </p>
          <button onClick={viewProduct}>View Product</button>
        </div>
      ) : (
        <div className="carted-main">
          {carted.map((item, index) => {
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
                    <div className="carted-button">
                      <button onClick={() => remove(index)}>Remove</button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
          <TOTAL />
          <button onClick={pay}>Pay</button>
        </div>
      )}
    </>
  );
};

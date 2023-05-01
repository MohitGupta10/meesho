import "./card.css";
import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import { createPath } from "react-router-dom";
export const Card = () => {
  const cart = [];
  const [data, setData] = useState([]);
  const [sorting, setSorting] = useState("1");
  const [addcart, setAddcart] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((res) => {
      setData(res.data.products);
    });
  }, []);
  const handelChange = (e) => {
    setSorting(e.target.value);
  };
  const addtocart = (data) => {
    setAddcart(addcart + 1);
    cart.push(data);
    alert("item to cart susscessfully");
  };
  const redirectCart = () => {
    navigate("/cart", { state: cart });
  };

  const DataSorted = [...data].sort((a, b) => {
    if (sorting === "1") {
      return b.price - a.price;
    } else if (sorting === "2") {
      return a.price - b.price;
    } else if (sorting === "3") {
      return b.rating - a.rating;
    } else if (sorting === "4") {
      return b.discountPercentage - a.discountPercentage;
    }
  });
  const styles = {
    width: 100,
    marginTop: "15px",
    color: "blue",
    height: 30,
  };
  return (
    <>
      {/* <Data.Provider value={addcart}></Data.Provider> */}
      <div className="Card1">
        <div className="card1-Lowest">
          <h1>Lowest Prices Best Quality Shopping</h1>
          <div className="card1-listed">
            <p>Free Delivery</p>
            <p>Cash On Delivery</p>
            <p>Easy to Return </p>
          </div>
          <button>Download the Meesho App </button>
        </div>
        <div className="card1-imgdiv">
          <img
            className="card1-image"
            src="https://images.meesho.com/images/marketing/1678691617864.webp"
            alt=""
          />
        </div>
      </div>
      <div className="heading-tag">
        <h1>Top Categories to choose from </h1>
      </div>
      <div className="card2">
        <div className="card2item1">
          <div className="card2img1">
            <img
              className="card2-image"
              src="https://images.meesho.com/images/marketing/1678691686252.webp"
              alt=""
            />
          </div>
          <div>
            <div className="card2img">
              <div>
                <img
                  className="card2-image2"
                  src="https://images.meesho.com/images/marketing/1678691699680.webp"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="card2-image2"
                  src="https://images.meesho.com/images/marketing/1678691712594.webp"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card3">
        <div className="card3-btn">
          <button>View All</button>
        </div>
        <div className="card3-image">
          <div className="card3-image-1">
            <img
              className="card3img"
              src="https://images.meesho.com/images/marketing/1678691846068.webp"
              alt=""
            />
            <button>Home Decor</button>
          </div>
          <div className="card3-image-1">
            <img
              className="card3img"
              src="https://images.meesho.com/images/marketing/1678691832099.webp"
              alt=""
            />
            <button>Kitchen Appliances</button>
          </div>
          <div className="card3-image-1">
            <img
              className="card3img"
              src="https://images.meesho.com/images/marketing/1678691796046.webp"
              alt=""
            />
            <button>Health Care</button>
          </div>
        </div>
      </div>
      <div className="card4">
        <div className="card4-btn">
          <button>View All </button>
        </div>
        <div className="card4image">
          <div className="card4imgtag">
            <img
              className="card4-img-2"
              src="https://images.meesho.com/images/marketing/1678691960553.webp"
              alt=""
            />
            <button>Accessories</button>
          </div>
          <div className="card4imgtag">
            <img
              className="card4-img-2"
              src="https://images.meesho.com/images/marketing/1678691936892.webp"
              alt=""
            />
            <button>Footwear</button>
          </div>
          <div className="card4imgtag">
            <img
              className="card4-img-2"
              src="https://images.meesho.com/images/marketing/1678691925419.webp"
              alt=""
            />
            <button>Electronic</button>
          </div>
        </div>
      </div>
      <div class="card5">
        <div className="card5-heading1">
          <h1 className="card5-h1tag">Become a Reseller and </h1>
          <h1 className="card5-htag">
            Start your Online Bussiness with Zero Investment
          </h1>
        </div>
      </div>
      <div className="card6">
        <h4>Register as a Meesho Supplier</h4>
        <p>Sell your products to crores of customers at 0% commision</p>
        <div className="card6-para">
          <p>Grow your bussiness 10x</p>
          <p>Enjoy 100% Profit</p>
          <p>Sell all over India</p>
        </div>
      </div>
      <div>
        <div>
          <button style={styles} onClick={redirectCart}>
            cart
          </button>
          <h2>Product For you </h2>
        </div>
      </div>
      <div className="card7">
        <div className="card7-options">
          <div className="card7-select">
            <select onChange={handelChange} className="selecttag">
              <option value="1">High to Low</option>
              <option value="2">Low to High</option>
              <option value="3">Rating</option>
              <option value="4">Discount</option>
            </select>
          </div>
          <div>
            <h3>Filter</h3>
            <div className="card7-imgdiv3">
              Categories :
              <div className="card7-imgdiv2">
                <img
                  className="card7-image"
                  src="https://t3.ftcdn.net/jpg/04/83/39/12/240_F_483391217_rDo0Gdjp71zXabPRjeaE1O3I85R6nIgB.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="card7-imgdiv1">
              Gender :
              <div className="card7-imgdiv2">
                <img
                  className="card7-image"
                  src="https://t3.ftcdn.net/jpg/04/83/39/12/240_F_483391217_rDo0Gdjp71zXabPRjeaE1O3I85R6nIgB.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="card7-imgdiv1">
              Fabric :
              <div className="card7-imgdiv2">
                <img
                  className="card7-image"
                  src="https://t3.ftcdn.net/jpg/04/83/39/12/240_F_483391217_rDo0Gdjp71zXabPRjeaE1O3I85R6nIgB.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="card7-imgdiv1">
              Oxford :
              <div className="card7-imgdiv2">
                <img
                  className="card7-image"
                  src="https://t3.ftcdn.net/jpg/04/83/39/12/240_F_483391217_rDo0Gdjp71zXabPRjeaE1O3I85R6nIgB.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="card7part">
          {DataSorted.map((item) => {
            return (
              <>
                <div className="card7part2">
                  <ul className="cardlist">
                    <li className="list">ID:{item.id}</li>
                    <li className="list">
                      <img className="imgTag" src={item.images[0]} />
                    </li>
                    <li className="list">Price:{item.price}</li>
                    <li className="list">Brand:{item.brand}</li>
                    <li className="list">Discount:{item.discountPercentage}</li>
                    <li className="list">Rating:{item.rating}</li>
                    <li className="list">Categories:{item.category}</li>
                    <li className="list">
                      <button
                        onClick={() => {
                          addtocart(item);
                        }}
                      >
                        Addtocart
                      </button>
                    </li>
                  </ul>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

import "./supplierNav.css";
import { Link } from "react-router-dom";
export const NavSupplier = () => {
  return (
    <>
      <div className="main-navSupplier">
        <div className="icon">
          <Link className="linkTagsupplier" to="/supplier">
            <img src="https://supplier.meesho.com/images/logo.svg" alt="" />
          </Link>
        </div>
        <div className="supplierNav">
          <ul>
            <Link className="linktagsell" to="/sell">
              <li>Sell online</li>
            </Link>
            <li>How to works</li>
            <li>Pricing & Commision</li>
            <li>Shiping & Return </li>
            <li>Grow Bussiness</li>
            <li>
              <Link to="/profile">
                <button id="supplier-btn2" className="supplier-btn">
                  Login
                </button>
              </Link>
            </li>
          </ul>
        </div>
        <button id="supplier-btn1">Start Selling</button>
        <select>
          <option>Sell online</option>
          <option>How to works</option>
          <option>Pricing & Commision</option>
          <option>Shiping & Return</option>
          <option>Grow Bussiness</option>
          {/* <option></option> */}
        </select>
      </div>
    </>
  );
};

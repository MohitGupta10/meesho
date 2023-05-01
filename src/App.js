import "./App.css";
import { Navbar } from "../src/component/Navbar/nav";
import { Card } from "../src/component/card/card";
import { Footer } from "../src/component/footer/footer";
import { Supplier } from "../src/component/supplier/supplier";
import { Routes, Route } from "react-router-dom";
import { Home } from "../src/component/Home/home";
import { Profile } from "./component/Profile/profile";
import { Sell } from "./component/supplier/supplierList/sell/sell";
import { CartPage } from "./component/cart/cart";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/supplier" element={<Supplier />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    
    </div>
  );
}

export default App;

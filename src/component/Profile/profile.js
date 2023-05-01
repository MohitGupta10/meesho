import "./profile.css";
import { Navbar } from "../Navbar/nav";
import { Link } from "react-router-dom";
export const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="ProfileLogin">
        <div>
          <img
            src="https://images.meesho.com/images/marketing/1661417516766.webp"
            alt=""
          />
          <h3>Sign up</h3>
        </div>
        <div>
          <input placeholder="IN +91" className="input1" />
          <input className="input2" type="text" maxLength={10} required />
        </div>
        <div>
          <Link to="/">
            <button className="profilebtn">Continue</button>
          </Link>
        </div>
      </div>
    </>
  );
};

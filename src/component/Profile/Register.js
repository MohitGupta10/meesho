import "./register.css";
export const Register = () => {
  return (
    <>
      <div className="register">
        <img src="https://images.meeshosupplyassets.com/meesho-logo-pink.svg" />
        <h5>Already a user?</h5>
        <button>Login</button>
      </div>
      <div>
        <div className="detail-register">
          <h2>Welcome to Meesho</h2>
          <p>Create your account to start selling</p>
          <input
            type="text"
            maxLength={10}
            placeholder="Enter MObileNO"
            required
          />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <p>Make your password strong by adding:</p>
          <ul>
            <li>Minimum 8 characters (letters & numbers)</li>
            <li>Minimum 1 special character (@ # $ % ! ^ & *)</li>
            <li>Minimum 1 capital letter (A-Z)</li>
            <li>Minimum 1 number (0-9)</li>
          </ul>
          <button>Create Account</button>
        </div>
        <div>
          <h2>Grow your business faster by selling on Meesho</h2>
          <div>
            <div>
              <img
                src="https://images.meeshosupplyassets.com/supplier_community.svg"
                alt=""
              />
            </div>
            <div>
              <h2>1Laks+</h2>
              <p>Suppliers are selling commission-free</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

import "./supplierFooter.css";
export const SupplierFooter = () => {
  return (
    <>
      <div className="support">
        <h2>Meesho Supplier Support Available 24/7</h2>
        <div>
          <p>
            Meesho supplier support is available to solve all your doubts and
            issues before and after you start your online selling business.
          </p>
          <div className="support1">
            <img src="https://supplier.meesho.com/images/email.svg" alt="" />
            <div className="support2">
              <h5>You can reach out to</h5>
              <h6>sell@meesho.com</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="product-supplier-meesho">
        <div className="meesho-supplier">
          <img
            src="https://supplier.meesho.com/images/footer-logo.svg"
            alt=""
          />
          <p>
            Sell your products to crores of customers on Meesho at 0% commission
          </p>
          <button>Start Selling</button>
        </div>
        <div className="meesho-list-supplier">
          <h2>Sell on Meesho</h2>
          <ul>
            <li>Sell Online</li>
            <li>Pricing & Commision</li>
            <li>How to Works</li>
            <li>Shiping & Return </li>
            <li>Grow your Bussiness</li>
            <li>Learing Hub</li>
            <li>Meesho Ads</li>
            <li>Shop Online on Meesho</li>
          </ul>
        </div>
        <div>
            <h2>Contact us</h2>
            <h5>sell@meesho.com</h5>
        </div>
      </div>
    </>
  );
};

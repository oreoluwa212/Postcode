import React from "react";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="first">
            <ul>
              <li>
                <a href="">Search</a>
              </li>
              <li>
                <a href="">Postcode by Country</a>
              </li>
              <li>
                <a href="">Postcode by Introduction Date</a>
              </li>
              <li>
                <a href="">Postcode Near Me</a>
              </li>
              <li>
                <a href="">Postcode Lottery</a>
              </li>
            </ul>
          </div>
          <div className="second">
            <ul>
              <li>
                <a href="">Postcode Map by User Type</a>
              </li>
              <li>
                <a href="">Postcode Map by User Category</a>
              </li>
              <li>
                <a href="">Postcode Map by Council Tax Band</a>
              </li>
            </ul>
          </div>
          <div className="second">
            <ul>
              <li>
                <a href="">About this Website</a>
              </li>
              <li>
                <a href="">Disclaimer and Limitations</a>
              </li>
              <li>
                <a href="">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright">
        <h5>Check my Postcode</h5>
        <p>CheckMyPostcode.UK is a Good Stuff Website</p>
      </div>
    </div>
  );
};

export default Footer;

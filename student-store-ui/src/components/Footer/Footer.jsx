import * as React from "react";
import "./Footer.css";
import Logos from "./logos.png";

export default function Footer() {
  return (
    <>
      <div>
        <h2 className="title">About Us</h2>
      </div>
      <div className="footer">
        <div className="aboutus">
          <p className="about">
            The codepath student store offers great products at great prices
            from a great team and for a great cause. We've searched far and wide
            for items that perk the interests of even the most eccentric
            students and decided to offer them all here in one place. All
            proceeds go towards bringing high quality CS education to college
            students around the country.
          </p>
        </div>
        <div className="logos">
          <img className="logosize" src={Logos} />
        </div>
      </div>
      <div>
        <div id="contact-us">
          <h2 className="contactus"> Contact Us</h2>
          <div className="contact">
            <div class="link-column">
              <h4>Categories</h4>
              <ul>
                <li>All Categories</li>
                <li>Clothing</li>
                <li>Food</li>
                <li>Accessories</li>
                <li>Tech</li>
              </ul>
            </div>
            <div class="link-column">
              <h4>Support</h4>
              <ul>
                <li>Contact Us</li>
                <li>Money Refund</li>
                <li>Order Status</li>
                <li>Shipping Info</li>
                <li>Open Dispute</li>
              </ul>
            </div>
            <div class="link-column">
              <h4>Account</h4>
              <ul>
                <li>Login</li>
                <li>Register</li>
                <li>Account Setting</li>
                <li>My Orders</li>
              </ul>
            </div>
            <div class="link-column">
              <h4>Socials</h4>
              <ul>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>LinkedIn</li>
                <li>Instagram</li>
                <li>YouTube</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

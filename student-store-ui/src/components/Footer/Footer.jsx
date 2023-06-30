import * as React from "react";
import "./Footer.css";
import Logos from "./logos.png";
import happy from "./happy.svg";
import twitter from "./twitter.svg";
import instagram from "./instagram.svg";
import facebook from "./facebook.svg";

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

      <div className="contacting">
        <div className="socials">
          <h2> Contact Us</h2>
          <p>Email: code@path.org</p> <p>Phone: 1-800-CODEPATH</p>{" "}
          <p>Address: 123 Fake Street, San Francisco, CA </p>
          <p>
            Socials:
            <img className="twittericon" src={twitter} />
            <img className="instagramicon" src={instagram} />
            <img className="facebookicon" src={facebook} />
          </p>
        </div>
        <div className="happy">
          <img src={happy}></img>
        </div>
      </div>
      <div>
        <div id="contact-us">
          <div className="contact">
            <div className="link-column">
              <h4>Categories</h4>
              <ul>
                <li>All Categories</li>
                <li>Clothing</li>
                <li>Food</li>
                <li>Accessories</li>
                <li>Tech</li>
              </ul>
            </div>
            <div className="link-column">
              <h4>Support</h4>
              <ul>
                <li>Contact Us</li>
                <li>Money Refund</li>
                <li>Order Status</li>
                <li>Shipping Info</li>
                <li>Open Dispute</li>
              </ul>
            </div>
            <div className="link-column">
              <h4>Account</h4>
              <ul>
                <li>Login</li>
                <li>Register</li>
                <li>Account Setting</li>
                <li>My Orders</li>
              </ul>
            </div>
            <div className="link-column">
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

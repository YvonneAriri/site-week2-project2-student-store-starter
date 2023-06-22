import * as React from "react";
import "./Navbar.css";
import Logo from "../Logo/Logo";

import twitterIcon from "./twitter.svg";
import instagramIcon from "./instagram.svg";
import facebookIcon from "./facebook.svg";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Logo />
      <img className="twittericon" src={twitterIcon} />
      <img className="instagramicon" src={instagramIcon} />
      <img className="facebookicon" src={facebookIcon} />

      <p className="homebar">Home</p>
      <p className="aboutbar">About Us</p>
      <p className="contactbar">Contact Us</p>
      <p className="buybar">Buy Now</p>
    </nav>
  );
}

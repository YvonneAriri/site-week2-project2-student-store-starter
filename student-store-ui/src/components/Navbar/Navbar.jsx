import * as React from "react";
import "./Navbar.css";
import Logo from "../Logo/Logo";

import twitterIcon from "./twitter.svg";
import instagramIcon from "./instagram.svg";
import facebookIcon from "./facebook.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Logo />
      <img className="twittericon" src={twitterIcon} />
      <img className="instagramicon" src={instagramIcon} />
      <img className="facebookicon" src={facebookIcon} />
      <a href="#homebar">Home</a>
      <a href="#aboutbar">About Us</a>
      <a href="#contact-us">Contact Us</a>
      <a href="#buybar">Buy Now</a>
      {/* <p className="homebar">Home</p>
      <p className="aboutbar">About Us</p>
      <p className="contactbar">Contact Us</p>
      <p className="buybar">Buy Now</p> */}
    </nav>
  );
}

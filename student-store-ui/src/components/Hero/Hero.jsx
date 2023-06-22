import * as React from "react";
import "./Hero.css";
import hero from "./Hero.svg";

export default function Hero() {
  return (
    <div className="Hero">
      <div className="welcome">
        <h1 className="Intro">Welcome!</h1>

        <h1 className="merch">Find Your Merch!</h1>
        <p className="details">
          We have all kinds of goodies. Click on any of the items to start
          filling up your shopping cart. Checkout whenever you're ready.
        </p>
      </div>
      <img className="hero-img" src={hero}></img>
    </div>
  );
}

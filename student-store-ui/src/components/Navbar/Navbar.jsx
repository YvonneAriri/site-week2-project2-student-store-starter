import * as React from "react";
import "./Navbar.css";
import logo from "./logo.png";

export default function Navbar() {
  return (
    <nav className="logo">
      <img className="logo" src={logo}></img>
    </nav>
  );
}

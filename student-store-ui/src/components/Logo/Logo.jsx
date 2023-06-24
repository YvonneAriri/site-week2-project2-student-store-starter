import * as React from "react";
import logo from "./logo.png";
import "./Logo.css";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <div className="codelogo">
      <Link to="/">
        <img className="logo" src={logo} />
      </Link>
    </div>
  );
}

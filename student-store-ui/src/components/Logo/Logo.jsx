import * as React from "react";
import logo from "./logo.png";
import "./Logo.css";

export default function Logo() {
  return (
    <div className="codelogo">
      <img className="logo" src={logo} />
    </div>
  );
}

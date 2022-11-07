import React from "react";
import { TfiPalette } from "react-icons/tfi";
import "../scss/Header.scss";

const Header = () => {
  return (
    <div className="Header">
      <i className="Header-icon">
        <TfiPalette />
      </i>
      <h1 className="Header-text">Color palette generator</h1>
    </div>
  );
};

export default Header;

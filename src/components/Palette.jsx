import React, { useEffect, useState } from "react";
import { CompactPicker } from "react-color";
import "../scss/Palette.scss";

const Palette = () => {
  const [color, setColor] = useState();
  const handleChange = (color) => setColor(color);

  useEffect(() => {
    console.log(color);
  }, [color]);
  return (
    <>
      <div className="Palette">
        <div className="Palette-circles">
          <div className="Palette-circle" style={{ background: "blue" }}></div>
          <div
            className="Palette-circle"
            style={{ background: "lightblue" }}
          ></div>
          <div
            className="Palette-circle"
            style={{ background: "burlywood" }}
          ></div>
          <div className="Palette-circle"></div>
          <div className="Palette-circle"></div>
        </div>
        <div className="Palette-palette">
          <CompactPicker color={color} onChangeComplete={handleChange} />
        </div>
        <div className="Palette-form">
          <p className="Palette-form--text">Name</p>
          <div className="flex">
            <input
              className="Palette-form--input"
              placeholder="Website color scheme"
            />
            <button className="Palette-form--button">+</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Palette;

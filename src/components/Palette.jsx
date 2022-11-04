import React, { useEffect, useState } from "react";
import { CompactPicker } from "react-color";
import Circle from "./Circle";
import "../scss/Palette.scss";

const Palette = () => {
  const [color, setColor] = useState({});
  const [active, setActive] = useState("");

  const { hex } = color;
  const handleChange = (color) => setColor(color);

  const addColor = () => {
    setActive(hex);
  };

  useEffect(() => {
    console.log("el value del hex", hex);
    console.log("el value del active", active);
    addColor();
  }, [color, active]);
  return (
    <>
      <div className="Palette">
        <div className="Palette-circles">
          {}
          <input
            type="button"
            className="Palette-circle"
            style={{ background: active }}
            onFocus={() => addColor()}
          />
          <Circle style={{ background: active }} onFocus={() => addColor()} />
          <Circle />
          <Circle />
          <Circle />
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

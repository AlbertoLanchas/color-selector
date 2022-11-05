import React, { useEffect, useState } from "react";
import { CompactPicker } from "react-color";
import { circles } from "./data";

import "../scss/Palette.scss";

const Palette = () => {
  const [color, setColor] = useState({});
  const [active, setActive] = useState("");

  const { hex } = color;
  const handleChange = (color) => setColor(color);

  const addColor = (id, colour) => {
    if (hex) {
      setActive(hex);
      circles[id].colour = hex;
    } else {
      return;
    }
  };

  useEffect(() => {
    console.log("hex", hex);
    console.log("active", active);
    console.log(circles[0].colour);
  }, [color, active]);

  return (
    <>
      <div className="Palette">
        <div className="Palette-circles">
          {circles.map(({ id, colour }) => {
            return (
              <label className="custom-radio-btn">
                <input
                  key={id}
                  type="radio"
                  name="buton"
                  className="Palette-circle"
                />
                <span
                  className="checkmark"
                  style={{ background: colour }}
                  onClick={() => addColor(id, colour)}
                ></span>
              </label>
            );
          })}
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

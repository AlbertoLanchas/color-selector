import React, { useEffect, useState } from "react";
import { CompactPicker } from "react-color";
import { circles } from "./data";

import "../scss/Palette.scss";

const Palette = () => {
  const [color, setColor] = useState({});
  const [active, setActive] = useState("");
  const [clicked, setClicked] = useState(0);

  const { hex } = color;
  const handleChange = (color) => setColor(color);

  const addColor = (id) => {
    if (hex) {
      setActive(hex);
      circles[id].colour = hex;
      setClicked(id);
    } else {
      setClicked(id);
    }
  };

  useEffect(() => {
    addColor(clicked);
  }, [color, active, hex]);

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
                  onClick={() => addColor(id)}
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

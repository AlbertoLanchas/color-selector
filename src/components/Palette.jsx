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
      circles[id].colour = "white";
    }
  };

  const addSaved = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    addColor(clicked);
  }, [hex]);

  return (
    <>
      <div className="Palette">
        <form id="palette">
          <div className="Palette-circles">
            {circles.map(({ id, colour }) => {
              return (
                <label className="custom-radio-btn" key={id}>
                  <input type="radio" name="buton" className="Palette-circle" />
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
                required
              />
              <input
                type="submit"
                className="Palette-form--submit"
                onSubmit={(e) => addSaved(e)}
              />
              <button
                className="Palette-form--button"
                onSubmit={(e) => addSaved(e)}
              >
                +
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Palette;

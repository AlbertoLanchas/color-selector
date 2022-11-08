import React, { useEffect, useState } from "react";
import { CompactPicker } from "react-color";
import { circles } from "./data";
import { useAppContext } from "../appContext";

import "../scss/Palette.scss";

const Palette = () => {
  const [color, setColor] = useState({});
  const [active, setActive] = useState("");
  const [clicked, setClicked] = useState(0);

  const { hex } = color;
  const handleChange = (color) => setColor(color);

  const { favorites, addToFavorites, setNameInput, getName } = useAppContext();

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
    addToFavorites(circles);
  };

  useEffect(() => {
    addColor(clicked);
    console.log("el favorites desde el palette use effect", favorites);
  }, [hex, circles, favorites]);

  return (
    <>
      <form id="palette" onSubmit={(e) => addSaved(e)} className="Palette">
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
        <div className="Palette-footer">
          <div className="Palette-palette">
            <CompactPicker color={color} onChangeComplete={handleChange} />
          </div>
          <div className="Palette-form">
            <p className="Palette-form--text">Name</p>
            <div className="flex">
              <input
                className="Palette-form--input"
                placeholder="Website color scheme"
                type="submot"
                onChange={(e) => getName(e.target.value)}
                required
              />
              <button className="Palette-form--button">+</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Palette;

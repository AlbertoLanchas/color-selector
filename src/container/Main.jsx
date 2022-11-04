import React from "react";
import Palette from "../components/Palette";
import Saved from "../components/Saved";
import "../scss/Main.scss";

const Main = () => {
  return (
    <div className="Main">
      <Palette />
      <Saved />
    </div>
  );
};

export default Main;

import React from "react";
import "../scss/Saved.scss";
import { useAppContext } from "../appContext";
import { BsFillTrashFill } from "react-icons/bs";
import { circles } from "./data";

const Saved = () => {
  const { favorites, removeFromFavorites, nameInput } = useAppContext();

  console.log("el favorites desde el savedd", favorites);
  console.log("el name input", nameInput);

  return (
    <div className="Saved">
      <h2 className="Saved-title">Saved palettes</h2>
      <div className="Saved-grid">
        {favorites.map(({ id, circles, favs }) => {
          return (
            <>
              <div className="Item">
                <div className="Item-header">
                  <h3 className="Item-header--title">1</h3>
                  <button
                    className="Item-header--button"
                    onClick={() => removeFromFavorites(id)}
                  >
                    <BsFillTrashFill />
                  </button>
                </div>
                <div className="Item-background">
                  <div
                    className="Item-circle"
                    style={{ background: circles[0].colour }}
                  ></div>
                  <div
                    className="Item-circle"
                    style={{ background: circles[1].colour }}
                  ></div>
                  <div
                    className="Item-circle"
                    style={{ background: circles[2].colour }}
                  ></div>
                  <div
                    className="Item-circle"
                    style={{ background: circles[3].colour }}
                  ></div>
                  <div
                    className="Item-circle"
                    style={{ background: circles[4].colour }}
                  ></div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Saved;

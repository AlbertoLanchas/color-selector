import React from "react";
import "../scss/Saved.scss";
import { useAppContext } from "../appContext";

const Saved = () => {
  const { favs, favorites, removeFromFavorites } = useAppContext();
  return (
    <div className="Saved">
      <h2 className="Saved-title">Saved palettes</h2>
      <div className="Saved-grid">
        {favorites.map(({ id, circles }) => {
          {
            /* console.log("dentro del map", circles[0].colour); */
          }
          return (
            <>
              <div className="Item">
                <div className="Item-header">
                  <h3 className="Item-header--title">{circles.colour}</h3>

                  <button className="Item-header--button">X</button>
                </div>
                <div className="Item-background">
                  <div
                    className="Item-circle"
                    style={{ background: "red" }}
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

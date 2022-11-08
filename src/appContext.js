import { createContext, useContext } from "react";
import { useState } from "react";
import { circles } from "./components/data";

const AppContext = createContext(null);
export const useAppContext = () => {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error("App context must be within appContextProvider");
  }
  return context;
};

const AppContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [nameInput, setNameInput] = useState("");

  const getName = (nameInput) => {
    setNameInput([...nameInput, nameInput]);
  };

  const addToFavorites = (circles) => {
    setFavorites([...favorites, { id: new Date(), circles }]);
  };

  const removeFromFavorites = (id) => {
    const oldFavorites = [...favorites];
    const newFavorites = oldFavorites.filter((palette) => palette.id !== id);
    setFavorites(newFavorites);
  };

  return (
    <AppContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        nameInput,
        setNameInput,
        getName,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;

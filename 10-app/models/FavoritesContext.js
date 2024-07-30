import { createContext, useState } from "react";

export const FavoritesContext = createContext();

export function FavoritesContextProvider({ children }) {
  const [favoriteMeals, setFavoriteMeals] = useState([]);

  function addFavorite(mealId) {
    setFavoriteMeals((currentFavs) => [...currentFavs, mealId]);
  }

  function removeFavorite(mealId) {
    setFavoriteMeals((currentFavs) =>
      currentFavs.filter((id) => id !== mealId)
    );
  }

  const value = {
    ids: favoriteMeals,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

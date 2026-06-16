import { createContext, useState, useContext, useEffect } from "react";
// create empty box
const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  //   store favorite project
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  // save the state whenever it get change
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);
  //if the project is already favorite get remove it
  //if the project is not favorite add it
  function toggleFavorite(projectId) {
    if (favorites.includes(projectId)) {
      setFavorites(favorites.filter((id) => id !== projectId));
    } else {
      setFavorites([...favorites, projectId]);
    }
  }

  return (
    <>
      {/* value shares Context globally*/}
      <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
        {/* everything inside the app get children  */}
        {children}
      </FavoritesContext.Provider>
    </>
  );
}
// useFavorite hook for prevent extra repeated code writing
export function useFavorites() {
  return useContext(FavoritesContext);
}

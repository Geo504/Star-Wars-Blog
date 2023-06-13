import { createContext, useContext, useMemo, useState } from "react";

import {useResourses} from "../Hooks/useResourses"


const AppContext = createContext();

export const AppProvider = ({children}) => {
  const [characters, setCharacter]=useResourses('people');
  const [planets, setPlanets]=useResourses('planets');
  const [vehicles, setVehicles]=useResourses('vehicles');

  const [favorites, setFavorites] = useState([]);


  const switchFavoritesCharacter = (id) =>{
    const updateCharacters = characters.map(item=>{
      if(item._id === id){
        item.favorite = !item.favorite;
      }
      return item;
    });
    setCharacter(updateCharacters);
    handleFavorites();
  }

  const switchFavoritesPlanets = (id) =>{
    const updatePlanets = planets.map(item=>{
      if(item._id === id){
        item.favorite = !item.favorite;
      }
      return item;
    });
    setPlanets(updatePlanets);
    handleFavorites();
  }

  const switchFavoritesVehicles = (id) =>{
    const updateVehicles = vehicles.map(item=>{
      if(item._id === id){
        item.favorite = !item.favorite;
      }
      return item;
    });
    setVehicles(updateVehicles);
    handleFavorites();
  }

  const deleteFavorite = (id) =>{
    switchFavoritesCharacter(id);
    switchFavoritesPlanets(id);
    switchFavoritesVehicles(id);
  }

  const handleFavorites = () =>{
    const favoritesListCharacters = characters.filter((item) => item.favorite === true);
    const favoritesListPlanets = planets.filter((item) => item.favorite === true);
    const favoritesListVehicles = vehicles.filter((item) => item.favorite === true);

    const favoritesList = favoritesListCharacters.concat(favoritesListPlanets, favoritesListVehicles);
    setFavorites(favoritesList);
  }

  const store = useMemo(()=>{
    return  {characters, planets, vehicles, favorites}
  },[characters, planets, vehicles]);

  const actions = {
    switchFavoritesCharacter,
    switchFavoritesPlanets,
    switchFavoritesVehicles,
    deleteFavorite
  }

  return(
    <AppContext.Provider value={{ store, actions }}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);
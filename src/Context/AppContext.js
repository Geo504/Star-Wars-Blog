import { createContext, useContext, useEffect, useMemo, useState } from "react";

import { apiCall } from "../Utils/apiCall";
import { getResources } from "../Services/getResources";
import {characterData, planetsData} from '../Components/data'


const AppContext = createContext();

export const AppProvider = ({children}) => {
  const [characters, setCharacter]=useState(characterData);
  const [planets, setPlanets]=useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(()=>{
    const fetchData = async () => {
      const peopleUrls = await getResources('people');
      const planetsUrls = await getResources('planets');
      const vehiclesUrls = await getResources('vehicles');

      const peopleResponse = await Promise.all(peopleUrls.results.map(character => apiCall(character.url)));
      const planetsResponse = await Promise.all(planetsUrls.results.map(character => apiCall(character.url)));
      const vehiclesResponse = await Promise.all(vehiclesUrls.results.map(character => apiCall(character.url)));

      const peopleList = peopleResponse.map(character=> character.result);
      const planetList = planetsResponse.map(character=> character.result);
      const vehicleList = vehiclesResponse.map(character=> character.result);

      setCharacter(peopleList.map(character=>({favorite: false, ...character})));
      setPlanets(planetList.map(planet=>({favorite: false, ...planet})));
      setVehicles(vehicleList.map(vehicles=>({favorite: false, ...vehicles})));
    }
    
    fetchData();
  }, [])


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
    const updateCharacters = characters.filter((item)=>{
      if(item._id === id){
        item.favorite = !item.favorite;
      }
      return item;
    });
    const updatePlanets = planets.filter((item)=>{
      if(item._id === id){
        item.favorite = !item.favorite;
      }
      return item;
    });
    const updateVehicles = vehicles.filter((item)=>{
      if(item._id === id){
        item.favorite = !item.favorite;
      }
      return item;
    });
    setCharacter(updateCharacters);
    setPlanets(updatePlanets);
    setVehicles(updateVehicles);
    handleFavorites();
  }

  const handleFavorites = () =>{
    const favoritesListCharacters = characters.filter((item) => item.favorite === true);
    const favoritesListPlanets = planets.filter((item) => item.favorite === true);
    const favoritesListVehicles = vehicles.filter((item) => item.favorite === true);

    const favoritesList = favoritesListCharacters.concat(favoritesListPlanets, favoritesListVehicles);
    setFavorites(favoritesList);
  }



  const store = useMemo(()=>{
    return {characters, planets, vehicles, favorites}
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
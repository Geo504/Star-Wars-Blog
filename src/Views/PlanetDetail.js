import React from 'react';
import { useAppContext } from '../Context/AppContext';
import { useParams } from 'react-router-dom';

import { DiscriptionPlanet } from '../Components/DiscriptionPlanet/DiscriptionPlanet'

export const PlanetDetail = () => {
  const value = useAppContext();
  const params = useParams();

  return (
    <div className='container'>
      {
        value.store.planets.map(item=>{
          if (item._id===params.id) {
            return (
              <DiscriptionPlanet 
                key={item._id}
                uid={item.uid}
                planet={item.properties}
              />
              )
          };
        })
      }
    </div>
  )
}
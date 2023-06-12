import React from 'react'
import { useAppContext } from '../../Context/AppContext'

import { ElementCard } from '../ElementCard/ElementCard'

import style from './HomeLists.module.css'

export const HomeLists = () => {
  const value = useAppContext();

  return (
    <>
    <div className='mb-3'>
      <h2 className={`${style.pricipalTitle} pricipal-Title`}>Character List</h2>
      <div className='grid gap-3'>
        {value.store.characters.map(item =>
          <ElementCard
            elementType={'characters'}
            uid={item.uid}
            key={item._id}
            id={item._id}
            favorite={item.favorite}
            title={item.properties.name}
            favoriteFuntion={value.actions.switchFavoritesCharacter}
          >
            <p><b>Gender:</b> {item.properties.gender}</p>
            <p><b>Height:</b> {item.properties.height} cm.</p>
            <p><b>Mass:</b> {item.properties.mass} kg.</p>
          </ElementCard>
        )}
      </div>
    </div>

    <div className='mb-3'>
      <h2 className={`${style.pricipalTitle} pricipal-Title`}>Planet List</h2>
      <div className='grid gap-3'>
        {value.store.planets.map(item =>
          <ElementCard
            elementType={'planets'}
            key={item._id}
            id={item._id}
            uid={item.uid}
            favorite={item.favorite}
            title={item.properties.name}
            favoriteFuntion={value.actions.switchFavoritesPlanets}
          >
            <p><b>Population:</b> {item.properties.population}</p>
            <p><b>Diameter:</b> {item.properties.diameter} km.</p>
            <p><b>Terrain:</b> {item.properties.terrain}</p>
          </ElementCard>
        )}
      </div>
    </div>

    <div className='mb-3'>
      <h2 className={`${style.pricipalTitle} pricipal-Title`}>Vehicle List</h2>
      <div className='grid gap-3'>
        {value.store.vehicles.map(item =>
          <ElementCard
            elementType={'vehicles'}
            key={item._id}
            id={item._id}
            uid={item.uid}
            favorite={item.favorite}
            title={item.properties.model}
            favoriteFuntion={value.actions.switchFavoritesVehicles}
          >
            <p><b>Speed:</b> {item.properties.max_atmosphering_speed}km/h</p>
            <p><b>Passengers:</b> {item.properties.crew} </p>
            <p><b>Cargo capacity:</b> {item.properties.cargo_capacity} tons</p>
          </ElementCard>
        )}
      </div>
    </div>
    </>

  )
}

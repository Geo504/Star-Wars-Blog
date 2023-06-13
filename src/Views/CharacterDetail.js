import React from 'react';
import { useAppContext } from '../Context/AppContext';
import { useParams } from 'react-router-dom';

import { DiscriptionCharacter } from '../Components/DiscriptionCharacter/DiscriptionCharacter'

export const CharacterDetail = () => {
  const value = useAppContext();
  const params = useParams();

  return (
    <div className='container'>
      {
        value.store.characters.map(item=>{
          if (item._id===params.id) {
            return (
              <DiscriptionCharacter 
                key={item._id}
                id={item._id} 
                character={item.properties}
              />
            )};
        })
      }
    </div>
  )
}

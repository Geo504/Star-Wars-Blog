import React from 'react';
import { useAppContext } from '../Context/AppContext';
import { useParams } from 'react-router-dom';

import { DiscriptionVehicle } from '../Components/DiscriptionVehicles/DiscriptionVehicle';

export const VehicleDetail = () => {
  const value = useAppContext();
  const params = useParams();

  return (
    <div className='container'>
      {
        value.store.vehicles.map(item=>{
          if (item._id===params.id) {
            return (
              <DiscriptionVehicle 
                key={item._id}
                id={item._id} 
                vehicle={item.properties}
              />
            )};
        })
      }
    </div>
  )
}
import React from 'react';

import { useAppContext } from '../Context/AppContext'
import RingLoader from "react-spinners/RingLoader";
import { HomeLists } from '../Components/HomeLists/HomeLists';



function Home() {
  const value = useAppContext();

  return (
    <>
      {
        value.store.characters.length===0 || value.store.planets.length===0 || value.store.vehicles.length===0
        ?<div className='loading-Div'>
          <RingLoader
            color={"#fff"}
            size={200}
          />
         </div>

        :<div className='container'>
          <HomeLists />
         </div>
      }
    </>
  );
}
export default Home;
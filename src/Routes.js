import Home from './Views/Home'
import { CharacterDetail } from './Views/CharacterDetail';
import { PlanetDetail } from './Views/PlanetDetail';
import { VehicleDetail } from './Views/VehiclesDetail';

 export const routes = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/characters/:id',
    element: <CharacterDetail />
  },
  {
    path: '/planets/:id',
    element: <PlanetDetail />
  },
  {
    path: '/vehicles/:id',
    element: <VehicleDetail />   
  }
]
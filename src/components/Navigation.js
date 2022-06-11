import { useAppContext } from "../contexts/AppContext";
import planet from '../data/planet.json';

export default function Navigation(){
  const context = useAppContext();

  return (
    <div>
      <ul>
        {planet.map(planet => 
        <li key={planet.name}>
          <img 
          onClick={()=>context.setPlanet(planet)}
          src={planet.image} 
          alt={planet.name}  
          width="100"/>
        </li>
        )}
      </ul>
    </div>
  )
}
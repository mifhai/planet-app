import { useAppContext } from "../contexts/AppContext";

export default function Navigation(){
  const context = useAppContext();

  return (
    <div>
      <ul>
        <li>
          <img 
          onClick={()=>context.setPlanet({
            ...context.planet,
            image:'mars.png'
          })}
          src={context.planet.image} 
          alt={context.planet.name}  
          width="100"/>
        </li>
      </ul>
    </div>
  )
}
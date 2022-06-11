import { createContext, useContext, useEffect, useState } from "react";


export const AppContext = createContext({});

export function useAppContext(){
  return useContext(AppContext);
}

export function AppProvider({ children }){
  const [planet, setPlanet] = useState({});

  useEffect(() => {
    const planet = {
      name:'Planet Bumi',
      image: 'earth.png',
    }

    setPlanet(planet);
  }, [])

  const appContextValue = {
    planet,
    setPlanet,
  };

  return (
    <AppContext.Provider value={appContextValue}>
      {children}
    </AppContext.Provider>
  )
}
import { createContext, useContext, useEffect, useState } from "react";


export const AppContext = createContext({});

export function useAppContext(){
  return useContext(AppContext);
}

export function AppProvider({ children }){
  const [planet, setPlanet] = useState({});

  useEffect(() => {
    const planet = {
      id: 1,
      name: "Planet Bumi",
      description: "Earth is the third planet from the Sun and the only astronomical object known to harbor life. While large volumes of water can be found throughout the Solar System, only Earth sustains liquid surface water. About 71% of Earth's surface is made up of the ocean, dwarfing Earth's polar ice, lakes, and rivers. The remaining 29% of Earth's surface is land, consisting of continents and islands. Earth's surface layer is formed of several slowly moving tectonic plates, interacting to produce mountain ranges, volcanoes, and earthquakes. Earth's liquid outer core generates the magnetic field that shapes Earth's magnetosphere, deflecting destructive solar winds.",
      image: "earth.png",
      url: "https://earth.google.com/web/@4.95802315,119.19604758,-601.91957456a,22252355.36065578d,35y,0h,0t,0r"
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
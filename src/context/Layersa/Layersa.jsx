import "./Layersa.css";
import { createContext, useEffect, useState } from "react";
import GardenFetch from "../../services/garden"

export const layersaContext = createContext();


function LayersaProvider({children}) {
  const [Layersa, setLayersa] = useState();
  useEffect(() => {
    GardenFetch("Layersa").then(result =>setLayersa(result) )
  },[])
  return (
    <layersaContext.Provider value={{ Layersa, setLayersa }}>
    {children}
  </layersaContext.Provider>
  );
};

export default LayersaProvider;

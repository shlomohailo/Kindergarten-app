import { createContext, useEffect, useState } from "react";
import "./GrdenContext~.css";
import GardenFetch from "../../services/garden"

export const horticultureContext = createContext();

function HorticultureProvider({ children }) {
  const [horticulture, setHorticulture] = useState([]);
  useEffect(() => {
    GardenFetch("horticulture").then(result =>setHorticulture(result) )
  },[])
  return (
    <horticultureContext.Provider value={{ horticulture, setHorticulture }}>
      {children}
    </horticultureContext.Provider>
  );
};

export default HorticultureProvider;

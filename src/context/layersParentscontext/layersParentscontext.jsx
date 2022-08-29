import "./layersParentscontext.css";
import { createContext, useEffect, useState } from "react";
import GardenFetch from '../../services/garden'
export const ParentsCommitteecontext = createContext();

function ParentsCommitteeProvider({children}) {
  const [ParentsCommittee, setParentsCommittee] = useState();
  useEffect(() => {
    GardenFetch("ParentsCommittee").then(result =>setParentsCommittee(result) )
  },[])
  return (
    <ParentsCommitteecontext.Provider value={{ ParentsCommittee, setParentsCommittee }}>
    {children}
  </ParentsCommitteecontext.Provider>
  );
};

export default ParentsCommitteeProvider;

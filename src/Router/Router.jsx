import "./Router.css";
import { Contact, Home, Horticulture, Layers, LayersParents, Thepageisnotfound } from '../component/pages/index';
import { Routes, Route } from 'react-router-dom';
import HorticultureProvider from '../context/GrdenContext~/GrdenContext~';
import LayersaProvider from '../context/Layersa/Layersa';
import ParentsCommitteeProvider from '../context/layersParentscontext/layersParentscontext'
function Router() {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Horticulture" element={<HorticultureProvider><Horticulture /></HorticultureProvider>} />
      <Route path="Layers" element={<LayersaProvider><Layers /></LayersaProvider>} />
      <Route path="LayersParents" element={<ParentsCommitteeProvider><LayersParents /></ParentsCommitteeProvider>} />
      <Route path="Contact" element={<Contact />} />
      <Route path="*" element={<Thepageisnotfound />} />
    </Routes>
  );
};

export default Router;

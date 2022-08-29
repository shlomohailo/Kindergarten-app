import "./Layers.css";
import { useContext } from "react";
import {layersaContext} from '../../../context/Layersa/Layersa';
import {LayersaTable} from '../../fichers/layersaTable/layersaTable';

function Layers() {
  const { Layersa, setLayersa } = useContext(layersaContext);
  return (
    <div className="layers">
      <h1>Layers</h1>
      <table>
  <thead >
    <tr>
      <th>first name</th>
      <th>last name </th>
      <th>phone </th>
    </tr>
  </thead>
      {Layersa?.map((layersaItem) => <LayersaTable layersa={layersaItem} />)}
</table>

    </div>
    
  );
};

export default Layers;

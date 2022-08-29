import "./LayersParents.css";
import {LayersaTablePerents} from '../../fichers/layersaTable/layersaTable';
import { useContext } from "react";
import {ParentsCommitteecontext} from '../../../context/layersParentscontext/layersParentscontext'

function LayersParents() {
  const { ParentsCommittee, setParentsCommittee} = useContext(ParentsCommitteecontext);

  return (
    <div className="layers-parents">
         <h1>LayersParents</h1>
      <table>
  <thead >
    <tr>
      <th>first name</th>
      <th>last name </th>
      <th>phone </th>
      <th>email </th>
      <th>kid name </th>


    </tr>
  </thead>
      {ParentsCommittee?.map((LayersParentsitem) => <LayersaTablePerents layersParents={LayersParentsitem} />)}
</table>
    </div>
  );
};

export default LayersParents;

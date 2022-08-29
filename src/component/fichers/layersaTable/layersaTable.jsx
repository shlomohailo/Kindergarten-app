import "./layersaTable.css";

export function LayersaTable({layersa}) {
  const { firstname, lastname, phone } = layersa;
  return (
  <tbody id="tbody_table">
    <tr>
      <td>{firstname}</td>
      <td>{lastname}</td>
      <td>{phone}</td>
    </tr>
  </tbody>
 
  );
};

  

export function LayersaTablePerents({layersParents}) {
  const { firstname, lastname, phone,eamil,kidname } = layersParents;
  return (
  <tbody id="tbody_table">
    <tr>
      <td>{firstname}</td>
      <td>{lastname}</td>
      <td>{phone}</td>
      <td>{eamil}</td>
      <td>{kidname}</td>
    </tr>
  </tbody>
 
  );
};



import { useContext } from "react";
import "./horticulture.css";
import { horticultureContext } from '../../../context/GrdenContext~/GrdenContext~'
import HorticultureCard from '../../fichers/HorticultureCard/HorticultureCard';

function Horticulture() {
  const { horticulture } = useContext(horticultureContext);

  return (
    <div className="horticulture">
     
      {horticulture?.map((horticultureItem) => <HorticultureCard horticulture={horticultureItem} />)}
    </div>
  );
};

export default Horticulture;

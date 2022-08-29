import "./HorticultureCard.css";

function HorticultureCard({horticulture}) {
  const { firstname, lastname, phone, picture } = horticulture;
  return (
    
    <div className="horticulture-card">
      <h1>{firstname}</h1>
      <h1>{lastname}</h1>
      <h1>{phone}</h1>
      <img id="pic_hor" src={picture} alt="" />

    </div>
  );
};

export default HorticultureCard;

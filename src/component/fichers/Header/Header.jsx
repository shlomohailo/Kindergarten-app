import "./Header.css";
import { Link } from 'react-router-dom';
export const pages = ["Contact",
  "Horticulture",
  "Layers",
  "LayersParents",
  ]

function Header() {
  return (
    <div className="header">
      <h1 id="h1_hedaer">Kindergarten</h1>
      <div id="btn_link" >
      <Link to="/"> <button >Home</button></Link>
      {pages.map(pageitem => (<Link to={pageitem}><button>{pageitem}</button> </Link>))}
      </div>
    </div>
  );
};

export default Header;

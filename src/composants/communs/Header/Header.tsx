import { Link } from "react-router-dom";
import "../../../styles/Header.scss";

const Header = () => {
  return (
    <header>
      <img src="" alt="" />
      <nav className="liensHeader">
        <ul>
          <Link to="/">Mon Entreprise</Link>
          <Link to="/">Ajouter une Prestation</Link>
          <Link to="/">Mes Prestations</Link>
        </ul>
      </nav>
      <aside className="iconesHeader"></aside>
    </header>
  );
};

export default Header;

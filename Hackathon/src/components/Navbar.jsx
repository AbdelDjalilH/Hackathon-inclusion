import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav>
      <ul>
        <div className="left-nav">
          <li>
            <Link className="link" to="/connecter">
              Se connecter
            </Link>
          </li>
          <li>
            <Link className="link" to="/Register">
              S'inscrire
            </Link>
          </li>
        </div>
        <img className="logoImg" src={logo} alt="logo" />
        <div className="right-nav">
          <li>
            <Link className="link" to="/OffreEmplois">
              Offres d'emploi
            </Link>
          </li>
          <li>
            <Link className="link" to="/nousContacter">
              Contact
            </Link>
          </li>
          <li>
            <Link className="link" to="/">
              Accueil
            </Link>
          </li>
        </div>
      </ul>
      <hr />
    </nav>
  );
}

export default Navbar;

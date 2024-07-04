import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav>
      <Link to="/signup">S'inscrire</Link>
      <Link to="/login">Se connecter</Link>
      <img src={logo} alt="logo" />
      <Link to="/jobs">Offres d'emploi</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/">Accueil</Link>
    </nav>
  );
}

export default Navbar;

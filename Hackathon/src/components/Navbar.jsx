import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav>
      <Link to="/signup">S'inscrire</Link>
      <Link to="/login">Se connecter</Link>
      <img src={logo} alt="logo" />
      <Link to="/OffreEmplois">Offres d'emploi</Link>
      <Link to="/nousContacter">Contact</Link>
      <Link to="/">Accueil</Link>
      <Link to="/offresDuMoment">Offres du moment</Link>
    </nav>
  );
}

export default Navbar;

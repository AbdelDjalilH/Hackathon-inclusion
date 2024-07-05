import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/footer.css";

function Footer() {
  return (
    <footer>
      <ul className="footer-list">
        <li className="left-li">
          <Link className="QSN" to="/QuiSommesNous">
            Qui sommes nous?
          </Link>
        </li>
        <img className="logoImg" src={logo} alt="logo" />
        <li className="right-li">Made by @wilders</li>
      </ul>
    </footer>
  );
}

export default Footer;

import { Link } from "react-router-dom";
import "../styles/accueil.css";
import handshake from "../assets/handshake.png";
import emploi1 from "../assets/emploi1.png";
import emploi2 from "../assets/emploi2.png";
import emploi3 from "../assets/emploi3.png";

function Accueil() {
  return (
    <div>
      <section className="top-page">
        <div className="left">
          <h1 className="Accueil-title">Votre nouveau travail ici</h1>

          <div className="input-div">
            <input type="text" placeholder="Mot clé" />
            <input type="text" placeholder="Ville, Département" />
          </div>
          <div className="trouverDesOffresBtn">
            <button className="btnOrange">Trouver des offres</button>
          </div>
        </div>
        <div className="right">
          <img src={handshake} alt="handshake" />
        </div>
      </section>
      <section className="middle-page">
        <Link to="/offresDuMoment">Offres du moment</Link>
        <div className="emploi-section">
          <div>
            <img src={emploi1} alt="empoi1" />
          </div>
          <div>
            <img src={emploi2} alt="emploi2" />
          </div>
          <div>
            <img src={emploi3} alt="emploi3" />
          </div>
        </div>
      </section>
      <section className="bottom-page">
        <Link>Voir les offres</Link>
      </section>
    </div>
  );
}
export default Accueil;

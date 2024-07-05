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
            <input className="input-top" type="text" placeholder="Mot clé" />
            <input
              className="input-top"
              type="text"
              placeholder="Ville, Département"
            />
          </div>
          <div className="trouverDesOffresBtn">
            <button className="btnOrange-top">Trouver des offres</button>
          </div>
        </div>
        <div className="right">
          <img className="handshake" src={handshake} alt="handshake" />
        </div>
      </section>
      <section className="middle-page">
        <Link className="offres-middle-title" to="/offresDuMoment">
          Offres du moment
        </Link>
        <div className="emploi-section">
          <div className="div-img1">
            <img className="img1" src={emploi1} alt="empoi1" />
            <p>
              Vendeur chez Auchan <br />
              Plus de détails ➡️
            </p>
          </div>
          <div className="div-img2">
            <img className="img2" src={emploi2} alt="emploi2" />
            <p>
              Expert comptable
              <br /> Plus de détails ➡️
            </p>
          </div>
          <div className="div-img3">
            <img className="img3" src={emploi3} alt="emploi3" />
            <p>
              Maçon
              <br /> Plus de détails ➡️
            </p>
          </div>
        </div>
      </section>
      <section className="bottom-page">
        <h2 className="bottom-title">Nos Offres</h2>
        <button className="btnOrange-bottom">Voir les offres</button>
      </section>
    </div>
  );
}
export default Accueil;

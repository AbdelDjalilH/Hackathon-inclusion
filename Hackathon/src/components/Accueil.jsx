import { Link } from "react-router-dom";
import handshake from "../assets/handshake.png";
import emploi1 from "../assets/emploi1.png";
import emploi2 from "../assets/emploi1.png";
import emploi3 from "../assets/emploi1.png";

function Accueil() {
  return (
    <div>
      <section className="top-page">
        <div className="left">
          <h1>Votre nouveau travail ici</h1>

          <div className="input-div">
            <input type="text" placeholder="mot clé" />
            <input type="text" placeholder="Ville, département" />
          </div>
          <Link>Trouver des offres</Link>
        </div>
        <div className="right">
          <img src={handshake} alt="handshake" />
        </div>
      </section>
      <section className="middle-page">
        <h2>Offres du moment</h2>
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
        <h2>Nos offres</h2>
        <Link>Voir les offres</Link>
      </section>
    </div>
  );
}
export default Accueil;

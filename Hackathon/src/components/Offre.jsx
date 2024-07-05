import "../styles/offre.css";

function Offre() {
  return (
    <div className="app-container">
      <h1 className="h1-offre">Votre nouveau travail ici</h1>
      <div className="input-container">
        <div className="input-wrapper">
          <input type="text" id="keyword" placeholder="Mot clé" />
        </div>
        <div className="input-wrapper">
          <input type="text" id="location" placeholder="Ville, Département" />
        </div>
      </div>
      <button className="search-button">Trouver les Offres</button>

      <h2 className="h2-offre">Offres d'emploi</h2>
      <div className="job-offers">
        <div className="column">
          <img
            className="img-offre"
            src="../src/assets/emploi1.png"
            alt="Offre 1"
          />
          <img
            className="img-offre"
            src="../src/assets/emploi2.png"
            alt="Offre 2"
          />
        </div>
        <div className="column">
          <img
            className="img-offre"
            src="../src/assets/emploi3.png"
            alt="Offre 3"
          />
          <img
            className="img-offre"
            src="../src/assets/emploi4.png"
            alt="Offre 4"
          />
        </div>
        <div className="column">
          <img
            className="img-offre"
            src="../src/assets/emploi5.png"
            alt="Offre 5"
          />
          <img
            className="img-offre"
            src="../src/assets/emploi6.png"
            alt="Offre 6"
          />
        </div>
      </div>

      <div className="pagination">
        <button className="page-button">{"<"}</button>
        <button className="page-button">1</button>
        <button className="page-button">2</button>
        <button className="page-button">3</button>
        <span>...</span>
        <button className="page-button">100</button>
        <button className="page-button">{">"}</button>
      </div>
    </div>
  );
}

export default Offre;

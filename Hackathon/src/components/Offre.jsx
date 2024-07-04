import "../styles/offre.css";

function Offre() {
  return (
    <div className="app-container">
      <h1>Votre nouveau travail ici</h1>
      <div className="input-container">
        <div className="input-wrapper">
          <label htmlFor="keyword">Mot clé</label>
          <input type="text" id="keyword" placeholder="Mot clé" />
        </div>
        <div className="input-wrapper">
          <label htmlFor="location">Ville, Département</label>
          <input type="text" id="location" placeholder="Ville, Département" />
        </div>
      </div>
      <button className="search-button">Trouver les Offres</button>

      <h2>Offres d'emploi</h2>
      <div className="job-offers">
        <div className="column">
          <img src="image1.jpg" alt="Offre 1" />
          <img src="image2.jpg" alt="Offre 2" />
          <img src="image3.jpg" alt="Offre 3" />
        </div>
        <div className="column">
          <img src="image4.jpg" alt="Offre 4" />
          <img src="image5.jpg" alt="Offre 5" />
          <img src="image6.jpg" alt="Offre 6" />
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

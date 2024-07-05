import all_disc_1 from "../assets/all_disc_1.png";
export default function PageAccueil() {
  return (
    <>
      <h1>Bienvenue sur Allinclusion</h1>;
      <p> L'inclusion de nos talents sans discrimination</p>
      <img src={all_disc_1} alt="all disc 1" />
      <div className="btn">
        <button>Homme Femme travail égale salaire égale</button>
        <button>Pas de discrimination raciale pour travailler</button>
        <button>Handicapé moteur même droits pour acceder à l’emploi</button>
      </div>
    </>
  );
}

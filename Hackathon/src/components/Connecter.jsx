import "../styles/connecter.css";

const connecter = () => {
  return (
    <div className="login-container">
      <div className="container">
        <img src="../src/assets/logo.png" alt="Logo" className="logo" />
        <h1>Bienvenue</h1>
        <form>
          <input
            type="text"
            placeholder="Entrer votre nom d'utilisateur ou email"
            required
          />
          <input
            type="password"
            placeholder="Entrer votre mot de passe"
            required
          />
          <button type="submit" className="button-connexion">
            Se Connecter
          </button>
        </form>
      </div>
    </div>
  );
};

export default connecter;

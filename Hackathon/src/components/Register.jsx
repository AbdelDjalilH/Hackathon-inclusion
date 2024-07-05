import "../styles/register.css";

function Register() {
  return (
    <div className="register-div">
      <form className="register-form" action="">
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Entrez votre nom d'utilisateur"
        />

        <input
          type="email"
          id="email"
          name="email"
          placeholder="Entrez votre adresse mail"
        />

        <input
          type="phone"
          id="phone"
          name="phone"
          placeholder="Entrez votre mot de passe"
        />

        <input
          id="message"
          name="message"
          placeholder="Confirmez votre mot de passe"
        ></input>

        <button className="registerForm-btn" type="submit">
          Confirmer
        </button>
      </form>
    </div>
  );
}
export default Register;

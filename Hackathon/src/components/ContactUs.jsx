import "../styles/ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-form">
      <label htmlFor="name">Nom Prenon:</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Votre nom et prenom"
      />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" placeholder="Votre email" />

      <label htmlFor="Phone">Telephone:</label>
      <input
        type="phone"
        id="phone"
        name="phone"
        placeholder="Votre Telephone"
      />

      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        name="message"
        placeholder="Votre message"
      ></textarea>

      <button className="submit-button" type="submit">
        Envoyer Message
      </button>
    </div>
  );
};

export default ContactUs;

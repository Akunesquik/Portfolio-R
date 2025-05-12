import React, { useState } from 'react';
import styles from './Contact.module.css'; // Assure-toi d'avoir créé ce fichier CSS pour styliser ton formulaire

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Envoi via Formspree
    const response = await fetch('https://formspree.io/f/mwporprp', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus('Message envoyé avec succès!');
      setFormData({ name: '', email: '', message: '' }); // Réinitialiser le formulaire
    } else {
      setStatus('Erreur d\'envoi. Réessayez plus tard.');
    }
  };

  return (
    <section className={styles.contactSection}>
      <h2>Contactez-moi</h2>
      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Votre nom"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Votre email"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Votre message"
          required
          rows="10"
        />
        <button type="submit">Envoyer</button>
      </form>
      {status && <p className={styles.statusMessage}>{status}</p>}
    </section>
  );
};

export default Contact;

import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <h2 className="contact-title">CONTACTO</h2>
      <div className="divider divider-footer"><hr className="line" /><span className="star">★</span><hr className="line" />
    </div>
      <form>
  <div className="input-container">
    <input type="text" id="nombre" placeholder="Nombre" required />
  </div>
  <div className="input-container">
    <input type="email" id="email" placeholder="Correo electrónico" required />
  </div>
  <div className="input-container">
    <textarea id="mensaje" placeholder="Mensaje" required></textarea>
  </div>
  <button type="submit">Enviar</button>
</form>

    </div>
  );
}

export default Footer;

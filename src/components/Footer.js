import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <h2 className="contact-title">CONTACTO</h2>
      <div class="divider divider-footer"><hr class="line" /><span class="star">★</span><hr class="line" />
    </div>
      <form>
  <div class="input-container">
    <input type="text" id="nombre" placeholder="Nombre" required />
  </div>
  <div class="input-container">
    <input type="email" id="email" placeholder="Correo electrónico" required />
  </div>
  <div class="input-container">
    <textarea id="mensaje" placeholder="Mensaje" required></textarea>
  </div>
  <button type="submit">Enviar</button>
</form>

    </div>
  );
}

export default Footer;

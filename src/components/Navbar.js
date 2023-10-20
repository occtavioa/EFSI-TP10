import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom'; // Importa Link de react-router-dom

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <p>Portfolio</p>
      </div>
      <div className="navbar-right">
        <Link to="/">Home</Link>
        <Link to="/projects">Mis Creaciones</Link>
        <Link to="/favorites">Favoritos</Link> {/* Agrega el enlace a la página de Favoritos */}
        <Link to="/info">Info</Link>
      </div>
    </div>
  );
}

export default Navbar;

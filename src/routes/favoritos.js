import React from 'react';
import './info.css';

function Info() {
  return (
    <div className="info-container">
      <h2 className="info-title">ABOUT US</h2>
      <div className="specific-divider">
        <hr className="line" />
        <span className="star">★</span>
        <hr className="line" />
      </div>
      <div className="columns-container">
        <div className="column">
          <p className="right-align">Hola soy Octavio Arfa y en este portfolio se observan mis proyectos a lo largo del año 😎</p>
        </div>
        <div className="column">
          <p className="left-align">Hola soy Luka Moscovich y en este portfolio se observan mis proyectos a lo largo del año donde Octa me ayudó 😊</p>
    </div>
      </div>
    </div>
  );
}

export default Info;


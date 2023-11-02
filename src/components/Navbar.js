import React, { useContext } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom'; // Importa Link de react-router-dom
import { FavoritesContext } from '../FavoritesContext';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Badge } from '@mui/base';

function Navbar() {
  const {favorites} = useContext(FavoritesContext)
  
  return (
    <div className="navbar">
      <div className="navbar-left">
        <p>Portfolio</p>
      </div>
      <div className="navbar-right">
        <Link to="/">Home</Link>
        <Link to="/projects">Mis Creaciones</Link>
        <Link to="/favorites"><Badge showZero={true} badgeContent={favorites.length}><FavoriteIcon /></Badge> Favoritos</Link>
        <Link to="/info">Info</Link>
      </div>
    </div>
  );
}

export default Navbar;

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ProjectCardList from '../components/ProjectCardList';
import { FavoritesContext } from '../FavoritesContext';
import './info.css';

function Favorites() {
  const {favorites} = useContext(FavoritesContext)

  return (
    <div style={{backgroundColor: "#82d8ab", display: "flex", flexDirection: "column"}}>
      <ProjectCardList projects={favorites} />
      <button style={{margin: "1% auto"}}>
        <Link to={"/projects"}>Ver todos</Link>
      </button>
    </div>
  );
}

export default Favorites;

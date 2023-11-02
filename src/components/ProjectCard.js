import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { FavoritesContext } from "../FavoritesContext"
import "./ProjectCard.css"

function ProjectCard({project, isFavorite}) {
    let {addFavorite, removeFavorite} = useContext(FavoritesContext)

    return (
        <div className="project-card">
            <img className="project-card-thumbnail" src={project.thumbnail} alt={project.name}></img>
            <h5 className="project-card-title">{project.name}</h5>
            <p className="project-card-description">
                {project.description}
            </p>
            <div style={{display: "flex"}}>
                <button className="">
                    <Link to={`${project.id}`}>Ver proyecto</Link>
                </button>
                <button onClick={() => {isFavorite ? removeFavorite(project) : addFavorite(project)}}>
                    {isFavorite ? <span style={{color: "black"}}>Quitar</span> : <span style={{color: "black"}}>Agregar</span>}
                </button>
            </div>
        </div>
    )
}

export default ProjectCard

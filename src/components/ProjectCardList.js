import { useContext, useState } from "react"
import { FavoritesContext } from "../FavoritesContext"
import ProjectCard from "./ProjectCard"

function ProjectCardList({projects}) {    
    const {favorites} = useContext(FavoritesContext)
    
    return (
        <div style={{display: "flex", flexWrap: "wrap"}}>
            {
                projects.map(project =>
                    <ProjectCard key={project.id} project={project} isFavorite={favorites.some(favorite => favorite.id === project.id)} />
                )
            }
        </div>
    )
}

export default ProjectCardList

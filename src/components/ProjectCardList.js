import { useContext, useState } from "react"
import { FavoritesContext } from "../FavoritesContext"
import ProjectCard from "./ProjectCard"

function ProjectCardList({projects}) {    
    const {favorites} = useContext(FavoritesContext)
    
    return (
        <div style={{display: "flex", flexWrap: "wrap"}}>
            {
                projects.map((project, i) =>
                    <ProjectCard key={i} project={project} isFavorite={favorites.includes(project)} />
                )
            }
        </div>
    )
}

export default ProjectCardList

import { useContext } from "react"
import { Link } from "react-router-dom"
import { FavoritesContext } from "../FavoritesContext"
import "./ProjectCard.css"
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

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
                    <Link to={`/projects/${project.id}`}>Ver proyecto</Link>
                </button>
                <button onClick={() => {isFavorite ? removeFavorite(project) : addFavorite(project)}}>
                    {isFavorite ? <span style={{color: "black"}}><FavoriteIcon /> Quitar</span> : <span style={{color: "black"}}><FavoriteBorderIcon /> Agregar</span>}
                </button>
            </div>
        </div>
    )
}

export default ProjectCard

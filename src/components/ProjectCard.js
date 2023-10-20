import { Link } from "react-router-dom"
import "./ProjectCard.css"

function ProjectCard({project}) {
    return (
        <div className="project-card">
            <img src={project.thumbnail} alt={project.name}></img>
            <h5 className="project-card-title">{project.name}</h5>
            <p className="project-card-description">
                {project.description}
            </p>
            <Link to={`${project.id}`} className="project-card-link">Ver proyecto</Link>
        </div>
    )
}

export default ProjectCard

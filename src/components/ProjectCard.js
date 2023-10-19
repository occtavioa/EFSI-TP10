import { Link } from "react-router-dom"

function ProjectCard({project}) {
    return (
        <div>
            <Link to={`${project.id}`}>
                <img src={project.thumbnail} alt={project.name}></img>
            </Link>
            <h5>{project.name}</h5>
            <p>
                {project.description}
            </p>
            {
                project.images.map((img, i) =>
                    <img key={i} alt="" src={img} />
                )
            }
        </div>
    )
}

export default ProjectCard

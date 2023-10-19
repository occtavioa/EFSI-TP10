import { useLoaderData } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import "./Projects.css"

function Projects() {
    const projects = useLoaderData()

    return (
        <div className="content">
            {
                projects.map((project, i) => 
                    <ProjectCard key={i} project={project} />
                )
            }
        </div>
    )
}

export default Projects;

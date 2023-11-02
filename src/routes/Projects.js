import { useLoaderData } from "react-router-dom";
import ProjectCardList from "../components/ProjectCardList";
import "./Projects.css"

function Projects() {
    const projects = useLoaderData()

    return (
        <div className="content">
            <ProjectCardList projects={projects} />
        </div>
    )
}

export default Projects;

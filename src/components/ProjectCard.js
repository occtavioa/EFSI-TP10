function ProjectCard({project}) {
    return (
        <div>
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

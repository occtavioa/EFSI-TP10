import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

function Detail({}) {
    const {id} = useParams()
    const project = useLoaderData().find((p) => p.id === parseInt(id))

    return (
        <div>
            <h2>Detalles del proyecto</h2>
            <img src={project.thumbnail} alt={project.name} />
            <p>{project.name}</p>
            <p>{project.description}</p>
            <Link to="/">Volver a la página de inicio</Link>
        </div>
    );
}

export default Detail;

import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import "./Detail.css"

function Detail() {
    const project = useLoaderData()

    return (
        <div className='detail'>
            <h2>Detalles del proyecto</h2>
            <img src={project.thumbnail} alt={project.name} />
            <p>{project.name}</p>
            <p>{project.description}</p>
            <Link to="/">Volver a la página de inicio</Link>
            {
                project.images.map((img, i) => 
                    <img key={i} src={img} alt={img}></img>
                )
            }
        </div>
    );
}

export default Detail;

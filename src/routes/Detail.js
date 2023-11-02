import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import "./Detail.css"

function Detail() {
    const project = useLoaderData()

    return (
        <div className="detail">
            <div className='detail-project'>
            <h2>Detalles del proyecto</h2>
            <img className='thumbnail' src={project.thumbnail} alt={project.name} />
            <p>{project.name}</p>
            <p>{project.description}</p>
            {
                project.images.map((img, i) => 
                <img key={i} src={img} alt={img}></img>
                )
            }
            <button>
                <Link to="/">Volver a la página de inicio</Link>
            </button>
            </div>
        </div>
    );
}

export default Detail;

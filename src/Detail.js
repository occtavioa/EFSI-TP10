import React from 'react';
import { Link } from 'react-router-dom';

function Detail(props) {
    const imageId = props.match.params.id;

    const images = [
        { id: 1, src: 'https://img.remediosdigitales.com/1ac517/mercedes-benz-amg_project_one_concept-2017-1024-02/1366_2000.jpg'},
        { id: 2, src: 'https://img.remediosdigitales.com/1ac517/mercedes-benz-amg_project_one_concept-2017-1024-02/1366_2000.jpg'},
        { id: 3, src: 'https://img.remediosdigitales.com/1ac517/mercedes-benz-amg_project_one_concept-2017-1024-02/1366_2000.jpg'},
        { id: 4, src: 'https://img.remediosdigitales.com/1ac517/mercedes-benz-amg_project_one_concept-2017-1024-02/1366_2000.jpg'},
        { id: 5, src: 'https://img.remediosdigitales.com/1ac517/mercedes-benz-amg_project_one_concept-2017-1024-02/1366_2000.jpg'},
        { id: 6, src: 'https://img.remediosdigitales.com/1ac517/mercedes-benz-amg_project_one_concept-2017-1024-02/1366_2000.jpg'},
        { id: 7, src: 'https://img.remediosdigitales.com/1ac517/mercedes-benz-amg_project_one_concept-2017-1024-02/1366_2000.jpg'},
        { id: 8, src: 'https://img.remediosdigitales.com/1ac517/mercedes-benz-amg_project_one_concept-2017-1024-02/1366_2000.jpg'},
        { id: 9, src: 'https://img.remediosdigitales.com/1ac517/mercedes-benz-amg_project_one_concept-2017-1024-02/1366_2000.jpg'},
        // Agrega más imágenes aquí
    ];

    const image = images.find(img => img.id === parseInt(imageId, 10));

    if (!image) {
        return <div>Imagen no encontrada</div>;
    }

    return (
        <div>
            <h2>Detalles de la Imagen</h2>
            <img src={image.src} alt={image.title} />
            <p>{image.title}</p>
            <p>{image.description}</p>
            <Link to="/">Volver a la página de inicio</Link>
        </div>
    );
}

export default Detail;

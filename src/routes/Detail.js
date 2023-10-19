import React from 'react';
import { Link } from 'react-router-dom';

function Detail(props) {
    const imageId = props.match.params.id;

    const images = [
        { id: 1, src: '/mosaico/PROYECTO 1.png'},
        { id: 2, src: '/mosaico/PROYECTO 2.png'},
        { id: 3, src: '/mosaico/PROYECTO 3.png'},
        { id: 4, src: '/mosaico/PROYECTO 4.png'},
        { id: 5, src: '/mosaico/PROYECTO 5.png'},
        { id: 6, src: '/mosaico/PROYECTO 6.png'},
        { id: 7, src: '/mosaico/PROYECTO 7.png'},
        { id: 8, src: '/mosaico/PROYECTO 8.png'},
        { id: 9, src: '/mosaico/PROYECTO 9.png'},
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

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
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


    return (
        <div>
            <div className="navbar">
                <div className="navbar-left">
                    <p>Portfolio</p>
                </div>
                <div className="navbar-right">
                    <a href="#">Home</a>
                    <a href="#">Proyectos</a>
                </div>
            </div>
            <div className="portfolio-content">
                <img src="https://static.vecteezy.com/system/resources/previews/002/275/818/original/female-avatar-woman-profile-icon-for-network-vector.jpg" alt="Avatar" />
                <h2>PORTFOLIO</h2>
                <div className="divider">
                    <hr className="line" />
                    <span className="star">★</span>
                    <hr className="line" />
                </div>
                <p className="small-text">Octavio Arfa - Luka Moscovich</p>
            </div>

            <div className="mosaic">
                {images.map(image => (
                    <Link key={image.id} to={`/projects/${image.id}`}>
                        <div className="mosaic-item">
                            <img src={image.src} alt={image.title} />
                            <p>{image.title}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Home;

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
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


    return (
        <div>
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

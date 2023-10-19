import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './Home.css';

function Home() {
    const projects = useLoaderData()

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
                {projects.map(project => (
                    <Link key={project.id} to={`/projects/${project.id}`}>
                        <div className="mosaic-item">
                            <img src={project.thumbnail} alt={project.name} />
                            <p>{project.name}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Home;

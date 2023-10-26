import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './Home.css';

function Home() {
    const projects = useLoaderData()

    return (
        <div style={{backgroundColor: '#82d8ab', paddingTop: ".5%", paddingBottom: ".5%"}}>
            <div className="portfolio-content">
                <img src="https://static.vecteezy.com/system/resources/previews/002/275/818/original/female-avatar-woman-profile-icon-for-network-vector.jpg" alt="Avatar" />
                <h2>PORTFOLIO</h2>
                <div style={{display: "flex"}}>
                    <div style={{borderBottom: "black solid 1px", margin: "auto", width: "25%"}}></div>
                    <span style={{margin: "auto"}}>★</span>
                    <div style={{borderBottom: "black solid 1px", margin: "auto", width: "25%"}}></div>
                </div>
                <p className="small-text">Octavio Arfa - Luka Moscovich</p>
            </div>

            <div className="mosaic">
                {projects.map(project => (
                    <Link key={project.id} to={`/projects/${project.id}`}>
                        <div className="mosaic-item">
                            <img src={project.thumbnail} alt={project.name} />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Home;

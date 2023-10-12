import React from 'react';
import './Home.css'; 

function Home() {
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
            </div>
        </div>
    );
}

export default Home;

import './Navbar.css';

function Navbar() {
    return (
        <div className="navbar">
        <div className="navbar-left">
            <p>Portfolio</p>
        </div>
        <div className="navbar-right">
    <a href="/">Home</a>
    <a href="/projects">Proyectos</a>
    <a href="/info">Info</a>
</div>
    </div>
    )
}

export default Navbar

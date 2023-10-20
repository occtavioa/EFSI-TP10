import { Link } from "react-router-dom"

function Navbar() {
    return (
        <div className="navbar">
        <div className="navbar-left">
            <p>Portfolio</p>
        </div>
        <div className="navbar-right">
            <Link to={"/"} preventScrollReset={false}>Home</Link>
            <Link to={"/projects"} preventScrollReset={false}>Proyectos</Link>
        </div>
    </div>
    )
}

export default Navbar

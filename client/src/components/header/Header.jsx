import { Link } from "react-router";

export default function Header() {
    return(
        <div className="container-fluid nav-bar">
            <div className="container">
                <nav className="navbar navbar-light navbar-expand-lg py-4">
                    <a href="index.html" className="navbar-brand">
                        <h1 className="text-primary fw-bold mb-0">Your<span className="text-dark">Taste</span> </h1>
                    </a>
                    <button className="navbar-toggler py-2 px-3 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-expanded="false">
                        <span className="fa fa-bars text-primary"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav mx-auto">
                            <Link to="/" className="nav-item nav-link active">Home</Link>
                            <Link to="/recipes" className="nav-item nav-link">Recipes</Link>
                            <Link to="/recipes/create" className="nav-item nav-link">Add recipes</Link>
                            <Link to="/register" className="nav-item nav-link">Register</Link>
                            <Link to="/login" className="nav-item nav-link">Login</Link>
                            <Link to="/logout" className="nav-item nav-link">Logout</Link>
                            <a href="contact.html" className="nav-item nav-link">Contact</a>
                        </div>
                        <button className="btn-search btn btn-primary btn-md-square me-4 rounded-circle d-none d-lg-inline-flex" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fas fa-search"></i></button>
                        <a href="" className="btn btn-primary py-2 px-4 d-none d-xl-inline-block rounded-pill">Book Now</a>
                    </div>
                </nav>
            </div>
        </div>
    )
}
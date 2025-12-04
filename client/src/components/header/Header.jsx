import { Link, NavLink } from "react-router";
import { useUserContext } from "../../contexts/UserContext";

export default function Header() {
    const { isAuthenticated } = useUserContext();

    return (
        <div className="container-fluid nav-bar">
            <div className="container">
                <nav className="navbar navbar-light navbar-expand-lg py-4">
                    <NavLink to="/" className="navbar-brand">
                        <h1 className="text-primary fw-bold mb-0">Your<span className="text-dark">Taste</span> </h1>
                    </NavLink>
                    <button className="navbar-toggler py-2 px-3 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-expanded="false">
                        <span className="fa fa-bars text-primary"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav mx-auto">
                            <NavLink to="/" className="nav-item nav-link">Home</NavLink>
                            <NavLink to="/recipes" className="nav-item nav-link">Recipes</NavLink>

                            {isAuthenticated ? (
                                <>
                                    <NavLink to="/recipes/create" className="nav-item nav-link">Add recipes</NavLink>
                                    <NavLink to="/logout" className="nav-item nav-link">Logout</NavLink>
                                </>
                            ) : (
                                <>
                                    <NavLink to="/register" className="nav-item nav-link">Register</NavLink>
                                    <NavLink to="/login" className="nav-item nav-link">Login</NavLink>
                                </>
                            )}

                            {/* <a href="contact.html" className="nav-item nav-link">Contact</a> */}
                        </div>
                        <button className="btn-search btn btn-primary btn-md-square me-4 rounded-circle d-none d-lg-inline-flex" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fas fa-search"></i></button>
                        <a href="" className="btn btn-primary py-2 px-4 d-none d-xl-inline-block rounded-pill">Book Now</a>
                    </div>
                </nav>
            </div>
        </div>
    )
}
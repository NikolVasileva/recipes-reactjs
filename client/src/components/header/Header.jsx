import { Link, NavLink } from "react-router";
import { useUserContext } from "../../contexts/UserContext";

export default function Header() {
    const { user, isAuthenticated } = useUserContext();

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
                        </div>
                    </div>
                    {isAuthenticated ? (
                        <>
                        <h3 className="text-primary fw-bold mb-0">Let's <span className="text-dark">cook, </span>{user.email} </h3>
                        </>
                    ) : (
                        <>
                        <h3 className="text-primary fw-bold mb-0">Let's <span className="text-dark">cook!</span> </h3>
                        </>
                    )}
                </nav>
            </div>
        </div>
    )
}
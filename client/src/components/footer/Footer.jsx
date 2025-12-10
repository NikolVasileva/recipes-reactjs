import { NavLink } from "react-router";

export default function Footer() {
    return (
        <div className="container text-center justify-content-center align-items-center">
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-10 text-center">
                    <div className="footer-item text-center">
                        <NavLink to="/">
                            <h1 className="text-primary fw-bold mb-0">Your<span className="text-dark">Taste</span> </h1>
                        </NavLink>
                        <p className="lh-lg mb-4">Explore YourTaste For Your Dream Dinner</p>
                        <p className="uppercase color-2 fs-text-16">© YourTaste 2025 - SoftUni ReactJS Final Project</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
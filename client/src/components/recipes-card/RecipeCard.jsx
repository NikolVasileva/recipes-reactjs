import { Link } from "react-router";

export default function RecipesCard({
    _id,
    title,
    imageUrl,
    servings,
    cookTime,
    difficulty


}) {
    return (
        <div className="col-lg-3 col-md-6 col-sm-12 wow bounceInUp" data-wow-delay="0.1s">
            <div className="bg-light rounded service-item">
                <div className="service-content d-flex align-items-center justify-content-center p-4">
                    <div className="service-content-icon text-center">
                        <img src={imageUrl || null} className="img-fluid rounded animated zoomIn fixed-img" alt={title} />
                        <h4 className="mb-3">{title}</h4>
                        <div className="d-flex align-items-center justify-content-center mb-3">
                            <i className="fas fa-utensils text-primary me-2"></i>
                            <span>{servings} servings</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-center mb-3">
                            <i className="fa fa-clock text-primary me-2"></i>
                            <span>{cookTime} mins</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-center mb-3">
                            <i className="fas fa-star text-primary me-2"></i>
                            <span>{difficulty}</span>
                        </div>

                        <Link to={`/recipes/${_id}/details`}className="btn btn-primary px-4 py-2 rounded-pill">Read More</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
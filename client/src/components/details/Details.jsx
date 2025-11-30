export default function Details() {
    return (
        <div className="container-fluid py-6">
            <div className="container">
                <div className="row g-5 align-items-center">

                    <div
                        className="col-lg-5 wow bounceInUp"
                        data-wow-delay="0.1s"
                        style={{ visibility: 'visible', animationDelay: '0.1s', animationName: 'bounceInUp' }}
                    >
                        <img src="img/about.jpg" className="img-fluid rounded" alt="Recipe" />
                    </div>

                    <div
                        className="col-lg-7 wow bounceInUp"
                        data-wow-delay="0.3s"
                        style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'bounceInUp' }}
                    >
                        <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">
                            About Recipe
                        </small>

                        <h1 className="display-5 mb-4">Recipe Title Here</h1>

                        <p className="mb-4">
                            This is a static recipe description. You can later replace it with dynamic data.
                        </p>

                        <div className="row g-4 text-dark mb-5">
                            <div className="col-sm-6">
                                <i className="fas fa-cheese text-primary me-2"></i>Ingredients: 4
                            </div>
                            <div className="col-sm-6">
                                <i className="fas fa-utensils text-primary me-2"></i>Servings: 4
                            </div>
                            <div className="col-sm-6">
                                <i className="fa fa-clock text-primary me-2"></i>Cooking time: Easy
                            </div>
                            <div className="col-sm-6">
                                <i className="fas fa-star text-primary me-2"></i>Difficulty: Easy
                            </div>
                        </div>
                        <a href="#" className="btn btn-primary py-3 px-5 rounded-pill me-3">
                            Edit <i className="fas fa-arrow-right ps-2"></i>
                        </a>
                        <a href="#" className="btn btn-primary py-3 px-5 rounded-pill">
                            Delete <i className="fas fa-arrow-right ps-2"></i>
                        </a>

                    </div>

                </div>
            </div>
        </div>
    );
}

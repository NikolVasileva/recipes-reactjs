export default function Recipes() {
    return(
        <div className="container-fluid service py-6">
            <div className="container">
                <div className="text-center wow bounceInUp" data-wow-delay="0.1s">
                    <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">Our Services</small>
                    <h1 className="display-5 mb-5">What We Offer</h1>
                </div>
                <div className="row g-4">
                    <div className="col-lg-3 col-md-6 col-sm-12 wow bounceInUp" data-wow-delay="0.1s">
                        <div className="bg-light rounded service-item">
                            <div className="service-content d-flex align-items-center justify-content-center p-4">
                                <div className="service-content-icon text-center">
                                <img src="img/hero.png" className="img-fluid rounded animated zoomIn" alt="Main image" />
                                    <h4 className="mb-3">Wedding Services</h4>
                                    <p className="mb-4">Contrary to popular belief, ipsum is not simply random.</p>
                                    <a href="#" className="btn btn-primary px-4 py-2 rounded-pill">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default function Home() {
    return(
        <div className="container-fluid bg-light py-6 my-6 mt-0">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-7 col-md-12">
                        <h1 className="display-1 mb-4 animated bounceInDown">Explore <span className="text-primary">Your</span>Taste For Your Dream Dinner Night</h1>
                        <a href="" className="btn btn-primary border-0 rounded-pill py-3 px-4 px-md-5 me-4 animated bounceInLeft">Book Now</a>
                        <a href="" className="btn btn-primary border-0 rounded-pill py-3 px-4 px-md-5 animated bounceInLeft">Know More</a>
                    </div>
                    <div className="col-lg-5 col-md-12">
                        <img src="img/hero.png" className="img-fluid rounded animated zoomIn" alt="Main image" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default function RecipesCard({
    _id,
    title,
    imageUrl,

}) {
    return(
        <div className="col-lg-3 col-md-6 col-sm-12 wow bounceInUp" data-wow-delay="0.1s">
        <div className="bg-light rounded service-item">
            <div className="service-content d-flex align-items-center justify-content-center p-4">
                <div className="service-content-icon text-center">
                <img src={imageUrl} className="img-fluid rounded animated zoomIn" alt="Main image" />
                    <h4 className="mb-3">{title}</h4>
                    <p className="mb-4">Contrary to popular belief, ipsum is not simply random.</p>
                    <a href="#" className="btn btn-primary px-4 py-2 rounded-pill">Read More</a>
                </div>
            </div>
        </div>
    </div>
    )
}
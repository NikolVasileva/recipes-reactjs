import useRequest from "../../hooks/useRequest.js"
import RecipesCard from "../recipes-card/RecipeCard.jsx"

export default function Home() {
    const { data: latestRecipes } = useRequest("/data/recipes?sortBy=_createdOn%20desc&pageSize=4", [])
    return(
        <div className="container-fluid bg-light py-6 my-6 mt-0">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-7 col-md-12">
                        <h1 className="display-1 mb-4 animated bounceInDown">Explore <span className="text-primary">Your</span>Taste For Your Dream Dinner</h1>
                    </div>
                    <div className="col-lg-5 col-md-12">
                        <img src="img/hero.png" className="img-fluid rounded animated zoomIn" alt="Main image" />
                    </div>
                </div>
            </div>
            <div className="container-fluid service py-6">
            <div className="container">
                <div className="text-center wow bounceInUp" data-wow-delay="0.1s">
                    <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">Must try</small>
                    <h1 className="display-5 mb-5">Explore the newest ones</h1>
                </div>
                <div className="row g-4">
                    {latestRecipes.length === 0 && <h3>Sorry, no added recipes yet!</h3>}
                    {latestRecipes.map(recipe => <RecipesCard key={recipe._id} {...recipe}/>)}
                </div>
            </div>
        </div>
        </div>
    )
}
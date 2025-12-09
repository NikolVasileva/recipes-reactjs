import { useEffect, useState } from "react"
import RecipeCard from "../recipes-card/RecipeCard.jsx"
import { toast } from "react-toastify"

export default function Recipes() {

    const[recipes, setRecipes] = useState([])

    useEffect(() => {
        fetch("http://localhost:3030/data/recipes")
        .then(response => response.json())
        .then(data => {
            setRecipes(Object.values(data))
        })
        .catch(err => toast.error(`${err.message}`))
    }, [])

    return(
        <div className="container-fluid service py-6">
            <div className="container">
                <div className="text-center wow bounceInUp" data-wow-delay="0.1s">
                    <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">Our ervices</small>
                    <h1 className="display-5 mb-5">Choose recipe</h1>
                </div>
                <div className="row g-4">
                    {recipes.length === 0 && <h3>Sorry, no added recipes yet!</h3>}
                    {recipes.map(recipe => <RecipeCard key={recipe._id} {...recipe}/>)}
                </div>
            </div>
        </div>
    )
}
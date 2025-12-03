// import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import useRequest from "../../hooks/useRequest";
import { useUserContext } from "../../contexts/UserContext";

export default function Details() {
    const navigate = useNavigate()
    const { recipeId } = useParams();
    // const [refresh, setRefresh] = useState(false)
    const { isAuthenticated } = useUserContext();
    // const [recipe, setRecipe] = useState({});

    const { data: recipe, request } = useRequest(`/data/recipes/${recipeId}`, {})

    // useEffect(() => {
    //     fetch(`http://localhost:3030/data/recipes/${recipeId}`)
    //         .then(response => response.json())
    //         .then(data => {
    //             setRecipe(data)
    //         })
    //         .catch(err => alert(err.message))
    // }, [recipeId])

    const deleteRecipeHandler = async() => {
        const isComfirmed = confirm("Are you sure you want delete this recipe?");

        if(!isComfirmed) {
            return
        }
        
        try {
            await request(`/data/recipes/${recipeId}`, "DELETE");
            // await fetch("/data/recipes/"`${recipeId}`, {
            //     method: 'DELETE',
            // });
            navigate("/recipes")

        } catch(err) {
            alert("You cannot delete this recipe!", err.message)
        }
    }

    // const refreshHandler = () => {
    //     setRefresh(state => !state)
    // }

    return (
        <div className="container-fluid py-6">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div
                        className="col-lg-5 wow bounceInUp"
                        data-wow-delay="0.1s"
                        style={{ visibility: 'visible', animationDelay: '0.1s', animationName: 'bounceInUp' }}
                    >
                        <img src={recipe.imageUrl} className="img-fluid rounded" alt={recipe.title} />
                    </div>

                    <div
                        className="col-lg-7 wow bounceInUp"
                        data-wow-delay="0.3s"
                        style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'bounceInUp' }}
                    >
                        <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">
                            About Recipe
                        </small>

                        <h1 className="display-5 mb-4">{recipe.title}</h1>
                        <p className="text-dark mb-4">
                            <i className="fas fa-tag text-primary me-2"></i>
                            Category: {recipe.category}
                        </p>

                        <p className="text-dark mb-4">
                            {recipe.description}
                        </p>

                        <div className="row g-4 text-dark mb-5">
                            <div className="col-sm-6">
                                <i className="fas fa-cheese text-primary me-2"></i>Ingredients: {recipe.ingredients.join(", ")}
                            </div>
                            <div className="col-sm-6">
                                <i className="fas fa-utensils text-primary me-2"></i>Servings: {recipe.servings}
                            </div>
                            <div className="col-sm-6">
                                <i className="fa fa-clock text-primary me-2"></i>Cooking time: {recipe.cookTime} min.
                            </div>
                            <div className="col-sm-6">
                                <i className="fas fa-star text-primary me-2"></i>Difficulty: {recipe.difficulty}
                            </div>
                        </div>
                        {isAuthenticated ? (
                            <div>
                             <Link to={`/recipes/${recipeId}/edit`} className="btn btn-primary py-3 px-5 rounded-pill">Edit <i className="fas fa-arrow-right ps-2"></i>
                             </Link>
                             <button className="btn btn-primary py-3 px-5 rounded-pill" onClick={deleteRecipeHandler}>
                                 Delete <i className="fas fa-arrow-right ps-2"></i>
                             </button>
                            </div>
                        ) : null }
        

                    </div>

                </div>
            </div>
        </div>
    );
}

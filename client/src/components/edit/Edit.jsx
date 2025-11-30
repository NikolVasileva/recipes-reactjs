import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router"

export default function Edit() {
    const navigate = useNavigate();
    const { recipeId } = useParams();
    const [values, setValues] = useState({})

    useEffect(() => {
        fetch(`http://localhost:3030/data/recipes/${recipeId}`)
        .then(response => response.json())
        .then(result => {
            setValues(result)
        })
        .catch(err => {
            alert(err.message)
        })
    }, [recipeId])

    return(        
    <div className="container-fluid py-6 wow bounceInUp" data-wow-delay="0.1s">
        <div className="container">
            <div className="p-5 bg-light rounded contact-form mx-auto" style={{ maxWidth: "800px" }}>
                <div className="text-center mb-4">
                    <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">
                        Edit Recipe
                    </small>
                    <h1 className="display-5 mb-0">Edit Recipe</h1>
                </div>
                <form>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label text-dark">Recipe Title</label>
                        <input
                            id="title"
                            type="text"
                            value={values.title}
                            className="w-100 form-control p-3 border-primary bg-light"
                            placeholder="Recipe Title"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="description" className="form-label text-dark">Recipe Description</label>
                        <textarea
                            id="description"
                            value={values.description}
                            className="w-100 form-control p-3 border-primary bg-light"
                            rows="4"
                            placeholder="Recipe Description"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="imageUrl" className="form-label text-dark">Image URL</label>
                        <input
                            id="imageUrl"
                            value={values.imageUrl}
                            type="text"
                            className="w-100 form-control p-3 border-primary bg-light"
                            placeholder="Image URL"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="ingredients" className="form-label text-dark">Ingredients</label>
                        <input
                            id="ingredients"
                            value={values.ingredients}
                            type="text"
                            className="w-100 form-control p-3 border-primary bg-light"
                            placeholder="Ingredients (comma separated)"
                        />
                    </div>

                    <div className="row g-3 mb-4">
                        <div className="col-md-4">
                            <label htmlFor="category" className="form-label text-dark">Category</label>
                            <input
                                id="category"
                                value={values.category}
                                type="text"
                                className="w-100 form-control p-3 border-primary bg-light"
                                placeholder="Category (e.g., Soups, Main, Dessert)"
                            />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="cookTime" className="form-label text-dark">Cook Time (min)</label>
                            <input
                                id="cookTime"
                                value={values.cookTime}
                                type="number"
                                className="w-100 form-control p-3 border-primary bg-light"
                                placeholder="Cook Time"
                            />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="servings" className="form-label text-dark">Servings</label>
                            <input
                                id="servings"
                                value={values.servings}
                                type="number"
                                className="w-100 form-control p-3 border-primary bg-light"
                                placeholder="Servings"
                            />
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="difficulty" className="form-label text-dark">Difficulty</label>
                        <input
                            id="difficulty"
                            value={values.difficulty}
                            type="text"
                            className="w-100 form-control p-3 border-primary bg-light"
                            placeholder="Difficulty (easy, medium, hard)"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-100 btn btn-primary p-3 border-primary bg-primary rounded-pill"
                    >
                        Add Recipe
                    </button>
                </form>
            </div>
        </div>
    </div>
    )
}
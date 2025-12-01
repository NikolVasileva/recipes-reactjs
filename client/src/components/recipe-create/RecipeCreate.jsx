import { useNavigate } from "react-router";
import useForm from "../../hooks/useForm";
import useRequest from "../../hooks/useRequest";

export default function RecipeCreate() {
    const navigate = useNavigate();
    const { request } = useRequest();

    const createRecipeHandler = async (values) => {
        const data = values

        try {
            await request("/data/recipes", "POST", data)
            navigate("/recipes");

        } catch(err) {
            alert(err.message)
        }
    }
    const { formAction } = useForm(createRecipeHandler, {
        title: "",
        description: "",
        imageUrl: "",
        ingredients: "",
        category: "",
        cookTime: "",
        servings: "",
        difficulty: ""
    })

    return (
        <div className="container-fluid py-6 wow bounceInUp" data-wow-delay="0.1s">
            <div className="container">
                <div className="p-5 bg-light rounded contact-form mx-auto" style={{ maxWidth: "800px" }}>
                    <div className="text-center mb-4">
                        <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">
                            Add New Recipe
                        </small>
                        <h1 className="display-5 mb-0">Create a Recipe</h1>
                    </div>
                    <form action={formAction}>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label text-dark">Recipe Title</label>
                            <input
                                id="title"
                                name="title"
                                type="text"
                                className="w-100 form-control p-3 border-primary bg-light"
                                placeholder="Recipe Title"
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="description" className="form-label text-dark">Recipe Description</label>
                            <textarea
                                id="description"
                                name="description"
                                className="w-100 form-control p-3 border-primary bg-light"
                                rows="4"
                                placeholder="Recipe Description"
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="imageUrl" className="form-label text-dark">Image URL</label>
                            <input
                                id="imageUrl"
                                name="imageUrl"
                                type="text"
                                className="w-100 form-control p-3 border-primary bg-light"
                                placeholder="Image URL"
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="ingredients" className="form-label text-dark">Ingredients</label>
                            <input
                                id="ingredients"
                                name="ingredients"
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
                                    name="category"
                                    type="text"
                                    className="w-100 form-control p-3 border-primary bg-light"
                                    placeholder="Category"
                                />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="cookTime" className="form-label text-dark">Cook Time (min)</label>
                                <input
                                    id="cookTime"
                                    name="cookTime"
                                    type="number"
                                    className="w-100 form-control p-3 border-primary bg-light"
                                    placeholder="Cook Time"
                                />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="servings" className="form-label text-dark">Servings</label>
                                <input
                                    id="servings"
                                    name="servings"
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
                                name="difficulty"
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
    );
}

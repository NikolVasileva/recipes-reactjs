import { Route, Routes } from "react-router"
import Header from "./components/header/Header.jsx"
import Home from "./components/home/Home.jsx"
import Recipes from "./components/recipes/Recipes.jsx"
import Footer from "./components/footer/Footer.jsx"
import Details from "./components/details/Details.jsx"
import Login from "./components/login/Login.jsx"
import Register from "./components/register/Register.jsx"
import RecipeCreate from "./components/recipe-create/RecipeCreate.jsx"
import Edit from "./components/edit/Edit.jsx"
import Logout from "./components/logout/Logout.jsx"
import { UserProvider } from "./contexts/UserContext.jsx"
import { ToastContainer } from "react-toastify"


function App() {
  return (
    <UserProvider>
      <Header/>

      <ToastContainer />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/create" element={<RecipeCreate />} />
        <Route path="/recipes/:recipeId/details" element={<Details/>} />
        <Route path="/recipes/:recipeId/edit" element={<Edit />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
      <Footer />
    </UserProvider>
  )
}

export default App

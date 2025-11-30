import { Route, Routes } from "react-router"
import Header from "./components/header/Header.jsx"
import Home from "./components/home/Home.jsx"
import Recipes from "./components/Recipes/Recipes.jsx"
import Footer from "./components/footer/Footer.jsx"
import Details from "./components/details/Details.jsx"
import Login from "./components/login/Login.jsx"
import Register from "./components/register/Register.jsx"

function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:recipeId/details" element={<Details />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App

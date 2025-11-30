import { Route, Routes } from "react-router"
import Header from "./components/header/Header.jsx"
import Home from "./components/home/Home.jsx"
import Recipes from "./components/Recipes/Recipes.jsx"
import Footer from "./components/footer/Footer.jsx"
import Details from "./components/details/Details.jsx"
import Login from "./components/login/Login.jsx"
import Register from "./components/register/Register.jsx"
import RecipeCreate from "./components/recipe-create/RecipeCreate.jsx"
import Edit from "./components/edit/Edit.jsx"
import { useState } from "react"

function App() {
  const [user, setUser] = useState();

  const registerHandler = async (email, password) => {
    const newUser = { email, password };

    // Register API call 
    const response = await fetch('http://localhost:3030/users/register', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newUser),
    });

    const result = await response.json();

    console.log(result);

    // Login user after register
    setUser(newUser);
    setUser(result);
  }
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/create" element={<RecipeCreate />} />
        <Route path="/recipes/:recipeId/details" element={<Details />} />
        <Route path="/recipes/:recipeId/edit" element={<Edit />} />
        <Route path="/register" element={<Register onRegister={registerHandler} />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App

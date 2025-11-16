import { Route, Routes } from "react-router"
import Header from "./components/header/Header.jsx"
import Home from "./components/home/Home.jsx"
import Recipes from "./components/Recipes/Recipes.jsx"
import Footer from "./components/footer/Footer.jsx"

function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App

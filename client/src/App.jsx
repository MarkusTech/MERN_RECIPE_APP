import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import CreateRecipe from "./pages/CreateRecipe";
import SaveRecipes from "./pages/SaveRecipes";
import NavBar from "./component/NavBar";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/create-recipe" element={<CreateRecipe />} />
            <Route path="/save-recipes" element={<SaveRecipes />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;

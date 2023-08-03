import React from "react";
import { Link, useNavigate } from "react-router-dom";
// to see the access token
import { useCookies } from "react-cookie";

function NavBar() {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.clear();
    navigate("/auth");
  };

  return (
    <div className="navbar">
      <Link to="/"> Home</Link>
      <Link to="/create-recipe"> Create Recipe</Link>
      <Link to="/save-recipes"> Save Recipes</Link>
      {!cookies.access_token ? (
        <Link to="/auth">Login/Register</Link>
      ) : (
        <button onClick={logout}> Logout </button>
      )}
    </div>
  );
}

export default NavBar;

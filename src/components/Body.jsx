import Shimmer from "./Shimmer";
import "./style.css";
import { useState, useEffect } from "react";

const Body = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("https://dummyjson.com/recipes");

    const data = await response.json();
    setRecipes(data?.recipes);
    console.log(data);
  };

  if (recipes.length === 0) {
    return <Shimmer />;
  }
  return (
    <>
      <div className="search-food">
        <button
          className="filter-btn"
          onClick={() => {
            setRecipes(recipes.filter((res) => res.rating > 4.6));
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="cards-container">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="card">
            <h3>{recipe.name}</h3>
            <img src={recipe.image} className="food-img" />
            <p>⭐ {recipe.rating}</p>

            <button className="buy-btn">Buy Item</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Body;

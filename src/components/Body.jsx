import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Body = () => {
  const [recipes, setRecipes] = useState([]);
  const [allRecipes, setAllRecipes] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("https://dummyjson.com/recipes");
    const data = await response.json();
    setRecipes(data.recipes);
    setAllRecipes(data.recipes);
  };

  const handleSearch = () => {
    const filteredRecipes = allRecipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(searchText.toLowerCase()),
    );
    setRecipes(filteredRecipes);
  };

  return recipes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="mx-auto max-w-7xl p-4">
      {/* Search */}
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <input
          type="text"
          placeholder="Search for food..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="rounded border border-gray-300 px-4 py-2"
        />

        <button
          onClick={handleSearch}
          className="rounded bg-orange-500 px-4 py-2 text-white hover:bg-orange-600"
        >
          Search
        </button>

        <button
          onClick={() =>
            setRecipes(allRecipes.filter((recipe) => recipe.rating > 4.6))
          }
          className="rounded border border-gray-300 px-4 py-2 hover:bg-gray-100"
        >
          Top Rated
        </button>

        <button
          onClick={() => {
            setRecipes(allRecipes);
            setSearchText("");
          }}
          className="rounded border border-gray-300 px-4 py-2 hover:bg-gray-100"
        >
          Reset
        </button>
      </div>

      {/* Recipe Cards */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="rounded-lg border border-gray-200 p-3"
          >
            <Link to={`/restaurantmenu/${recipe.id}`}>
              <img
                src={recipe.image}
                alt={recipe.name}
                className="h-44 w-full rounded object-cover"
              />

              <h3 className="mt-3 font-semibold">{recipe.name}</h3>

              <p className="mt-1 text-sm text-gray-600">⭐ {recipe.rating}</p>
            </Link>

            <button className="mt-3 w-full rounded bg-orange-500 px-3 py-2 text-white hover:bg-orange-600">
              Buy Item
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;

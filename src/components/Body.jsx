import "./style.css";
import { useState } from "react";
import restlist from "../utils/MockData";
const Body = () => {
  const [restaurants, setRestaurants] = useState(restlist);

  return (
    <>
      <div className="search-food">
        <button
          className="filter-btn"
          onClick={() => {
            // Data Filter Logic
            setRestaurants(restaurants.filter((res) => res.rating > 4));
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="cards-container">
        {restaurants.map((restaurant) => (
          <div className="card" key={restaurant.id}>
            <img
              src={restaurant.image}
              alt={restaurant.name}
              className="food-img"
            />

            <h3>{restaurant.name}</h3>
            <p>{restaurant.cuisines.join(", ")}</p>
            <p>⭐ {restaurant.rating}</p>
            <p>Price: {restaurant.price}</p>
            <button className="buy-btn">Buy Item</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Body;

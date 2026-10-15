import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

function RestaurantMenu() {
  const { id } = useParams();
  const [restMenu, setRestMenu] = useState(null);

  useEffect(() => {
    async function fetchMenu() {
      setRestMenu(null);

      const response = await fetch(`https://dummyjson.com/recipes/${id}`);

      const data = await response.json();
      setRestMenu(data);
    }

    fetchMenu();
  }, [id]);

  if (restMenu === null) {
    return <Shimmer />;
  }

  return (
    <div className="resmenu">
      <h1>Foodmenia Menu</h1>

      <h2>{restMenu.name}</h2>

      <img src={restMenu.image} alt={restMenu.name} width="200" />

      <h3>Ingredients</h3>

      {restMenu.ingredients.map((item, index) => (
        <p key={index}>{item}</p>
      ))}

      <h3>Instructions</h3>

      {restMenu.instructions.map((step, index) => (
        <p key={index}>
          {index + 1}. {step}
        </p>
      ))}
    </div>
  );
}

export default RestaurantMenu;

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
    <div className="mx-auto max-w-4xl p-6">
      <h1 className="mb-6 text-2xl font-bold text-orange-500">
        Foodmenia Menu
      </h1>

      <div className="rounded-lg border border-gray-200 p-5">
        <img
          src={restMenu.image}
          alt={restMenu.name}
          className="mb-4 h-64 w-full rounded object-cover sm:w-96"
        />

        <h2 className="mb-3 text-2xl font-bold text-gray-800">
          {restMenu.name}
        </h2>

        <p className="mb-6 text-gray-600">
          ⭐ {restMenu.rating} · {restMenu.cuisine}
        </p>

        <h3 className="mb-3 text-xl font-semibold text-orange-500">
          Ingredients
        </h3>

        <ul className="mb-6 list-disc space-y-2 pl-6 text-gray-600">
          {restMenu.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h3 className="mb-3 text-xl font-semibold text-orange-500">
          Instructions
        </h3>

        <ol className="list-decimal space-y-3 pl-6 text-gray-600">
          {restMenu.instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default RestaurantMenu;

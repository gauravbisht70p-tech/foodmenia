const About = () => {
  return (
    <div className="mx-auto max-w-4xl p-6">
      <h1 className="mb-4 text-3xl font-bold text-orange-500">
        🍔 Discover. Explore. Enjoy.
      </h1>

      <p className="mb-6 leading-7 text-gray-600">
        Foodmenia is a React-based food discovery application built to explore
        recipes through a simple, user-friendly interface.
      </p>

      <div className="mb-6 rounded-lg border border-gray-200 p-5">
        <h2 className="mb-3 text-xl font-semibold text-gray-800">Features</h2>

        <ul className="space-y-2 text-gray-600">
          <li>🔍 Search for food</li>
          <li>⭐ Filter top-rated recipes</li>
          <li>📱 Clean and simple UI</li>
          <li>🍴 Browse recipe cards</li>
        </ul>
      </div>

      <div className="mb-6 rounded-lg border border-gray-200 p-5">
        <h2 className="mb-3 text-xl font-semibold text-gray-800">Built With</h2>

        <p className="text-gray-600">
          React.js · JavaScript · Vite · Tailwind CSS · React Router
        </p>
      </div>

      <div className="rounded-lg border border-gray-200 p-5">
        <h2 className="mb-3 text-xl font-semibold text-gray-800">
          About the Developer
        </h2>

        <p className="leading-7 text-gray-600">
          Foodmenia is developed by Gaurav as a React.js learning project to
          practice modern frontend development.{" "}
          <span className="text-red-500">♥</span>
        </p>
      </div>
    </div>
  );
};

export default About;

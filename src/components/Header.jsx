import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [islogin, setLogin] = useState(false);

  return (
    <div className="flex items-center justify-between p-4 shadow-md mb-6">
      <img src={LOGO_URL} alt="logo" className="w-26 rounded-full" />

      <ul className="flex items-center gap-6  ">
        <li className="text-xl hover:text-orange-500">
          <Link to="/">Home</Link>
        </li>
        <li className="text-xl hover:text-orange-500">
          <Link to="/about">About</Link>
        </li>
        <li className="text-xl text-xl hover:text-orange-500">
          <Link to="/contact">Contact</Link>
        </li>
        <li >🛒</li>
        <li>
          <button
            className="rounded bg-orange-500 px-4 py-2 text-white"
            onClick={() => setLogin(!islogin)}
          >
            {islogin ? "Login" : "Sign Up"}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header;

import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import "./style.css";
const Header = () => {
  const [islogin, setLogin] = useState(false);
  console.log(islogin);
  return (
    <>
      <div className="navbar">
        <img src={LOGO_URL} alt="logo" className="logo" />

        <ul className="items">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>🛒</li>
          {islogin ? (
            <button
              className="login-btn"
              onClick={() => {
                setLogin(!islogin);
              }}
            >
              Login
            </button>
          ) : (
            <button
              className="login-btn"
              onClick={() => {
                setLogin(!islogin);
              }}
            >
              SignUp
            </button>
          )}
        </ul>
      </div>
    </>
  );
};

export default Header;

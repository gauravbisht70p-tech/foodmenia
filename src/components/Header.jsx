import { LOGO_URL } from "../utils/constants";
import "./style.css";
const Header = () => {
  return (
    <>
      <div className="navbar">
        <img src={LOGO_URL} alt="logo" className="logo" />

        <ul className="items">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>🛒</li>
        </ul>
      </div>
    </>
  );
};

export default Header;

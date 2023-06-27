import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <h1>Meal DB</h1>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About Us</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;

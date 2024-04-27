import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between p-4 bg-orange-600">
      <h1 className="font-bold">Meal DB</h1>
      <ul className="flex gap-10">
        <li>Online Staus: {onlineStatus ? "✅" : "🔴"}</li>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About Us</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact Us</Link>
        </li>
        <li>
          <Link to={"/address"}>Addrss</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;

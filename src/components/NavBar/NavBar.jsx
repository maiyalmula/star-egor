import { NavLink } from "react-router-dom";
import "./styles.css";

const NavBar = () => {
  return (
    <div className="navBar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/people/?page=1">People</NavLink>
      <a href="">Search</a>
      <a href="">Not Found</a>
      <a href="">Fail</a>
    </div>
  );
};

export default NavBar;

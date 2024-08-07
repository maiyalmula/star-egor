import "./styles.css";
import img from "./img/404.png";
import { useLocation } from "react-router-dom";

const NotFoundPage = () => {
  let location = useLocation();

  return (
    <div className="notFound">
      <img src={img} alt="Not found" />
      <p className="text">No match for {location.pathname}</p>
    </div>
  );
};

export default NotFoundPage;

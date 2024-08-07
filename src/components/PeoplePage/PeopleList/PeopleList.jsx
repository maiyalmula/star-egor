import { Link } from "react-router-dom";
import "./PeopleList.css";
import PersonPage from "../../../containers/PersonPage/PersonPage";

const PeopleLIst = ({ people }) => {
  return (
    <div>
      <ul className="list__container">
        {people.map(({ id, name, img }) => (
          <li className="list__item" key={id}>
            <Link to={`/people/${id}`} element={<PersonPage />}>
              <img className="person__photo" src={img} alt={name} />
              <p>{name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PeopleLIst;

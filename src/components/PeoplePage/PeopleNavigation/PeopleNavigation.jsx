import { Link } from "react-router-dom";
import "./PeopleNavigation.css";
const PeopleNavigation = ({ getResource, prevPage, nextPage, counterPage }) => {
  const handleChangeNext = () => getResource(nextPage);
  const handleChangePrev = () => getResource(prevPage);

  return (
    <div>
      <Link className="link" to={`/people/?page=${counterPage - 1}`}>
        <button disabled={!prevPage} onClick={handleChangePrev}>
          Previous
        </button>
      </Link>

      <Link className="link" to={`/people/?page=${counterPage + 1}`}>
        <button disabled={!nextPage} onClick={handleChangeNext}>
          Next
        </button>
      </Link>
    </div>
  );
};

export default PeopleNavigation;

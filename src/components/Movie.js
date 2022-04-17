import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, large_cover_image, title, year, genres, summary }) {
  return (
    <div>
      <div>
        <img src={large_cover_image} alt="" />
      </div>
      <Link to={`/movie/${id}`}>{title}</Link>
      <div>{year}</div>
      <div>
        {genres.map((g) => (
          <div key={g}>
            <div>{g}</div>
          </div>
        ))}
      </div>
      <div>{summary}</div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  large_cover_image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  summary: PropTypes.string.isRequired,
};

export default Movie;

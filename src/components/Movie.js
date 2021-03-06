import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ index, id, large_cover_image, title, year, genres, summary }) {
  return (
    <div className="movie">
      <div className="num">{index + 1}</div>
      <div className="img">
        <Link to={`/movie/${id}`}>
          <img src={large_cover_image} alt="" />
        </Link>
        <div className="text_wrap">
          <div className="title">{title}</div>
          <div className="year">{year}</div>
          <div className="genre">
            {genres.map((g) => (
              <div key={g}>
                <div>{g}</div>
              </div>
            ))}
          </div>
          <div className="desc">{summary}</div>
        </div>
      </div>
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

import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  async function getMovies() {
    const respon = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=6&sort_by=like_count"
      )
    ).json();
    setMovies(respon.data.movies);
    setLoading(false);
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <div>{loading ? "LOADING~~~~~~~" : null}</div>
      <div>
        {movies.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            large_cover_image={movie.large_cover_image}
            title={movie.title}
            year={movie.year}
            genres={movie.genres}
            summary={movie.summary}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;

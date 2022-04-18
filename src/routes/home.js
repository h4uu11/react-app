import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/movie.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  async function getMovies() {
    const respon = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=7&sort_by=like_count"
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
      {loading ? <div className="loading">LOADING~~~~~~~</div> : null}
      <div className="con">
        <div className="title">Today's top 10 movies</div>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={4}
          speed={1500}
          slidesPerGroup={4}
          navigation={true}
          pagination={{ clickable: true }}
          className="movies"
        >
          {movies.map((movie, index) => (
            <SwiperSlide key={movie.id}>
              <Movie
                index={index}
                id={movie.id}
                large_cover_image={movie.large_cover_image}
                title={movie.title}
                year={movie.year}
                genres={movie.genres}
                summary={movie.summary}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Home;

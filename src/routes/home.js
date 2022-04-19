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
  const [movies_1, setMovies_1] = useState([]);
  const [movies_2, setMovies_2] = useState([]);
  const [movies_3, setMovies_3] = useState([]);
  const [movies_4, setMovies_4] = useState([]);

  async function getMovies1() {
    const respon = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=like_count"
      )
    ).json();
    setMovies_1(respon.data.movies);
    setLoading(false);
  }
  async function getMovies2() {
    const respon = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=5&genre=Comedy&sort_by=like_count"
      )
    ).json();
    setMovies_2(respon.data.movies);
    setLoading(false);
  }
  async function getMovies3() {
    const respon = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=5&genre=Fantasy&sort_by=like_count"
      )
    ).json();
    setMovies_3(respon.data.movies);
    setLoading(false);
  }
  async function getMovies4() {
    const respon = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=8&genre=Animation&sort_by=like_count"
      )
    ).json();
    setMovies_4(respon.data.movies);
    setLoading(false);
  }
  useEffect(() => {
    getMovies1();
    getMovies2();
    getMovies3();
    getMovies4();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="loading">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enableBackground="new 0 0 24 24"
            viewBox="0 0 24 24"
          >
            <g>
              <rect fill="none" height="24" width="24" />
            </g>
            <g>
              <path d="M6,2l0.01,6L10,12l-3.99,4.01L6,22h12v-6l-4-4l4-3.99V2H6z M16,16.5V20H8v-3.5l4-4L16,16.5z" />
            </g>
          </svg>
        </div>
      ) : null}
      <div className="con">
        <div className="title">Popular</div>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={10}
          slidesPerView={6}
          speed={1500}
          slidesPerGroup={6}
          navigation={true}
          pagination={{ clickable: true }}
          className="movies"
        >
          {movies_2.map((movie, index) => (
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
      <div className="con rank">
        <div className="title">Top 20 Movies of the Year</div>
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
          {movies_1.map((movie, index) => (
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
      <div className="con">
        <div className="title">Fantasy</div>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={10}
          slidesPerView={6}
          speed={1500}
          slidesPerGroup={6}
          navigation={true}
          pagination={{ clickable: true }}
          className="movies"
        >
          {movies_3.map((movie, index) => (
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
      <div className="con">
        <div className="title">Animation</div>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={10}
          slidesPerView={6}
          speed={1500}
          slidesPerGroup={6}
          navigation={true}
          pagination={{ clickable: true }}
          className="movies"
        >
          {movies_4.map((movie, index) => (
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

import { useState, useEffect } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import MovieSearch from "./components/MovieSearch";
import { MovieProvider } from "./context/MovieProvider";
import Footer from "./components/Footer";

function App() {
  const [movieHot, setMovieHot] = useState([]);
  const [movieRate, setMovieRate] = useState([]);
  const [movieSearch, setMovieSearch] = useState([]);

  const handleSearch = async (value) => {
    try {
      const url = `https://api.themoviedb.org/3/search/movie?query=${value}&include_adult=false&language=vi&page=1`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };
      const searchMovie = await fetch(url, options);
      const data = await searchMovie.json();
      setMovieSearch(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fechMovie = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };
      const url1 =
        "https://api.themoviedb.org/3/movie/popular?language=vi&page=1";
      const url2 =
        "https://api.themoviedb.org/3/movie/top_rated?language=vi&page=1";
      const [res1, res2] = await Promise.all([
        fetch(url1, options),
        fetch(url2, options),
      ]);
      const data1 = await res1.json();
      const data2 = await res2.json();
      setMovieHot(data1.results);
      setMovieRate(data2.results);
    };
    fechMovie();
  }, []);
  return (
    <>
      <MovieProvider>
        <div className="bg-black ">
          <Header onSearch={handleSearch} />
          <Banner />
          {movieSearch && movieSearch.length > 0 ? (
            <MovieSearch title={"Kết quả tìm kiếm"} data={movieSearch} />
          ) : (
            <>
              <MovieList title={"Phim hot"} data={movieHot} />
              <MovieList title={"Phim top"} data={movieRate} />
            </>
          )}
          <Footer />
        </div>
      </MovieProvider>
    </>
  );
}

export default App;

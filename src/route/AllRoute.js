import { Routes, Route } from "react-router-dom";
import { MovieList, MovieDetail, Search, SearchNotFound } from "../pages";


const AllRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MovieList api="movie/now_playing" />} />
        <Route path="movies/:id" element={<MovieDetail />} />
        <Route
          path="movies/popular"
          element={<MovieList api="movie/popular" />}
        />
        <Route
          path="movies/top"
          element={<MovieList api="movie/top_rated" />}
        />
        <Route
          path="movies/upcoming"
          element={<MovieList api="movie/upcoming" />}
        />
        <Route path="movies/top" element={<MovieList />} />
        <Route path="search" element={<Search />} />
        <Route path="*" element={<SearchNotFound />} />
      </Routes>
    </>
  );
}

export default AllRoute
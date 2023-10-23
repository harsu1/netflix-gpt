import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SeconderyContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black">
      <div className=" mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20  ">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"TopRated"} movies={movies.TopRatedMovies} />
          <MovieList title={"Popular"} movies={movies.PopularMovies} />
          <MovieList
            title={"Upcoming Movies"}
            movies={movies.UpcomingMovies}
          />
          <MovieList title={"Horror"} movies={movies.addNowPlayingMovies} />
        </div>
    </div>
  );
};
export default SeconderyContainer;

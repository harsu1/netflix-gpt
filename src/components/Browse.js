 import useNowPlayingMovies from "../hooks/useNowPlayinMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SeconderyContainer from "./SecondaryContainer";
 
const Browse = () => {
  
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();
  return (
    <div>
      <Header />
      <MainContainer/>
      <SeconderyContainer/>
    </div>
  );
};
export default Browse;

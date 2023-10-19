 import useNowPlayingMovies from "../hooks/useNowPlayinMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SeconderyContainer from "./SecondaryContainer";
 
const Browse = () => {
  
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer/>
      <SeconderyContainer/>
    </div>
  );
};
export default Browse;

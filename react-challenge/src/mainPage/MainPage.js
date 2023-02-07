import LeftNavbar from "../leftNavbar/LeftNavbar";
import MovieList from "../movieList/MovieList";
import "./MainPage.css";
const MainPage = () => {
  return (
    <div className="mainPage">
      <LeftNavbar />
      <MovieList />
    </div>
  );
};
export default MainPage;

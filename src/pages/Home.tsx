import Authors from "../components/Home/Authors";
import BestBooks from "../components/Home/BestBooks";
import Deals from "../components/Home/Deals";
import Featured from "../components/Home/Featured";
import FeaturedBooks from "../components/Home/FeaturedBooks";
import Hero from "../components/Home/Hero";
import NewsLetter from "../components/Home/NewLetter";
const Home = () => {
  return (
    <div>
      <Hero />
      <Featured />
      <BestBooks />
      <div className=" pb-24 ">
        <FeaturedBooks />
      </div>
      <Deals />
      <Authors />
      <NewsLetter />
    </div>
  );
};

export default Home;

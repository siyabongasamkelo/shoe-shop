import Home from "../Home/Home";
import Mens from "../Home/Men";
import Men from "../Home/Newest";
import Womans from "../Home/Woman";
import Kids from "../Home/Kids";
import Sponsors from "../Home/Sponsors";
import Footer from "../Components/Footer";
const HomePage = () => {
  return (
    <div>
      <Home />
      <Men />
      <Womans />
      <Mens />
      <Kids />
      <Sponsors />
      <Footer />
    </div>
  );
};

export default HomePage;

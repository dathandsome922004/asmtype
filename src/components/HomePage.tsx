import Header from "./HomePage/Header";
import Banner from "./HomePage/Banner";
import Main from "./HomePage/Main";
import FooterAbout from "./HomePage/FooterAbout";
import FooterAddress from "./HomePage/FooterAddress";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Main />
      <br />
      <FooterAbout />
      <FooterAddress />
    </div>
  );
};

export default HomePage;

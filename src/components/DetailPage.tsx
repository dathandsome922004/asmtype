import Header from "./HomePage/Header";
import BannerDetail from "./DetailPage/Banner";
import Arrange from "./DetailPage/Arrange";
import Travel1 from "./DetailPage/Travel1";
import Travel2 from "./DetailPage/Travel2";
import Travel3 from "./DetailPage/Travel3";
import FooterAbout from "./HomePage/FooterAbout";
import FooterAddress from "./HomePage/FooterAddress";

const DetailPage = () => {
  return (
    <div>
      <div className="bg-[#F2F2F2]">
        <Header />
        <br />
        <BannerDetail />
        <br />
        <div className="flex gap-8 justify-start mx-auto max-w-[1200px] ">
          <Arrange />
          <div>
            <Travel1 />
            <br />
            <Travel2 />
            <br />
            <Travel3 />
          </div>
        </div>
        <FooterAbout />
      </div>
      <FooterAddress />
    </div>
  );
};

export default DetailPage;

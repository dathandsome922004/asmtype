import ButtonMenu from "./ButtonMenu";
import LogoHeader from "./LogoHeader";
import NavMenu from "./NavMenu";

const Header = () => {
  return (
    <>
      <header>
        <div className="flex justify-between items-center bg-[#2474E5] py-4 px-5">
          <LogoHeader />
          <div className="flex items-center">
            <NavMenu />
            <ButtonMenu />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

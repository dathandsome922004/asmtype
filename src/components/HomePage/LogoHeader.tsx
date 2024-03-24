import { Link } from "react-router-dom";

const LogoHeader = () => {
  return (
    <Link to={`/`}>
      <img src="../image/logo.png" alt="" />
    </Link>
  );
};

export default LogoHeader;

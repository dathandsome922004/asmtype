import { Link } from "react-router-dom";

const TravelOne = () => {
  return (
    <div>
      <li className="item-carousel rounded max-w-[233px] overflow-hidden">
        <img
          src="../image/img1.png"
          alt="#"
          className="min-w-full object-cover"
        />
        <div className="info-item-carousel text-white p-3 bg-[#9E947C] min-w-full">
          <Link to="/detail">Sài Gòn - Nha Trang</Link>
          <p className="mb-5">
            Từ <span className="px-1">200.000đ</span>
            <span className="text-gray-300 text-opacity-60 line-through">
              250.000đ
            </span>
          </p>
        </div>
      </li>
    </div>
  );
};

export default TravelOne;

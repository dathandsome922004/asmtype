import { Link } from "react-router-dom";

const TravelTwo = () => {
  return (
    <div>
      <li className="item-carousel rounded max-w-[233px] overflow-hidden">
        <img
          src="../image/img2.png"
          alt="#"
          className="min-w-full object-cover"
        />
        <div className="info-item-carousel text-white p-3 bg-[#585279] min-w-full">
          <Link to="/detail">Hà Nội - Hải Phòng</Link>
          <p className="mb-5">
            Từ <span className="px-1">80.000đ</span>
            <span className="text-gray-300 text-opacity-60 line-through">
              110.000đ
            </span>
          </p>
        </div>
      </li>
    </div>
  );
};

export default TravelTwo;

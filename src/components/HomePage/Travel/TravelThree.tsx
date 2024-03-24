const TravelThree = () => {
  return (
    <div>
      <li className="item-carousel rounded max-w-[233px] overflow-hidden">
        <img
          src="../image/img3.png"
          alt="#"
          className="min-w-full object-cover"
        />
        <div className="info-item-carousel text-white p-3 bg-[#C6324E] min-w-full">
          <h3>Sài Gòn - Đà Lạt</h3>
          <p className="mb-5">
            Từ <span className="px-1">200.000đ</span>
            <span className="text-gray-300 text-opacity-60 line-through" />
          </p>
        </div>
      </li>
    </div>
  );
};

export default TravelThree;

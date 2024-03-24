const TravelFour = () => {
  return (
    <div>
      <li className="item-carousel rounded max-w-[233px] overflow-hidden">
        <img
          src="../image/img4.png"
          alt="#"
          className="min-w-full object-cover"
        />
        <div className="info-item-carousel text-white p-3 bg-[#9E947C] min-w-full">
          <h3>Sài Gòn - Phan Thiết</h3>
          <p className="mb-5">
            Từ <span className="px-1">150.000đ</span>
            <span className="text-gray-300 text-opacity-60 line-through" />
          </p>
        </div>
      </li>
    </div>
  );
};

export default TravelFour;

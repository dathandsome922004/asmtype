const Travel2 = () => {
  return (
    <div>
      <div
        className="bg-white p-4 rounded-lg"
        style={{ width: "910px", height: "290px" }}
      >
        <div className="flex gap-80">
          <div className="relative flex ">
            <img src="./1.png" className="h-auto pt-8 px-3" alt="Your image" />
            <div className="absolute top-10 left-0 bg-green-500 py-1 px-4 text-white">
              <span className="text-xs flex gap-4">
                {" "}
                <img src="./SVG.png" alt="" /> Xác nhận tức thì
              </span>
            </div>
            <div>
              <h2 className="font-bold text-lg pt-7 text-[#484848]">
                Hải Phòng Travel (Đất Cảng)
              </h2>
              <div className="pt-10 flex">
                <img src="./a.png" alt="" />
                <div className="">
                  <div className="flex">
                    <h1 className="px-3 font-semibold text-[#484848] text-2xl">
                      07:01{" "}
                    </h1>
                    <a
                      href="#"
                      className="text-gray-800 pt-1 flex gap-2 pt-1 font-bold "
                    >
                      {" "}
                      • <p className="font-semibold">Hà Nội</p>
                    </a>
                  </div>
                  <span className="pl-3 text-gray-400 ">1h30m</span>
                  <div className="flex">
                    <h1 className="px-3 font-semibold text-gray-500 text-2xl">
                      08:31{" "}
                    </h1>
                    <a
                      href="#"
                      className="text-gray-600 pt-1 flex gap-2 pt-1 font-bold "
                    >
                      {" "}
                      • <p className="font-semibold">Hải Phòng</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <h1 className="font-semibold text-[#2474E5] text-2xl pt-8 ">
              Từ 230.000đ
            </h1>
            <br />
            <img className="ml-auto" src="./sale.png" alt="" />
            <h2 className="pt-6 text-gray-600 ml-3">Còn 11 chỗ trống</h2>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black py-2 px-3 rounded ml-3 mt-3 ">
              Chọn Chuyến
            </button>
          </div>
        </div>
        <div className="flex justify-end">
          <h1 className="font-semibold font-xl mt-3">
            KHÔNG CẦN THANH TOÁN TRƯỚC
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Travel2;

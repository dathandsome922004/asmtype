import FooterAbout from "./HomePage/FooterAbout";
import FooterAddress from "./HomePage/FooterAddress";
import Header from "./HomePage/Header";

const Bank = () => {
  return (
    <div>
      <Header />
      <div className="flex gap-8 justify-center mx-auto max-w-[1200px] ">
        <div>
          <div
            className="bg-white h-10 p-4 rounded-lg "
            style={{ width: "710px", height: "390px" }}
          >
            <h1 className="font-bold text-xl ">Thông Tin Thanh Toán</h1>
            <div className=" relative border h-14 mt-4  border-black-500 rounded-lg">
              <input
                className="pt-4 font-semibold mt-3 ml-2"
                type="text"
                value=""
              />
              <span className="absolute text-gray-400 left-0 text-xs mt-1 ml-1 ">
                Tên người đi <span className="text-red-600 ">*</span>
              </span>
            </div>
            <div className="flex gap-5">
              <div className="border h-14 w-28 mt-4 border-black-500 rounded-lg">
                <p className="pt-4 font-semibold ml-6">VN +84</p>
              </div>
              <div className="relative border h-14 mt-4 border-black-500 rounded-lg w-full">
                <input
                  className="pt-4 font-semibold mt-3 ml-2 border-0"
                  type="text"
                  value=""
                />
                <span className="absolute text-gray-400 left-0 text-xs mt-1 ml-1 ">
                  Số Điện Thoại <span className="text-red-600 text-xs">*</span>
                </span>
              </div>
            </div>
            <div className=" relative border h-14 mt-4  border-black-500 rounded-lg">
              <input
                className="pt-4 font-semibold mt-3 ml-2"
                type="text"
                value=""
              />
              <span className="absolute text-gray-400 left-0 text-xs mt-1 ml-1">
                Email để nhận thông tin đặt chỗ{" "}
                <span className="text-red-600 ">*</span>
              </span>
            </div>
            <div className="border h-14 mt-4  border-green-500 bg-green-50 rounded-lg flex gap-2">
              <img src="./tichxanh.png" className="w-6 h-6 mt-4 ml-2" alt="" />
              <p className="mt-4 ml-2 text-sm">
                Số điện thoại và email được sử dụng để thông tin đơn hàng và
                liên hệ khi cần thiết.
              </p>
            </div>
          </div>
        </div>
        <div>
          <br />
          <div>
            <div
              className="bg-white p-4 rounded-lg"
              style={{ width: "400px", height: "350px" }}
            >
              <div className="flex gap-20 justify-center ">
                <div className="relative flex ">
                  <div className="absolute top-10 left-0 text-white"></div>
                  <div>
                    <h2 className="font-bold text-lg pt-7 text-[#484848]">
                      Hải Phòng Travel
                      <p>(Đất Cảng)</p>
                    </h2>
                    <div className=" flex">
                      <img src="./a.png" alt="" />
                      <div className="">
                        <div className="flex">
                          <h1 className="px-3 font-semibold text-[#484848] text-2xl">
                            19:00{" "}
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
                            20:30{" "}
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
              </div>
              <div className="flex justify-center gap-3 ">
                <h1 className="font-bold text-xl">Tổng Tiền</h1>
                <h1 className="flex gap-1 font-bold text-xl"> 230.000đ </h1>
              </div>

              <a
                className="group relative inline-flex items-center overflow-hidden rounded bg-red-500 px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500 mt-4 ml-28"
                href="#"
              >
                <span className="absolute -start-full transition-all group-hover:start-4">
                  <svg
                    className="size-5 rtl:rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
                <span className="text-sm font-medium transition-all group-hover:ms-4">
                  {" "}
                  Thanh Toán{" "}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <FooterAbout />
      <FooterAddress />
    </div>
  );
};

export default Bank;

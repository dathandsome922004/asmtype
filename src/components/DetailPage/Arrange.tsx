const Arrange = () => {
  return (
    <div>
      <div>
        <div
          className="bg-white p-4 rounded-lg "
          style={{ width: "266px", height: "290px" }}
        >
          <h1 className="font-bold pb-2 ">Sắp Xếp</h1>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              className="form-radio text-indigo-700"
              name="radio"
              defaultValue="Option 1"
            />
            <span className="text-gray-700 px-5 pb-2 pt-2">Mặc Định</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              className="form-radio text-indigo-600"
              name="radio"
              defaultValue="Option 2"
            />
            <span className="text-gray-700 px-5 pb-2 pt-2">
              Giờ đi sớm nhất
            </span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              className="form-radio text-indigo-600"
              name="radio"
              defaultValue="Option 3"
            />
            <span className="text-gray-700 px-5 pb-2 pt-2">
              Giờ đi muộn nhất
            </span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              className="form-radio text-indigo-600"
              name="radio"
              defaultValue="Option 3"
            />
            <span className="text-gray-700 px-5 pb-2 pt-2">
              Đánh giá cao nhất
            </span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              className="form-radio text-indigo-600"
              name="radio"
              defaultValue="Option 3"
            />
            <span className="text-gray-700 px-5 pb-2 pt-2">Gia tăng dần</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              className="form-radio text-indigo-600"
              name="radio"
              defaultValue="Option 3"
            />
            <span className="text-gray-700 px-5 pb-2 pt-2">Giá giảm dần</span>
          </label>
        </div>
        <br />
      </div>
    </div>
  );
};

export default Arrange;

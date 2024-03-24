import TravelTwo from "./Travel/TravelTwo";
import TravelOne from "./Travel/TravelOne";
import TravelThree from "./Travel/TravelThree";
import TravelFour from "./Travel/TravelFour";

const Main = () => {
  return (
    <div>
      <main>
        <div className="container max-w-screen-lg mx-auto mt-12">
          <h2 className="text-xl font-medium mb-4">Tuyến đường phổ biến</h2>
          <div className="carousel relative max-w-[980px]">
            <ul className="flex items-center space-x-3 max-w-full">
              <TravelOne />
              <TravelTwo />
              <TravelThree />
              <TravelFour />
            </ul>
            <span className="prev opacity-35 size-9 bg-white rounded-full absolute top-[70px] start-4 flex items-center justify-center">
              <svg
                width={9}
                height={14}
                viewBox="0 0 9 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.69229 12.6154L2.15383 7.07696L7.69229 1.53849"
                  stroke="#707070"
                  strokeWidth="1.84615"
                />
              </svg>
            </span>
            <span className="next size-9 bg-white rounded-full absolute top-[70px] end-4 flex items-center justify-center">
              <svg
                width={9}
                height={14}
                viewBox="0 0 9 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.30771 1.53845L6.84617 7.07691L1.30771 12.6154"
                  stroke="#707070"
                  strokeWidth="1.84615"
                />
              </svg>
            </span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;

import { relative } from "path";
import React from "react";

const HomeCartSlider: React.FC = () => {
  return (
    <>
      <div
        style={{ backgroundColor: "#EFF5FA" }}
        className="flex flex-col items-center"
      >
        <div className="flex flex-col items-center">
          {/* <div className='w-[492px] h-[182px]'> */}
          <p className=" text-9xl font-semibold leading-[181.5px] text-orange-500 ">
            Recipes
          </p>
          {/* </div> */}
          {/* <div className='w-[1010px] h-[161px]'> */}
          <p className="text-[44px] font-extrabold leading-[62.39px]">
            With the right ingredients,magic can happen.{" "}
          </p>
          {/* </div> */}
          {/* <div className='w-[498px] h-[80px]'> */}
          <p className=" text-2xl font-medium leading-[39.48px] mt-8 mb-28">
            Explore our curated recipes that made from different types of our
            premium cheese.
          </p>
          {/* </div> */}
        </div>
        <div className="w-[444px] h-[332px] rounded-[30px]">
          <div className="flex flex-col justify-center items-center">
            <div
              className="w-[270px] h-[180px] rounded-[30px]"
              style={{ position: "relative", zIndex: 1 }}
            >
              <img src="/Image/slideImage1.png" alt="image" />
            </div>
            <p className="mt-4" style={{ position: "relative", zIndex: 1 }}>
              Chicken Pizza With Onion
            </p>
            <button
              style={{ position: "relative", zIndex: 1 }}
              type="button"
              className=" mt-[46px] text-red-500 rounded-tr-[50px] border-2 border-red-600 rounded-bl-[50px] hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 w-[158px] h-[41px]"
            >
              View
            </button>
          </div>
          <div
            className="w-[444px] h-[270px] rounded-[30px] shadow-2xl"
            style={{
              position: "relative",
              bottom: 263,
              backgroundColor: "white",
              right: 2,
            }}
          ></div>
        </div>
        <div className=" mt-8">
          <button
            type="button"
            className="text-white w-[442px] h-[52px] rounded-tr-[50px] rounded-bl-[50px] bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-12 mt-6 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            View all Recipes
          </button>
        </div>
      </div>
    </>
  );
};
export default HomeCartSlider;

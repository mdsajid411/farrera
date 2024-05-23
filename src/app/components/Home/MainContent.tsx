import React from "react";

const MainContent: React.FC = () => {
  return (
    <>
    <div className="flex-col relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
  <div className="flex flex-col lg:flex-row items-center justify-between">
    <div className="ml-4 lg:ml-20 mb-8 lg:mb-0 lg:w-3/5">
      <div className="h-72 lg:h-[142px] w-full flex items-center gap-4 px-4 py-0">
        <p className="font-semibold text-4xl lg:text-5xl font-bold leading-[70.67px]">
          A Superb Level of <br /> Joy in{" "}
          <span className="text-orange-500">Dairy Products!</span>
        </p>
      </div>
      <div className="h-16 lg:w-[549px] my-4 lg:my-0 flex items-center gap-1 p-4">
        <p className="text-base lg:text-lg">
          Premium dairy products that uphold quality,
          <br />
          freshness & taste.
        </p>
      </div>
      <div className="flex items-center p-4">
        <button
          type="button"
          className="text-white rounded-tr-[50px] bg-red-700 rounded-bl-[50px] hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium text-sm px-5 py-2.5 mr-2 mb-2 lg:mb-0 lg:mr-4 lg:w-56"
        >
          Explore our products
        </button>
        <button
          type="button"
          className="text-red-500 border-2 rounded-tr-[50px] border-red-600 rounded-bl-[50px] hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium text-sm px-5 py-2.5 mr-2 mb-2 lg:mb-0 lg:mr-4 lg:w-44"
        >
          Recipes
        </button>
      </div>
    </div>
    <div className="lg:w-2/5 lg:pl-0">
      <img
        width={632}
        src="/Image/treeImage.png"
        alt="Tree"
        className="w-full h-auto lg:h-auto lg:max-h-[472px] object-cover"
      />
    </div>
  </div>
{/* </div> */}


        {/* background image */}
        <div
          className=" max-w-7xl mx-auto w-full h-[1131px] flex-col justify-items-end"
          style={{ backgroundImage: `url(/MainBackground.png)` }}
        >
          <div
            className="w-[522px] h-[186px] ml-auto"
            style={{ position: "relative", top: "240px" }}
          >
            <p className="text-5xl font-semibold leading-[62.39px]">
              Made for those who seek a premium quality& freshness.
            </p>
          </div>

          <div
            className="h-[74px] w-[341px] ml-auto "
            style={{ position: "relative", top: "240px", right: "181px" }}
          >
            <p className=" text-xl font-medium leading-[36.35px]">
              Ingredients that will define the meaning of cheese.
            </p>
          </div>

          <div className='flex flex-row justify-evenly' style={{ position: "relative", top: "256px" }}>
            <div>
              <img src="/Image/MainImage1.png" alt="recipe" height={499} width={469} />
            </div>
            <div>
              <img src="/Image/MainImage2.png" alt="recipe" height={366} width={608} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContent;

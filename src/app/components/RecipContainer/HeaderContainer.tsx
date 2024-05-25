import * as React from "react";
import Cart from "./Cart";

const HeaderContainer: React.FC = () => {
  const cardArray = Array.from({ length: 3 }, (_, index) => index);
  const cardArray2 = Array.from({ length: 6 }, (_, index) => index);
  return (
    <>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-7xl">
        <div
          className=" w-full h-[325px] flex justify-center items-center"
          style={{
            backgroundImage: `url(/Image/recipsHeader.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="w-[699px] h-[136px]">
            <img src="/Image/recipsText.png" alt="" />
          </div>
        </div>
        <div className="flex flex-row">
          <div className="w-[318px] h-[440px] flex items-center flex-col mt-6 ml-[76px]">
            <div className=" shadow-md ">
              <input className="w-[318px] h-[46px]"
                type="text"
                placeholder="Search"
                style={{ border: "2px solid balck" }}
              />
            </div>
            <div className="mt-[28px] bg-white shadow-lg rounded-lg w-[318px] h-[366px] ">
              <h1 className=" font-extrabold ml-[22px] mt-[15px]">Recipes Category:</h1>
              <ol className="ml-[55px] mt-[18px]">
                <li className="mt-[18px]">Breackfast</li>
                <li className="mt-[18px]">Dinner</li>
                <li className="mt-[18px]">Appetizer</li>
                <li className="mt-[18px]">lunch</li>
                <li className="mt-[18px]">Appetizer</li>
                <li className="mt-[18px]">lunch</li>
              </ol>
            </div>
          </div>
          <div className="ml-[30px] mt-[32px] w-[714px]">
            <h1 className="text-[24px] font-medium">Breakfast recipes</h1>
            <div className="flex flex-wrap">
              {cardArray.map((item, index) => (
                <Cart key={index} />
              ))}
            </div>

            <h1 className="text-[24px] font-medium mt-[32px]">
              Recommended Recipes
            </h1>
            <div className="flex flex-wrap mt-[12px]">
              {cardArray2.map((item, index) => (
                <Cart key={index} />
              ))}
            </div>
          </div>
        </div>
        {/* comment section */}
        <div className="max-w-full md:w-[1180px] mt-8 mx-auto px-4">
          <h1 className="text-[24px] font-medium">Comments</h1>
          <div className=" mt-[38px] max-w-full md:w-[1083px] ml-auto">
            <div className="mt-6 flex items-start space-x-4">
              <img
                className="inline-block"
                src="/SvgImage/RecipCommentProfile.svg"
                alt=""
              />
              <div>
                <h1 className="inline-block text-[18px] font-medium">
                  Admin (Verified Owner)-08 Jan, 2024
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Nunc sit morbi turpis
                  sed volutpat egestas. Mollis scelerisque a sem morbi sed donec
                  eu. Dui platea scelerisque ut posuere. Sit posuere aliquet
                  venenatis quam.
                </p>
              </div>
            </div>

            <div className="mt-6 flex items-start space-x-4">
              <img
                className="inline-block"
                src="/SvgImage/RecipCommentProfile.svg"
                alt=""
              />
              <div>
                <h1 className="inline-block text-[18px] font-medium">
                  Admin (Verified Owner)-08 Jan, 2024
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Nunc sit morbi turpis
                  sed volutpat egestas. Mollis scelerisque a sem morbi sed donec
                  eu. Dui platea scelerisque ut posuere. Sit posuere aliquet
                  venenatis quam.
                </p>
              </div>
            </div>
          </div>

          <div className=" mt-6 max-w-full md:w-[1083px] ml-auto">
            <div className="mt-6 flex items-start space-x-4">
              <img
                className="inline-block"
                src="/SvgImage/RecipCommentProfile.svg"
                alt=""
              />
              <div>
                <h1 className="inline-block text-[18px] font-medium">
                  Admin (Verified Owner)-08 Jan, 2024
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Nunc sit morbi turpis
                  sed volutpat egestas. Mollis scelerisque a sem morbi sed donec
                  eu. Dui platea scelerisque ut posuere. Sit posuere aliquet
                  venenatis quam.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-[30px] max-w-full md:w-[1083px] ml-auto">
            <textarea className="w-full h-[131px] bg-cover border-2 border-yellow-300"></textarea>
            <button
              type="submit"
              className="w-full md:w-[168.56px] h-[45px] mt-[23px] justify-center rounded-md bg-[#FBCD07] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Submit
            </button>
          </div>
        </div>

        <div className="mt-[73px] mb-[66px] ml-[15px] flex flex-row justify-center">
          <div className="md:w-[225px] max-w-full h-[345px] bg-white shadow-lg rounded-lg mr-[41px]">
            <div className="flex flex-row justify-between">
              <h1 className="w-[41.69] h-[16.81] bg-[#0CC5B7]">20%</h1>
              <img src="/SvgImage/wishList.svg" alt="" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src="/Image/RecipsCart.png" alt="" />
              <h1 className="text-[16px] font-extrabold mt-[21px]">
                Crunchy Crust Bugur
              </h1>
              <h2>£18.00 £14.99</h2>
              <button
                type="submit"
                className="w-full md:w-[166.56px] h-[38px] mt-[68px] justify-center rounded-md bg-[#FBCD07] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Submit
              </button>
            </div>
          </div>
           
          <div className="md:w-[225px] max-w-full h-[345px] bg-white shadow-lg rounded-lg mr-[41px]">
            <div className="flex flex-row justify-between">
              <h1 className="w-[41.69] h-[16.81] bg-[#0CC5B7]">20%</h1>
              <img src="/SvgImage/wishList.svg" alt="" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src="/Image/RecipsCart.png" alt="" />
              <h1 className="text-[16px] font-extrabold mt-[21px]">
                Crunchy Crust Bugur
              </h1>
              <h2>£18.00 £14.99</h2>
              <button
                type="submit"
                className="w-full md:w-[166.56px] h-[38px] mt-[68px] justify-center rounded-md bg-[#FBCD07] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Submit
              </button>
            </div>
          </div>

          <div className="md:w-[225px] max-w-full h-[345px] bg-white shadow-lg rounded-lg mr-[41px]">
            <div className="flex flex-row justify-between">
              <h1 className="w-[41.69] h-[16.81] bg-[#0CC5B7]">20%</h1>
              <img src="/SvgImage/wishList.svg" alt="" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src="/Image/RecipsCart.png" alt="" />
              <h1 className="text-[16px] font-extrabold mt-[21px]">
                Crunchy Crust Bugur
              </h1>
              <h2>£18.00 £14.99</h2>
              <button
                type="submit"
                className="w-full md:w-[166.56px] h-[38px] mt-[68px] justify-center rounded-md bg-[#FBCD07] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Submit
              </button>
            </div>
          </div>

          <div className="md:w-[225px] max-w-full h-[345px] bg-white shadow-lg rounded-lg">
            <div className="flex flex-row justify-between">
              <h1 className="w-[41.69] h-[16.81] bg-[#0CC5B7]">20%</h1>
              <img src="/SvgImage/wishList.svg" alt="" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src="/Image/RecipsCart.png" alt="" />
              <h1 className="text-[16px] font-extrabold mt-[21px]">
                Crunchy Crust Bugur
              </h1>
              <h2>£18.00 £14.99</h2>
              <button
                type="submit"
                className="w-full md:w-[166.56px] h-[38px] mt-[68px] justify-center rounded-md bg-[#FBCD07] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HeaderContainer;

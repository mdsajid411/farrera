import * as React from "react";
// import {Checkbox} from "@nextui-org/checkbox";
const SignIn: React.FC = () => {
  return (
    <>
      <div className="h-[540px] w-full max-w-[1003px] mx-auto flex items-center">
        <div className="h-[484px] w-full max-w-[863px] mx-auto flex flex-row justify-between bg-[#F9F9F9]">
          <div className="flex flex-col">
            <div className="w-[111px] h-[95.88px] ml-[27px]">
              <img className="w-auto" src="/Image/Logo.png" alt="logo" />
            </div>
            <div className="w-[136px] h-[35px] ml-[27px] mt-[5.6px] text-center flex items-center">
              <p className="text-[#000000] font-bold text-[36px] ">Sign IN</p>
            </div>

            <div className=" w-[441px] ml-[27px] mt-[27px]">
              <form className="space-y-6" action="#" method="POST">
                <div>
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input style={{ boxShadow:` 0 1px 3px 0 rgba(0, 0, 0, 0.25)`}}
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset bg-[rgba(0, 0, 0, 0.25)] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="mt-[14px]">
                  <div className="flex items-center justify-between">
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      Password
                    </label>
                  </div>
                  <div className="mt-2">
                    {/* <img className="absolute right-2 top-1/2 transform -translate-y-1/2" src="/SvgImage/Password_icon.svg" alt="" /> */}
                    <input style={{ boxShadow:` 0 1px 3px 0 rgba(0, 0, 0, 0.25)`}}
                      id="password"
                      name="password"
                      type="password"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder-[#F1F1F1] focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="flex flex-row justify-between mt-[14px]">
                  <div>
                  {/* <Checkbox defaultSelected color="default">Default</Checkbox> */}
                    <label className="ml-[5px] ">Remember me</label>
                  </div>
                  <div className="">
                    <a
                      href="#"
                      className=" font-normal text-[#AAAAAA]"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>

                <div className="flex flex-row mt-[29px]">
                  <button
                    type="submit"
                    className="w-[144px] justify-center rounded-md bg-[#FBCD07] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Sign in
                  </button>
                  <div className="ml-[39px]">
                    <img src="/SvgImage/google_icon.svg" alt="" />
                  </div>
                </div>
                
              </form>

            </div>
          </div>

          <div className="h-[484px] w-[302px] flex flex-col items-center" style={{ backgroundImage: 'url(/Image/Rectangle.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="h-[175px] w-[203px] mt-[129px]">
              <img src="/Image/Logo.png" alt="" />
            </div>
            <div className="w-[261px] h-[72px] mt-[14px]">
              <img src="/Image/SignIntext.png" alt="" />
              {/* <p className=" text-[white]">Unlock Culinary Delights: Explore Our Menus and Exclusive Offers</p> */}
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};
export default SignIn;


import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-center border-b border-gray-300 pb-9">
        {/* Left side: Logo and Navigation Links */}

        <div className="flex flex-col lg:flex-col space-y-4 lg:space-y-0 lg:space-x-4">
          {/* Logo */}
          <div>
            <Image src="/Image/logo.png" alt="logo" width={157} height={188} />
          </div>

          {/* Navigation Links */}
          {/* <div> */}
            <table className="border-collapse">
              <thead>
                <tr>
                  <th className=" p-4">COMPANY</th>
                  <th className=" p-4">HELP & CONTACT</th>
                  <th className=" p-4">MORE FROM US</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className=" px-4 py-2 size-4 font-normal">FAQ</td>
                  <td className=" px-4 py-2">Email </td>
                  <td className=" px-4 py-2">Bulk/Party/Order</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">About Us</td>
                  <td className="px-4 py-2">+91 900 000 000</td>
                  <td className="px-4 py-2">Bulk/Party/Order</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Recipes</td>
                  <td className="px-4 py-2"></td>
                  <td className="px-4 py-2">Best Offers</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Blog</td>
                 
                </tr>
              </tbody>
            </table>
          {/* </div> */}
        </div>

        {/* Right side: Search Bar */}
        <div className="mt-4 lg:mt-0">
          <div className=" relative bottom-7">
           <p>SUBSCRIBE TO OUR DROOLWORTHY NEWSLETTER</p>
          </div>
         <div className="flex row">
         <input
            type="text"
            placeholder="Email address"
            className=" pr-16 pl-8 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-700 text-white"
          />
          <button className=" bg-yellow-300 hover:bg-gray-200 text-black px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
          Subscribe
          </button>
         </div>
        </div>
      </div>
      <div className="flex justify-between items-center pl-4 pr-[76px]">
       <div className="flex">
       <p>Teams & Condition</p>
        <p>privacy policy</p>
       </div>
       <div>
       <p>2024 All rights reserved.</p>
       </div>
       <div className="flex w-[142.5px] justify-between pb-5">
        <img src="/SvgImage/Vector.svg" alt="" />
        <img src="/SvgImage/faceBookIcon.svg" alt="" />
        <img src="/SvgImage/instaIcon.svg" alt="" />
       </div>
      </div>
    </footer>
  );
};

export default Footer;

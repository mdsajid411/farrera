import * as React from "react";
import Image from "next/image";

const ResponsiveAppBar: React.FC = () => {
  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16 mt-6">
        {/* Logo and navigation links */}
        <div className="flex-shrink-0 flex items-center">
          <div className="flex space-x-4 justify-center items-center">
            {/* Logo */}
            <div className="">
              <Image src="/Image/Logo.png" alt="logo" width={111} height={89} />
            </div>
            {/* Navigation links */}
            <div className="hidden md:flex space-x-4">
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 font-medium"
              >
                Recipes
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 font-medium"
              >
                About Us
              </a>
            </div>
          </div>
        </div>

        {/* Profile and Shopping icons */}
        <div className="flex items-center justify-evenly w-[358px]">
          <div className="flex items-center">
            <img src="/SvgImage/wishList.svg" alt="" />
            <span>Wishlist</span>
          </div>
          <div className="flex">
            <img src="/SvgImage/shoping.svg" alt="" />
            <span>Cart</span>
          </div>
          <div className="flex">
            <img src="/SvgImage/profile.svg" alt="" />
            <span>Login</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ResponsiveAppBar;

import React from "react";

const Cart:React.FC=()=>{
    return(
        <>
         <div className="w-[225px] h-[284px] bg-white shadow-lg rounded-lg mt-[7px] mr-[13px]">
              <div className="px-[10px]">
                <div className="h-[110.69px] w-full mt-[8px]">
                  <img src="/Image/RecipsComponent.png" alt="" />
                </div>
                <p className="mt-[8.5px] text-[#A1A1A1] text-[10px]">Dairy Free</p>
                <div className="w-[205px] h-[68px]">
                  <h3 className="text-lg font-medium text-gray-900 text-[16px] leading-[22.68px]">
                  Onion Jam Burger With RedOnion Marmalade & Roasted
                  </h3>
                </div>
                <div className="flex flex-row justify-between mt-[40px]">
                  <h1 className="text-[18px] text-yellow-400">30 min</h1>
                  <div className="flex w-[54px] h-[19.18px] justify-between">
                    <img src="/SvgImage/wishList.svg" alt="" style={{color:"black"}}/>
                    <img src="/SvgImage/commentIcon.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
        </>
    )
}
export default Cart;
import React from "react";
import broImage from "../assets/image/bro.png";
import Avatar4 from "../assets/image/Avatar4.png";
import Tick from "../assets/image/Tick.png";
import ssImage from "../assets/image/ss.png";

const Avatar = () => {
  return (
    <div className="grid grid-cols-2 gap-8 lg:flex lg:flex-nowrap lg:w-full lg:gap-8 mt-5 mb-5">
      {/* Best Advisors Section */}
      <div className="flex flex-col items-center text-center lg:w-[20%]">
        <img src={ssImage} alt="Best Advisors" className="w-[15%] lg:w-[80%]" />
        <p className="mt-4 text-xl lg:text-2xl font-semibold text-[#56D9B9]">
          Best Advisors
        </p>
        <p className="text-xl lg:text-2xl font-semibold text-[#187BF6]">
          35 Lakh+
        </p>
      </div>

      {/* Policies Sold Section */}
      <div className="flex flex-col items-center text-center lg:w-[20%]">
        <img src={broImage} alt="Policies Sold" className="w-[15%] lg:w-[80%]" />
        <p className="mt-4 text-xl lg:text-2xl font-semibold text-[#56D9B9]">
          Policies Sold
        </p>
        <p className="text-xl lg:text-2xl font-semibold text-[#187BF6]">
          1 crore +
        </p>
      </div>

      {/* Insurance Partner Section */}
      <div className="flex flex-col items-center text-center lg:w-[20%]">
        <img src={Avatar4} alt="Insurance Partner" className="w-[15%] lg:w-[50%] lg:h-[50%]" />
        <p className="mt-4 text-xl lg:text-2xl font-semibold text-[#56D9B9]">
          Insurance Partner
        </p>
        <p className="text-xl lg:text-2xl font-semibold text-[#187BF6]">
          45 Lakh +
        </p>
      </div>

      {/* Satisfied Customers Section */}
      <div className="flex flex-col items-center text-center lg:w-[20%]">
        <img src={Tick} alt="Satisfied Customers" className="w-[15%] lg:w-[80%]" />
        <p className="mt-4 text-xl lg:text-2xl font-semibold text-[#56D9B9]">
          Satisfied Customer
        </p>
        <p className="text-xl lg:text-2xl font-semibold text-[#187BF6]">
          45 Lakh+
        </p>
      </div>
    </div>
  );
};

export default Avatar;

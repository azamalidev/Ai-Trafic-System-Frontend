import React from "react";
import featureImage from "../assets/image/feature.png";
import feature1Image from "../assets/image/feature1.png";
import feature2Image from "../assets/image/feature2.png";
import arrowImage from "../assets/image/arrow.png";

const Features = () => {
  return (
    <div className="relative py-4 px-2">
      {/* Main Flex Container for Layout */}
      <div className="flex flex-wrap justify-center lg:flex-nowrap">
        {/* Features Text Section (20% width on large screens) */}
        <div className="flex justify-center items-center lg:w-[20%] w-full">
          <div className="z-10 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
            Features
          </div>
        </div>

        {/* Arrow Image Section (20% width on large screens) */}
        <div className="flex justify-center items-center lg:w-[20%] w-full">
          <div
            className="z-10"
            style={{
              transform: "rotate(0.27deg)",
            }}
          >
            <img
              src={arrowImage}
              alt="Arrow"
              className="w-[100px] h-[70px] sm:w-[120px] sm:h-[80px] md:w-[125px] md:h-[90px]"
            />
          </div>
        </div>

        {/* Feature Images Section (60% width on large screens) */}
        <div className="flex justify-center items-center lg:w-[60%] w-full flex-wrap gap-4">
          {/* Feature Image 1 */}
          <img
            src={feature2Image}
            alt="Feature 2"
            className="w-[150px] h-[90px] sm:w-[200px] sm:h-[120px] md:w-[210px] md:h-[130px] opacity-100"
          />
          {/* Feature Image 2 */}
          <img
            src={feature1Image}
            alt="Feature 1"
            className="w-[150px] h-[220px] sm:w-[200px] sm:h-[260px] md:w-[210px] md:h-[300px] opacity-100"
          />
          {/* Feature Image 3 */}
          <img
            src={featureImage}
            alt="Feature 1"
            className="w-[150px] h-[220px] sm:w-[200px] sm:h-[260px] md:w-[210px] md:h-[300px] opacity-100"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;

import React from "react";
import oneImage from "../assets/image/one.png";
import twoImage from "../assets/image/two.png";
import threeImage from "../assets/image/three.png";
import fourImage from "../assets/image/four.png";

const Reviewbox = () => {
  return (
    <div>
      <div className="mt-20 mb-5   ">
        <h1 className="font-bold text-1xl">What customers say about us</h1>
        <h2 className="mt-4 text-lg">
          We do our best to provide you the best experience ever
        </h2>
      </div>

      <div className="flex justify-center items-center mt-[100px]  p-0 m-0">
        {/* Images aligned in a row with space in between */}
        <img src={oneImage} alt="one" className="w-[19%] mx-0 mb-0" />
        <img src={twoImage} alt="two" className="w-[19%] mx-0 mb-0" />
        <img src={threeImage} alt="three" className="w-[19%] mx-0 mb-0" />
        <img src={fourImage} alt="four" className="w-[19%] mx-0 mb-0" />
      </div>
    </div>
  );
};

export default Reviewbox;

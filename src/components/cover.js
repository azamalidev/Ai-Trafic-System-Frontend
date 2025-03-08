import React from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import coverImage from "../assets/image/cover.png";

const Cover = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <img src={coverImage} alt="Cover" className="w-full h-full object-cover" />

      {/* Heading */}
      <h1
        className="absolute top-24 left-1/4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold"
        style={{
          fontFamily: "Inter",
        }}
      >
        About LeadGenPro
      </h1>

      {/* Text Overlay */}
      <div
        className="absolute top-48 left-1/4 text-xs sm:text-sm md:text-base lg:text-lg text-white font-medium leading-relaxed"
        style={{
          fontFamily: "Inter",
        }}
      >
        <span>
          LeadGenPro simplifies motor insurance by providing the best quotes and
          <br />
          empowering individuals to earn through lead generation. Join us to
          save,
          <br />
          earn, and grow with ease!
        </span>
      </div>

      {/* About Us Button */}
      <button
        onClick={() => navigate("/about-us")}
        className="absolute top-[320px] sm:top-[280px] md:top-[300px] lg:top-[350px] left-1/4 sm:left-1/4 md:left-1/3 lg:left-[40%] px-6 py-2 text-base sm:text-sm font-bold bg-white text-blue-600 rounded-md cursor-pointer"
      >
        Learn More About Us
      </button>
    </div>
  );
};

export default Cover;

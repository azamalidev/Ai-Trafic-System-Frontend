import React from 'react';
import { useSelector } from 'react-redux';
import Footur from '../components/footur';
import Header from '../components/Header';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Course from '../components/Course.js';
import homepagePhoto from '../assets/image/homepage_photo.avif'; // Import the image
import Testimonials from '../components/Testimonials.js';
import Card2 from '../components/Cards2.js';
import Header_Top from '../components/Header_Top.js';
import { useNavigate } from 'react-router-dom';
import { routes } from '../contant/index.js';

const HomePage = () => {
  const navigate = useNavigate();
  const data = useSelector((state) => state.data); // Access Redux state
  const authenticate = localStorage.getItem('token');
  console.log(authenticate);

  return (
    <div className='font-sans leading-normal text-gray-800 bg-gray-100'>
      <Header_Top />
      <Header />
      <div className='relative w-full h-screen'>
        {/* Replace the video with an image */}
        <img
          src={homepagePhoto}
          alt="Unlock Your Potential with AI-Powered Tools"
          className='w-full h-screen object-cover'
        />
        <div className='absolute inset-0 flex items-center justify-center text-center'>
          <div className='p-4'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#1a2a6c] via-[#b21f1f] to-[#fdbb2d] text-transparent bg-clip-text drop-shadow-2xl'>
              Unlock Your Potential with AI-Powered Tools
            </h1>

            <p className='text-lg sm:text-md md:text-2xl font-medium leading-relaxed text-white drop-shadow-lg'>
              Compare products instantly, analyze data, and make smarter decisions.
              <br />
              Join us to revolutionize the way you work and learn.
            </p>

            <button
              onClick={() => {
                navigate(routes.course);
              }}
              className='mt-6 px-6 py-3 bg-gradient-to-r from-[#1a2a6c] via-[#b21f1f] to-[#fdbb2d] hover:from-[#1a2a6c] hover:to-[#b21f1f] text-white font-semibold text-lg rounded-lg shadow-lg transform hover:scale-110 transition duration-300'
            >
              Get Started Now
            </button>
          </div>
        </div>
      </div>

      {/* <section className='relative mt-0 text-center mx-auto'>
        <Course />
        <Testimonials />
        <Card2 />
        <Footur />
      </section> */}
    </div>
  );
};

export default HomePage;
import React from 'react';
import TruckImage from '../assets/image/Truck.png';
import BicycleImage from '../assets/image/Bicycle.png';
import Commercial from '../assets/image/Mini.png';
import Rectangle1 from '../assets/icons/Rectangle1';
import Rectangle2 from '../assets/icons/Rectangle2';

const Vehicle1 = ({ onImageClick }) => {
  const handleClick = (vehicleType) => {
    console.log(vehicleType, "vehicleType")
    onImageClick(vehicleType);
  };
  return (
    <div className='flex justify-center items-start space-x-14 '>
      <div
        className='w-48 h-48 bg-white border-2 border-gray-500 flex justify-center items-center flex-col cursor-pointer p-6' // Add padding here
        onClick={() => handleClick('Bike')}
      >
        <img
          src={BicycleImage}
          alt='Truck'
          className='w-44 h-44 object-contain'
        />
        <p className='text-2xl font-Roboto mt-3'>Bike</p>
      </div>

      <div
        className='w-48 h-48 bg-white border-2 border-gray-500 flex justify-center items-center flex-col  p-6 cursor-pointer'
        onClick={() => handleClick('Car')}
      >
        <img
          src={Commercial}
          alt='Bicycle'
          className='w-44 h-44 object-contain'
        />
        <p className='text-2xl font-Roboto mt-3'>Car</p>
      </div>
      <div className='absolute top-10 left-20 w-2 h-2 hidden sm:block'>
  <Rectangle1 />
</div>

<div className='absolute right-20 bottom-3 w-2 h-2 hidden sm:block'>
  <Rectangle1 />
</div>
      <div
        className='w-48 h-48 bg-white border-2 border-gray-500 flex justify-center items-center flex-col p-6  cursor-pointer'
        onClick={() => handleClick('Commercial Vehicle')}
      >
        <img
          src={TruckImage}
          alt='Mini'
          className='w-44 h-44 object-contain'
        />
        <p className='text-2xl font-Roboto mt-3 text-center'>
          Commercial
          <br />
          Vehicle
        </p>
      </div>
    </div>
  );
};

export default Vehicle1;

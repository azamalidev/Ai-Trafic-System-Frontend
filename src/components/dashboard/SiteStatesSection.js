import React from 'react';
import { FaUserCircle } from 'react-icons/fa'; // Example icon from react-icons
import { useSelector } from 'react-redux';
import TruckImage from '../../assets/image/Truck.png';
import BicycleImage from '../../assets/image/Bicycle.png';
import Car from '../../assets/image/Mini.png';
const SiteStatesSection = () => {
  const { adminUnReadNotification } = useSelector((state) => state.auth);
  const getVehicleIcon = (vehicleType) => {
    if (!vehicleType) {
      console.warn('vehicleType is undefined or null');
      return null;
    }

    switch (vehicleType.toLowerCase()) {
      case 'car':
        return (
          <img
            src={Car}
            alt='Car'
            className='w-8 h-auto'
          />
        ); // Replace with car image
      case 'bike':
        return (
          <img
            src={BicycleImage}
            alt='Bicycle'
            className='w-8 h-auto'
          />
        );
      case 'commercial vehicle':
        return (
          <img
            src={TruckImage}
            alt='Commercial Vehicle'
            className='w-8 h-auto'
          />
        );

      default:
        return null;
    }
  };
  return (
    <div className='bg-white p-4'>
      <h2 className='text-lg font-semibold mb-4'>States</h2>
      <div className='flex gap-4'>
        <div className='w-25 bg-white shadow-md rounded-2xl border border-gray-200 p-2 text-center'>
          <h3 className='text-sm font-semibold'>Active Users</h3>
          <p className='text-gray-600 text-xs'>100</p>
        </div>

        <div className='w-25 bg-white shadow-md rounded-2xl border border-gray-200 p-2 text-center'>
          <h3 className='text-sm font-semibold'>Course</h3>
          <p className='text-gray-600 text-xs'>100</p>
        </div>

        <div className='w-25 bg-white shadow-md rounded-2xl border border-gray-200 p-2 text-center'>
          <h3 className='text-sm font-semibold'>Videos</h3>
          <p className='text-gray-600 text-xs'>100</p>
        </div>
      </div>
    </div>
  );
};

export default SiteStatesSection;

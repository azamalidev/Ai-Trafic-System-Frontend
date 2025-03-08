import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getProfile,
} from '../../redux/action/auth';

const Header = () => {
  const notificationsRef = useRef(null);
  const { profile } = useSelector((state) => state.auth);
  const [showNotifications, setShowNotifications] = useState(false);
  const [notoficationType, setNotoficationType] = useState('unread');
  const dispatch = useDispatch();
  const { getAdminNotify } = useSelector((state) => state.auth);
  const toggleNotifications = () => {
    setShowNotifications((prev) => !prev);
  };
  const handleClickOutside = (e) => {
    // Close the notifications if the click is outside the container
    if (notificationsRef.current && !notificationsRef.current.contains(e.target)) {
      setShowNotifications(false);
    }
  };
  const fatchNotification = (type) => {
    setNotoficationType(type);
    if (type == 'unread') {
    } else {
    }
  };
  useEffect(() => {
    // Adding the event listener when the component is mounted
    document.addEventListener('mousedown', handleClickOutside);
    
    // Cleanup the event listener when the component is unmounted
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const readAllAdminNotification = () => {
  };

  const readSpecificAdminNotification = (data) => {

  };
  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  const getDaysAgo = (date) => {
    const currentDate = new Date();
    const givenDate = new Date(date);

    const differenceInMilliseconds = currentDate - givenDate;
    const totalDays = Math.floor(
      differenceInMilliseconds / (1000 * 60 * 60 * 24)
    );

    if (totalDays === 0) return 'Today';

    const years = Math.floor(totalDays / 365);
    const months = Math.floor((totalDays % 365) / 30);
    const days = totalDays % 30;

    let result = '';
    if (years > 0) result += `${years} year${years > 1 ? 's' : ''}, `;
    if (months > 0) result += `${months} month${months > 1 ? 's' : ''}, `;
    if (days > 0) result += `${days} day${days > 1 ? 's' : ''} `;

    // Remove the trailing comma and space if present, and add "ago"
    return result.trim().replace(/,\s*$/, '') + ' ago';
  };

  return (
    <div className='flex justify-between items-center bg-white p-4 shadow'>
      {/* Greeting */}
      <h1 className='text-lg font-semibold'>
        Welcome back, <span className='text-blue-500'>{profile?.name}</span>
      </h1>

      {/* Profile & Notification Section */}
      <div className='flex items-center space-x-4'>
        {/* Profile Image */}
        <img
          src={profile?.profilePhoto}
          alt='Profile'
          className='w-8 h-8 rounded-full'
        />

     
      </div>
    </div>
  );
};

export default Header;

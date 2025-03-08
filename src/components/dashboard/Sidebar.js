import React from 'react';
import Logo from '../../assets/image/Logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { routes } from '../../contant';

const Sidebar = ({ setActiveSection, activeSection }) => {
  const navigate = useNavigate();

  const handleNavigation = (section) => {
    setActiveSection(section);
  };

  const logout = () => {
    localStorage.removeItem('token');
    navigate(routes.signin);
  };

  return (
    <div className='w-64 bg-white shadow h-full'>
      <div className='px-6 py-2'>
      <h3>Logo</h3> 
      </div>
      <div>
        <li
          className={`flex items-center space-x-2 p-4 rounded cursor-pointer ${
            activeSection === 'Dashboard'
              ? 'bg-blue-100 text-blue-500'
              : 'hover:bg-gray-200'
          }`}
          onClick={() => handleNavigation('Dashboard')}
        >
          <i className='fas fa-tachometer-alt'></i>
          <span>Dashboard</span>
        </li>
        <li
          className={`flex items-center space-x-2 p-4 rounded cursor-pointer ${
            activeSection === 'Users'
              ? 'bg-blue-100 text-blue-500'
              : 'hover:bg-gray-200'
          }`}
          onClick={() => handleNavigation('Users')}
        >
          <i className='fas fa-users'></i>
          <span>Users</span>
        </li>
        <li
          className={`flex items-center space-x-2 p-4 rounded cursor-pointer ${
            activeSection === 'Course'
              ? 'bg-blue-100 text-blue-500'
              : 'hover:bg-gray-200'
          }`}
          onClick={() => handleNavigation('Course')}
        >
          <i className='fas fa-building'></i> 
          <span>Course</span>
        </li>
        <li
          className={`flex items-center space-x-2 p-4 rounded cursor-pointer ${
            activeSection === 'Serach Panel'
              ? 'bg-blue-100 text-blue-500'
              : 'hover:bg-gray-200'
          }`}
          onClick={() => handleNavigation('Serach Panel')}
        >
          <i className='fas fa-file-alt'></i>
          <span>Course Activities</span>
        </li>
      </div>
      <div className='absolute bottom-4 left-6'>
        <button
          onClick={logout}
          className='text-red-500'
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

import React, { useEffect, useState } from 'react';
import Header from '../../components/dashboard/Header';
import Sidebar from '../../components/dashboard/Sidebar';
import AdminStates from './DashboardStates';
import User from './User';
import SerachPanel from './SerachPanel';
import Course from './Course';

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('Dashboard');

  const renderSection = () => {
    switch (activeSection) {
      case 'Dashboard':
        return <AdminStates />;
      case 'Users':
        return <User />;
      case 'Serach Panel':
        return <SerachPanel />;
      case 'Course':
        return <Course />;
      default:
        return <AdminStates />;
    }
  };
  return (
    <div className='flex h-screen bg-gray-100'>
      {/* Sidebar */}
      <Sidebar
        setActiveSection={setActiveSection}
        activeSection={activeSection}
      />

      {/* Main Content Area */}
      <div className='flex-1 flex flex-col'>
        {/* Header */}
        <Header />

        {/* Scrollable Content */}
        <div className='flex-1 overflow-y-scroll p-6'>{renderSection()}</div>
      </div>
    </div>
  );
};

export default AdminDashboard;

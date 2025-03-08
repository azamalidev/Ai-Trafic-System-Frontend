import React from 'react';
import Footur from '../components/footur';
import Header from '../components/Header';
import Course from '../components/Course';
const CoursePage = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <Course />
      <div className='mt-auto'>
        <Footur />
      </div>
    </div>
  );
};

export default CoursePage;

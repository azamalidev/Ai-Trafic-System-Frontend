import React, { useEffect, useState } from 'react';
import { getCourse } from '../redux/action/request';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { routes } from '../contant';

const Course = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigate = useNavigate();
  const [visibleCourses, setVisibleCourses] = useState(6);
  const dispatch = useDispatch();
  const { course } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(getCourse());
  }, [1000]);

  const filterCourses = () => {
    if (selectedCategory === 'All') {
      return course;
    }
    return course.filter((course) => course.subject === selectedCategory);
  };

  const loadMoreCourses = () => {
    setVisibleCourses(visibleCourses + 6); // Load 6 more courses
  };

  return (
    <div className='p-6 bg-gradient-to-r from-blue-600 via-teal-700 to-teal-600'>
      <div className='text-center mb-6'>
        <h1 className='text-3xl font-extrabold text-white'>
          PFTP has collaborated with NIAIS for onsite Trainings
        </h1>
      </div>

      {/* Scrollable Buttons Section */}
      <div className='overflow-x-auto  mb-6'>
        <div className='flex space-x-4  whitespace-nowrap'>
          <button
            className={`px-6 py-3 rounded-lg transition-all duration-300 ${
              selectedCategory === 'All'
                ? 'bg-green-800 text-white shadow-lg'
                : 'bg-white text-green-800  '
            }`}
            onClick={() => setSelectedCategory('All')}
          >
            All
          </button>

          <button
            className={`px-6 py-3 rounded-lg transition-all duration-300 ${
              selectedCategory === 'Website Development'
                ? 'bg-green-800 text-white shadow-lg'
                : 'bg-white text-green-800 '
            }`}
            onClick={() => setSelectedCategory('Website Development')}
          >
            Website Development
          </button>
          <button
            className={`px-6 py-3 rounded-lg transition-all duration-300 ${
              selectedCategory === 'Emerging Technologies'
                ? 'bg-green-800 text-white shadow-lg'
                : 'bg-white text-green-800'
            }`}
            onClick={() => setSelectedCategory('Emerging Technologies')}
          >
            Emerging Technologies
          </button>
          <button
            className={`px-6 py-3 rounded-lg transition-all duration-300 ${
              selectedCategory === 'Video Editing and Designing'
                ? 'bg-green-800 text-white shadow-lg'
                : 'bg-white text-green-800'
            }`}
            onClick={() => setSelectedCategory('Video Editing and Designing')}
          >
            Video Editing and Designing
          </button>
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {filterCourses()
          .slice(0, visibleCourses)
          .map((course, index) => (
            <div
              key={index}
              onClick={() => {
                if(localStorage.getItem('token')){
                  navigate(`${routes.courseDetail.replace(':id', course._id)}`);
                }else{
                  navigate(routes.signin);
                }
              }}
              className='p-6 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer'
            >
              <div className='flex justify-between items-center'>
                {/* Left-aligned div */}
                <div className='flex items-center space-x-2'>
                  <small className='bg-[#16B5A7] text-white p-1 rounded font-semibold'>
                    {course?.courseType}
                  </small>
                  <span className='text-red-500 font-medium'>
                    Limited Seats
                  </span>
                </div>

                {/* Right-aligned div */}
                <div className='flex items-center space-x-2'>
                  <span className='text-green-600 font-bold'>
                    Now {course?.prize}Rs
                  </span>
                  <span className='text-gray-500 line-through'>
                    {course?.prize * 2}Rs
                  </span>
                </div>
              </div>

              <img
                src={course.courseImage}
                alt={course.title}
                className='w-20 h-20 mx-auto rounded-full mb-4 shadow-lg'
              />
              <h2 className='text-center text-xl font-bold text-gray-800 mb-2'>
                {course.title}
              </h2>
              <p className='text-center text-gray-600 text-sm mb-2'>
                {course.discription}
              </p>
              <p className='text-center text-teal-500 font-semibold'>
                {course.duration}
              </p>
              <div className='flex justify-center mt-2'>
                {/* Star rating */}
                {[...Array(5)].map((_, starIndex) => (
                  <svg
                    key={starIndex}
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    className='w-5 h-5 text-yellow-400'
                  >
                    <path d='M12 .587l3.668 7.429L24 9.748l-6 5.851 1.417 8.268L12 18.897l-7.417 4.97L6 15.599 0 9.748l8.332-1.732L12 .587z' />
                  </svg>
                ))}{' '}
                (5/5)
              </div>
            </div>
          ))}
      </div>
      <div className='text-center mt-6'>
        <button
          className='px-6 py-3 bg-green-800 text-white rounded-lg hover:bg-green-700 transition-all duration-300'
          onClick={loadMoreCourses}
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default Course;

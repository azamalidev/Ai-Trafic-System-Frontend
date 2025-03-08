import React, { useEffect, useState } from 'react';
import Footer from '../components/footur';
import Header from '../components/Header';
import { getCourseById, enrollCourseNow } from '../redux/action/request';
import { useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { getCourse } from '../redux/action/request';
import {
  Star,
  Clock,
  Globe,
  MoveUpIcon,
  GraduationCap,
  BadgeIcon,
} from 'lucide-react';

export default function CourseDetail() {
  const { course } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { id } = useParams();
  const { courseDetail } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getCourseById(id));
  }, [id]);

  const enrollCourse = (courseId) => {
    const data = {
      courseId: courseId,
      userId: localStorage.getItem('userId'),
      status: 'AddToCart',
    };
    dispatch(enrollCourseNow(data));
  };

  useEffect(() => {
    dispatch(getCourse());
  }, []);

  const [randomCourses, setRandomCourses] = useState([]);

  useEffect(() => {
    if (course.length > 0) {
      setRandomCourses(course.sort(() => Math.random() - 0.5).slice(0, 3));
    }
  }, [course]); 

  return (
    <div>
      <ToastContainer />
      <Header />
      <section className='bg-gray-100 py-12'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-wrap -mx-4'>
            <div className='w-full lg:w-3/4 px-4'>
              <div className='bg-white rounded-lg shadow-md p-6 mb-6'>
                <div className='mb-6'>
                  <h5 className='text-2xl font-bold'>{courseDetail?.title}</h5>
                  <div className='flex flex-wrap items-center gap-6 text-sm mt-4'>
                    <div className='flex items-center'>
                      <img
                        src={courseDetail?.instructorImage || 'https://via.placeholder.com/150'}
                        alt='Instructor'
                        className='w-12 h-12 rounded-full mr-3'
                      />
                      <div>
                        <h6 className='font-semibold'>Instructor</h6>
                        <p className='text-gray-600'>{courseDetail?.instructor || 'PFTP | Instructor'}</p>
                      </div>
                    </div>
                    <div>
                      <h6 className='font-semibold'>Category</h6>
                      <p className='text-gray-600'>{courseDetail?.category || 'Web Development'}</p>
                    </div>
                    <div>
                      <h6 className='font-semibold'>Rating</h6>
                      <div className='flex items-center'>
                        {[1, 2, 3, 4].map((_, index) => (
                          <Star
                            key={index}
                            className='w-4 h-4 text-yellow-400 fill-current'
                          />
                        ))}
                        <Star
                          className='w-4 h-4 text-yellow-400 fill-current'
                          strokeWidth={0.5}
                        />
                        <span className='ml-1'>({courseDetail?.rating || '4.5'})</span>
                      </div>
                    </div>
                    <div>
                      <h6 className='font-semibold'>Registration Fee</h6>
                      <p className='text-gray-600'>{courseDetail?.fee || '2900 Rs'}</p>
                    </div>
                  </div>
                </div>
                <div className='mb-6'>
                  <img
                    src={courseDetail?.courseImage || 'https://via.placeholder.com/800x400'}
                    alt='Course Banner'
                    className='w-full rounded-lg'
                  />
                </div>
                <div className='prose max-w-none'>
                  <h2 className='text-3xl font-bold text-center mb-6'>
                    {courseDetail?.title}
                  </h2>
                  <h3 className='text-2xl font-semibold mb-4'>
                    Welcome to {courseDetail?.title}, where the world connects.
                  </h3>
                  <p className='mb-4'>
                    If you are looking forward to {courseDetail?.title} and want
                    to do it within no time, then you are at the right place
                    where you should be.
                  </p>
                  <p className='mb-4'>
                    {courseDetail?.description ||
                      'This course enables efficient learning by combining modern technologies and practical examples.'}
                  </p>
                  <h4 className='text-xl font-semibold text-teal-600 mb-4'>
                    What is {courseDetail?.title}?
                  </h4>
                  <p className='mb-4'>
                    {courseDetail?.overview ||
                      'This course provides a comprehensive understanding of the subject, combining theory and practical applications.'}
                  </p>
                  <h4 className='text-xl font-semibold text-teal-600 mb-4'>
                    Learning Outcome:
                  </h4>
                  <p className='font-semibold mb-2'>You will be able to….</p>
                  <ul className='list-disc pl-6 mb-4'>
                    {courseDetail?.learningOutcomes?.map((outcome, index) => (
                      <li key={index}>{outcome}</li>
                    )) || (
                      <>
                        <li>Understanding the fundamentals of each component</li>
                        <li>Building practical applications</li>
                        <li>Working with real-world examples</li>
                      </>
                    )}
                  </ul>
                  <h4 className='text-xl font-semibold text-teal-600 mb-4'>
                    Scope of {courseDetail?.title}:
                  </h4>
                  <p className='font-semibold mb-2'>
                    {courseDetail?.title} developers can look forward to a promising future as….
                  </p>
                  <ul className='list-disc pl-6 mb-4'>
                    {courseDetail?.scope?.map((point, index) => (
                      <li key={index}>{point}</li>
                    )) || (
                      <>
                        <li>High demand in the job market</li>
                        <li>Excellent earning potential</li>
                        <li>Opportunities for freelancing and entrepreneurship</li>
                      </>
                    )}
                  </ul>
                  <h4 className='text-xl font-semibold text-teal-600 mb-4'>
                    Course Content:
                  </h4>
                  <ol className='list-decimal pl-6 mb-4'>
                    {courseDetail?.courseContent?.map((content, index) => (
                      <li key={index}>{content}</li>
                    )) || (
                      <>
                        <li>Introduction</li>
                        <li>Core Concepts</li>
                        <li>Advanced Topics</li>
                        <li>Practical Projects</li>
                      </>
                    )}
                  </ol>
                  <h2 className='text-xl text-center mb-4'>
                    For the whole course content outlines
                  </h2>
                  <p className='text-center mb-4'>
                    Just WhatsApp the given below number to get the entire
                    course content details in a PDF file.
                  </p>
                  <p className='text-center font-bold'>03034321118</p>
                </div>
              </div>
            </div>
            <div className='w-full lg:w-1/4 px-4'>
              <div className='bg-white rounded-lg shadow-md p-6 mb-6'>
                <h5 className='text-xl font-bold mb-4'>Course Details</h5>
                <ul className=''>
                  <li className='flex items-center'>
                    <Clock className='h-5 mr-2' />
                    <span className='font-semibold'>Duration:</span>
                    <span className='ml-2'>{courseDetail?.duration || '3-Months'}</span>
                  </li>
                  <li className='flex items-center'>
                    <Globe className='w-5 h-5 mr-2' />
                    <span className='font-semibold'>Language:</span>
                    <span className='ml-2'>{courseDetail?.language || 'English/Urdu'}</span>
                  </li>
                  <li className='flex items-center'>
                    <MoveUpIcon className='w-5 h-5 mr-2' />
                    <span className='font-semibold'>Skill Level:</span>
                    <span className='ml-2'>{courseDetail?.skillLevel || 'Beginner'}</span>
                  </li>
                  <li className='flex items-center'>
                    <GraduationCap className='w-5 h-5 mr-2' />
                    <span className='font-semibold'>Subject:</span>
                    <span className='ml-2'>{courseDetail?.subject || 'Website Development'}</span>
                  </li>
                  <li className='flex items-center'>
                    <BadgeIcon className='w-5 h-5 mr-2' />
                    <span className='font-semibold'>Certification:</span>
                    <span className='ml-2'>{courseDetail?.certification ? 'Yes' : 'No'}</span>
                  </li>
                </ul>

                <button
                  onClick={() => enrollCourse(courseDetail?._id)}
                  className='w-full bg-[#166534] text-white font-semibold py-2 px-4 rounded-lg mt-6 transition duration-300'
                >
                  Enroll Course
                </button>
              </div>
              <div className='bg-white rounded-lg shadow-md p-6 mb-6'>
                <h5 className='text-xl font-bold mb-4'>Related Course</h5>
                <div className='space-y-4'>
                  {randomCourses.map((obj, index) => (
                    <RelatedCourse
                      key={index}
                      title={obj?.title}
                      image={obj?.courseImage}
                    />
                  ))}
                </div>
              </div>
              <div className='bg-white rounded-lg shadow-md p-6'>
                <h5 className='text-xl font-bold mb-4'>Course Tag</h5>
                <div className='flex flex-wrap gap-2'>
                  {courseDetail?.tags?.map((tag) => (
                    <a
                      key={tag}
                      href='/'
                      className='bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-300 transition duration-300'
                    >
                      {tag}
                    </a>
                  )) || (
                    <>
                      <a
                        href='/'
                        className='bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-300 transition duration-300'
                      >
                        HTML
                      </a>
                      <a
                        href='/'
                        className='bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-300 transition duration-300'
                      >
                        CSS
                      </a>
                      <a
                        href='/'
                        className='bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-300 transition duration-300'
                      >
                        JavaScript
                      </a>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

const RelatedCourse = ({ title, image }) => {
  return (
    <div className='flex items-center'>
      <img
        src={image || 'https://via.placeholder.com/150'}
        alt={title}
        className='w-20 h-20 object-cover rounded-lg mr-4'
      />
      <div>
        <h6 className='font-semibold mb-1'>{title || 'Course Title'}</h6>
        <div className='flex'>
          {[1, 2, 3, 4, 5].map((_, index) => (
            <Star
              key={index}
              className='w-4 h-4 text-yellow-400 fill-current'
            />
          ))}
        </div>
      </div>
    </div>
  );
}; 
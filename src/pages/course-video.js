import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getVideosById } from '../redux/action/request'; // Adjust this import based on your actual path
import Header from '../components/Header'; // Adjust this import based on your actual path
import Footer from '../components/footur'; // Adjust this import based on your actual path

const CourseVideo = () => {
  const location = useLocation();
  const { data } = location.state || {}; // Data passed from the Link component
  const { courseVidosData } = useSelector((state) => state.auth); // Assuming your videos are stored in auth slice
  const dispatch = useDispatch();

  // Fetch videos by course ID when component mounts or when data.id changes
  useEffect(() => {
    if (data?.id) {
      dispatch(getVideosById(data.id));
    }
  }, [data?.id, dispatch]);

  return (
    <div className='flex flex-col min-h-screen'>
      {/* Header */}
      <Header />

      {/* Check if there is data available to map */}
      <div className="course-videos-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 m-5">
  {courseVidosData && courseVidosData.length > 0 ? (
    courseVidosData.map((video) => (
      <div key={video.id} className="course-video-item">
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg border">
          <img 
            src={video.thumbnail} 
            alt={video.title} 
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">{video.title}</h3>
            <p className="text-gray-700 mt-2">{video.description}</p>
            <a 
              href={video.link} 
              className="text-blue-500 underline mt-3 block"
            >
              Watch Video
            </a>
          </div>
        </div>
      </div>
    ))
  ) : (
    <p className="col-span-3 text-center text-gray-600">
      No videos available for this course.
    </p>
  )}
</div>


      {/* Footer */}
      <div className='mt-auto'>
        <Footer />
      </div>
    </div>
  );
};

export default CourseVideo;

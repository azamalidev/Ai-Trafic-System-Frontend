import React, { useState } from 'react';
import Slider from 'react-slick';
import ReactModal from 'react-modal';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import thumbnail from '../assets/image/car.png';

const carouselData = [
  {
    id: 1,
    title: 'Card Title 1',
    description: 'This is a description for card 1.',
    bgImage: thumbnail,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 2,
    title: 'Card Title 2',
    description: 'This is a description for card 2.',
    bgImage: thumbnail,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 3,
    title: 'Card Title 3',
    description: 'This is a description for card 3.',
    bgImage: thumbnail,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 4,
    title: 'Card Title 4',
    description: 'This is a description for card 4.',
    bgImage: thumbnail,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 5,
    title: 'Card Title 5',
    description: 'This is a description for card 5.',
    bgImage: thumbnail,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 6,
    title: 'Card Title 6',
    description: 'This is a description for card 6.',
    bgImage: thumbnail,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
];

const Carousel = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState('');

  const openModal = (videoUrl) => {
    setActiveVideo(videoUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setActiveVideo('');
    setIsModalOpen(false);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="p-6 flex justify-center">
      <Slider {...settings} className="w-full max-w-7xl">
        {carouselData.map((card) => (
          <div key={card.id} className="p-4">
            <div
              className="relative bg-cover bg-center rounded-lg shadow-lg h-96 w-full max-w-lg transition-transform transform hover:scale-105"
              style={{ backgroundImage: `url(${card.bgImage})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex flex-col justify-center items-center text-white p-4">
                <button
                  className="bg-red-500 hover:bg-red-600 text-white rounded-full p-3 mb-4 transition-transform transform hover:scale-125"
                  aria-label="Play Video"
                  onClick={() => openModal(card.videoUrl)}
                >
                  ▶
                </button>
                <h3 className="text-lg font-bold mb-2">{card.title}</h3>
                <p className="text-sm">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Video Modal */}
      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Video Modal"
        className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-90 transition-opacity duration-300"
        overlayClassName="fixed inset-0"
      >
        <div className="relative bg-white rounded-lg shadow-lg w-full max-w-2xl p-6 animate-fade-in">
          <button
            className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white rounded-full p-3 transition-transform transform hover:rotate-90"
            onClick={closeModal}
          >
            ✕
          </button>
          <iframe
            width="100%"
            height="400"
            src={activeVideo}
            title="YouTube Video"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="transition-transform transform hover:scale-105"
          ></iframe>
        </div>
      </ReactModal>
    </div>
  );
};

export default Carousel;

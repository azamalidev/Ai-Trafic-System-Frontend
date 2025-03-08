import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Eventonedata = () => {
  // State to manage the background image dynamically
  const [imageUrl, setImageUrl] = useState('https://images.unsplash.com/photo-1494260629490-28c1e8e6f388?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=886e20939894ef5dafc54e0cf0cae59d&auto=format&fit=crop&w=1950&q=80');

  const changeImage = () => {
    setImageUrl('https://images.unsplash.com/photo-1570987857061-b1d5a8d6e36b?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg1N3wwfDF8c2VhY2h8MXx8ZGVsaXZlcnklMjBldmVudHxlbnwwfHx8fDE2NzE3Njk1Mjk&ixlib=rb-1.2.1&q=80&w=1080');
  };

  return (
    <div>
      {/* Header with dynamic background image */}
      <header
        className="jumbotron jumbotron-fluid"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          height: '40vh', // Set image height to 40vh
          color: 'white',
          textShadow: '2px 2px 10px rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center', // Vertically center content
          justifyContent: 'center', // Horizontally center content
          padding: '0', // Remove default padding to ensure full height
        }}
      >
        <div className="container text-center">
          <h1 className="display-4 font-weight-bold">Eventone Title</h1>
          <hr className="my-4" />
          <p className="lead">Lorem ipsum dolor sit amet </p>
          {/* Link to Home page */}
          <Link to="/" className="btn btn-primary btn-lg" onClick={changeImage}>
            Go to Home
          </Link>
        </div>
      </header>

      
    </div>
  );
};

export default Eventonedata;

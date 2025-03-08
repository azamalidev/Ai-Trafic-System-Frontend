import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const PMmessagebyAgri = () => {
  return (
    <div className="container">
      <div className="row align-items-center">
        {/* Left side (Image) */}
        <div className="col-md-6">
          <img 
            src="path/to/your/agriculture-image.jpg" 
            alt="Agriculture" 
            className="img-fluid" 
            style={{ maxWidth: '100%', height: 'auto' }} 
          />
        </div>
        
        {/* Right side (Heading and Paragraph) */}
        <div className="col-md-6">
          <h2>Message from the Prime Minister on Agriculture</h2>
          <p>
            As the Prime Minister of this nation, I am deeply committed to the development and growth of the 
            agricultural sector, which plays a vital role in our economy. Our government is focused on ensuring 
            that farmers have access to the best resources, technology, and support. We are working tirelessly 
            to create a more sustainable and prosperous future for our agricultural community. Through innovation, 
            research, and collaborative efforts, we will continue to empower our farmers and enhance food security 
            for generations to come.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PMmessagebyAgri;

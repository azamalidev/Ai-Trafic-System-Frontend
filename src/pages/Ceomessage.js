import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Ceomessage = () => {
  return (
    <div className="container">
      <div className="row align-items-center">
        {/* Left side (Image) */}
        <div className="col-md-6">
          <img 
            src="path/to/your/image.jpg" 
            alt="CEO" 
            className="img-fluid" 
            style={{ maxWidth: '100%', height: 'auto' }} 
          />
        </div>
        
        {/* Right side (Heading and Paragraph) */}
        <div className="col-md-6">
          <h2>Message from the CEO</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nulla convallis mauris ut augue consequat, nec varius dui feugiat. 
            Integer gravida metus in diam consequat, a vulputate elit feugiat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ceomessage;

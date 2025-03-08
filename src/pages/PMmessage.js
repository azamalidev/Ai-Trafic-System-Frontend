import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const PmMessage = () => {
  return (
    <div className="container">
      <div className="row align-items-center">
        {/* Left side (Image) */}
        <div className="col-md-6">
          <img 
            src="path/to/your/pm-image.jpg" 
            alt="Prime Minister" 
            className="img-fluid" 
            style={{ maxWidth: '100%', height: 'auto' }} 
          />
        </div>
        
        {/* Right side (Heading and Paragraph) */}
        <div className="col-md-6">
          <h2>Message from the Prime Minister</h2>
          <p>
            As the Prime Minister of this great nation, I am proud to lead our country towards progress, 
            prosperity, and a brighter future. Together, we have overcome challenges and embraced opportunities 
            that have strengthened our economy and society. Our commitment to unity, equality, and development 
            remains unwavering. We are building a sustainable future for all, ensuring that every citizen has the 
            opportunity to thrive.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PmMessage;

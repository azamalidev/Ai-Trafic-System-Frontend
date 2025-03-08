import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SpokepersonMessage = () => {
  return (
    <div className="container">
      <div className="row align-items-center">
        {/* Left side (Image) */}
        <div className="col-md-6">
          <img 
            src="path/to/your/spokesperson-image.jpg" 
            alt="Spokesperson" 
            className="img-fluid" 
            style={{ maxWidth: '100%', height: 'auto' }} 
          />
        </div>
        
        {/* Right side (Heading and Paragraph) */}
        <div className="col-md-6">
          <h2>Message from the Spokesperson</h2>
          <p>
            As the official spokesperson, it is my privilege to represent our organization and communicate our 
            stance on various matters of public importance. Our commitment to transparency, accountability, and 
            the well-being of our citizens remains strong. I am honored to relay the latest updates and important 
            messages on behalf of our leadership. Together, we continue to strive for a prosperous and harmonious 
            future for all.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SpokepersonMessage;

import React, { useState } from "react";
import certificateone from "../assets/image/eventstwo/certificate.jpg";
import Footer from "../components/footur";
import Header from "../components/Header";

const cardImages = [
  certificateone,
  certificateone,
  certificateone,
  certificateone,
  certificateone,
  certificateone,
  certificateone,
  certificateone,
  certificateone,
  certificateone,
  certificateone,
  certificateone,
];

const Events2 = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image); // Set the clicked image to display in the modal
  };

  const closeImage = () => {
    setSelectedImage(null); // Close the modal when clicked outside
  };

  return (
    <>
    <Header/>
    <div className="container mt-5">
      {/* Cards Layout */}
      <div className="row">
        {cardImages.map((image, index) => (
          <div className="col-md-3 col-sm-6 mb-4" key={index}>
            <div className="card shadow-sm">
              <img
                src={image}
                className="card-img-top"
                alt={`Card ${index + 1}`}
                style={{
                    
                  height: "200px",
                  objectFit: "cover",
                  cursor: "pointer",
                  transition: "transform 0.3s ease-in-out",
                }}
                onClick={() => handleImageClick(image)} // Show image on click
                onMouseEnter={(e) => {
                  e.target.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "scale(1)";
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Full-screen Image Modal */}
      {selectedImage && (
        <div
          className="modal fade show"
          tabIndex="-1"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0)", // Removed background color
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999, // Ensure the modal appears above all other elements
          }}
          onClick={closeImage} // Close the modal on clicking the background
        >
          <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: "90%", maxHeight: "90%" }}>
            <div className="modal-content">
              <div className="modal-body">
                <img
                  src={selectedImage}
                  alt="Full-screen"
                  className="w-100"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    animation: "zoomIn 0.5s forwards", // Zoom-in effect on image
                    objectFit: "contain", // To maintain aspect ratio of the image
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    <Footer/>
    </>
  );
};

export default Events2;

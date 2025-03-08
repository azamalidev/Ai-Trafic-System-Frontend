import React from 'react';
import imag1 from "../assets/image/eventsone/1.jpg";
import Header from '../components/Header';
import Footer from '../components/footur';
import Eventonedata from './Eventonedata';

// Array of images and corresponding text data for each card
const cardData = [
  { image: imag1, title: 'Card 1 Title', description: 'This is a unique description for Card 1.' },
  { image: imag1, title: 'Card 2 Title', description: 'This is a unique description for Card 2.' },
  { image: imag1, title: 'Card 3 Title', description: 'This is a unique description for Card 3.' },
  { image: imag1, title: 'Card 4 Title', description: 'This is a unique description for Card 4.' },
  { image: imag1, title: 'Card 5 Title', description: 'This is a unique description for Card 5.' },
  { image: imag1, title: 'Card 6 Title', description: 'This is a unique description for Card 6.' },
  { image: imag1, title: 'Card 7 Title', description: 'This is a unique description for Card 7.' },
  { image: imag1, title: 'Card 8 Title', description: 'This is a unique description for Card 8.' },
  { image: imag1, title: 'Card 9 Title', description: 'This is a unique description for Card 9.' },
  { image: imag1, title: 'Card 10 Title', description: 'This is a unique description for Card 10.' },
  { image: imag1, title: 'Card 11 Title', description: 'This is a unique description for Card 11.' },
  { image: imag1, title: 'Card 12 Title', description: 'This is a unique description for Card 12.' }
];

const Eventone = () => {
  return (
    <>
    <Header/>
    <Eventonedata/>
    <div className="container mt-5">
      <div className="row">
        {cardData.map((card, index) => (
          <div className="col-md-4 col-sm-6 mb-4" key={index}>
            <div
              className="card shadow-sm"
              style={{ transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <img
                src={card.image}
                className="card-img-top"
                alt={`Card ${index + 1}`}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column justify-content-center text-center">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Eventone;

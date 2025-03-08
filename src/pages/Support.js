import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaDribbble } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';
import { MdOutlineEmail } from 'react-icons/md';
import { FiPhone } from 'react-icons/fi';
import Header from '../components/Header';
import Footer from '../components/footur';

function ContactPage() {

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div>
      <Header/>
      {/* Hero Section */}
      <div className="hero-section" style={{
        background: 'linear-gradient(rgba(11, 70, 25, 0.95), rgba(11, 70, 25, 0.95)), url("https://images.unsplash.com/photo-1557683311-eac922347aa1?q=80&w=2029&auto=format&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '50px 0'
      }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img 
                src="https://i.ibb.co/M6YL2vK/logo.png" 
                alt="PFTP Logo" 
                style={{ maxHeight: '80px' }}
              />
            </div>
            <div className="col-md-6 text-end">
              <h1 className="text-white mb-0">CONTACT US</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-end mb-0">
                  <li className="breadcrumb-item">
                    <a href="/" className="text-warning text-decoration-none">Home</a>
                  </li>
                  <li className="breadcrumb-item active text-white" aria-current="page">Contact Us</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container my-5">
        <div className="row">
          {/* Contact Info */}
          <div className="col-lg-4 mb-4 mb-lg-0">
            <h3 className="mb-4 fw-bold">Contact Info</h3>
            
            <div className="mb-4">
              <div className="d-flex align-items-center mb-3">
                <div className="icon-wrapper me-3">
                  <IoLocationOutline size={24} className="text-success" />
                </div>
                <h5 className="mb-0">Our Location</h5>
              </div>
              <p className="text-muted ps-4">
                Head-Office 57400 Postal Area, Model Town, Lahore, Punjab
              </p>
            </div>

            <div className="mb-4">
              <div className="d-flex align-items-center mb-3">
                <div className="icon-wrapper me-3">
                  <MdOutlineEmail size={24} className="text-success" />
                </div>
                <h5 className="mb-0">Email Address</h5>
              </div>
              <p className="text-primary ps-4 mb-0">
                <a href="mailto:support@pftpedu.org" className="text-decoration-none">
                  support@pftpedu.org
                </a>
              </p>
            </div>

            <div className="mb-4">
              <div className="d-flex align-items-center mb-3">
                <div className="icon-wrapper me-3">
                  <FiPhone size={24} className="text-success" />
                </div>
                <h5 className="mb-0">Phone Number</h5>
              </div>
              <div className="ps-4">
                <p className="text-muted mb-1">+92 (303)-4321118</p>
                <p className="text-muted mb-0">+92 (318)-4321118</p>
              </div>
            </div>

            <div className="social-links mt-4">
              <a href="#" className="btn btn-light me-2"><FaFacebookF /></a>
              <a href="#" className="btn btn-light me-2"><FaTwitter /></a>
              <a href="#" className="btn btn-light me-2"><FaLinkedinIn /></a>
              <a href="#" className="btn btn-light me-2"><FaYoutube /></a>
              <a href="#" className="btn btn-light"><FaDribbble /></a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-8">
            <h3 className="mb-4 fw-bold">Get In Touch</h3>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full Name"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  rows={6}
                  placeholder="Enter Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="btn w-100 py-2 text-white"
                style={{ backgroundColor: '#0B4619' }}
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
<Footer/>
     
    </div>
  );
}

export default ContactPage;
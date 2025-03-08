import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProfileImage from '../assets/image/Profile.png';
import Header from '../components/Header';
import { getProfile, editProfile } from '../redux/action/auth';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const [profilePhoto, setProfilePhoto] = useState();
  const [qrPhoto, setQrPhoto] = useState();

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      const file = files[0];
      if (name == 'profilePhoto') {
        setProfilePhoto(file?.name);
      } else {
        setQrPhoto(file?.name);
      }
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result;
        setFormData((prevData) => ({
          ...prevData,
          [name]: base64String,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, name) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result;
        setFormData((prevData) => ({
          ...prevData,
          [name]: base64String,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveChanges = () => {
    dispatch(editProfile(formData));
  };

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  useEffect(() => {
    if (profile) {
      setFormData(profile);
    }
  }, [profile]);

  return (
    <div className='flex flex-col min-h-screen bg-gray-50'>
      <ToastContainer />
      <Header />
      <div className='flex flex-col items-center justify-center py-2 px-4 sm:px-6 md:px-8'>
        <div className='w-full flex justify-center'>
          <div className='flex justify-center space-x-8 text-lg font-medium mb-8'>
            <span
              className={`cursor-pointer border-b-2 ${
                !isEditing
                  ? 'border-blue-500 text-blue-500'
                  : 'border-transparent text-gray-500'
              }`}
              onClick={() => setIsEditing(false)}
            >
              Profile
            </span>
            <span
              className={`cursor-pointer border-b-2 ${
                isEditing
                  ? 'border-blue-500 text-blue-500'
                  : 'border-transparent text-gray-500'
              }`}
              onClick={() => setIsEditing(true)}
            >
              Edit Profile
            </span>
          </div>
        </div>

        <div className='flex flex-col items-center w-full max-w-4xl space-y-8 md:flex-row md:space-y-0'>
          <AnimatePresence mode='wait'>
            {!isEditing && (
              <motion.div
                key='profile-view'
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.4 }}
              >
                {formData?.profilePhoto ? (
                  <img
                    src={formData.profilePhoto}
                    alt='Profile'
                    style={{
                      width: '20rem',
                      height: '14rem',
                    }}
                  />
                ) : (
                  <>
                    <small className='text-[#0870F9] flex pl-[70px]'>
                      You don't have a profile photo yet.
                    </small>
                    <img
                      src={ProfileImage}
                      alt='Profile'
                      className='w-55 h-50 p-5 '
                    />
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          <div className='w-full text-center'>
            <AnimatePresence mode='wait'>
              {!isEditing ? (
                <motion.div
                  key='profile-info'
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                >
                  <h1 className='text-3xl font-bold text-gray-800'>
                    {formData?.name}
                  </h1>
                
                  <div className='mt-4'>
                    <p className='text-lg text-gray-600'>{formData?.phone}</p>
                    <p className='text-lg text-gray-600 mt-2'>
                      {formData?.email}
                    </p>
                    {formData?.registerDate && (
                      <p className='text-lg text-gray-600 mt-2'>
                      Account Created :  {(() => {
                          const date = new Date(formData.registerDate);
                          const year = date.getFullYear();
                          const month = date.getMonth() + 1; // Add 1 because months are 0-indexed
                          const day = date.getDate();
                          return `${year}-${month < 10 ? '0' + month : month}-${
                            day < 10 ? '0' + day : day
                          }`;
                        })()}
                      </p>
                    )}
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key='edit-form'
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className='space-y-6 w-full max-w-md mx-auto px-4'
                >
                  {[
                    { label: 'name', placeholder: 'Enter your name' },
                    { label: 'email', placeholder: 'Enter your email' },
                    { label: 'phone', placeholder: 'Enter your phone number' },
                    {
                      label: 'profilePhoto',
                      placeholder: 'Upload Profile Photo',
                      type: 'file',
                    },
                  ].map((field) => (
                    <div
                      key={field.label}
                      className='mb-4'
                    >
                      {field.type === 'file' ? (
                        <div
                          className='w-full px-3 py-2 border border-gray-300 rounded-md flex items-center justify-center cursor-pointer'
                          onDragOver={handleDragOver}
                          onDrop={(e) => handleDrop(e, field.label)}
                        >
                          <input
                            id={field.label}
                            name={field.label}
                            type='file'
                            accept='image/*'
                            onChange={handleFileChange}
                            className='hidden'
                          />
                          {(field.label === 'profilePhoto' && profilePhoto) ||
                          (field.label === 'QRCode' && qrPhoto) ? (
                            <span>
                              {field.label === 'profilePhoto' && profilePhoto
                                ? profilePhoto
                                : field.label === 'QRCode' && qrPhoto
                                ? qrPhoto
                                : 'File selected'}
                            </span>
                          ) : (
                            <label
                              htmlFor={field.label}
                              className='cursor-pointer text-gray-500'
                            >
                              {field.placeholder}
                            </label>
                          )}
                        </div>
                      ) : field.type === 'select' ? (
                        <select
                          id={field.label}
                          name={field.label}
                          value={formData[field.label] || ''}
                          onChange={handleChange}
                          className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                        >
                          <option
                            value=''
                            disabled
                          >
                            {field.placeholder}
                          </option>
                          {field.options.map((option) => (
                            <option
                              key={option}
                              value={option}
                            >
                              {option}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <input
                          id={field.label}
                          name={field.label}
                          type='text'
                          placeholder={field.placeholder}
                          value={formData[field.label] || ''}
                          onChange={handleChange}
                          className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                        />
                      )}
                    </div>
                  ))}

                  <button
                    type='button'
                    onClick={handleSaveChanges}
                    className='w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600'
                  >
                    Save Changes
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

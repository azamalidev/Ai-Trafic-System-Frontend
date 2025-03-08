import React from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { addRequest } from '../redux/action/request';

const Vehicle4 = ({ formData, setFormData }) => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      ownerDetail: { ...prev.ownerDetail, [name]: value },
    }));
  };

  const handlePhoneChange = (e) => {
    const { value } = e.target;
    setFormData((prev) => ({
      ...prev,
      ownerDetail: { ...prev.ownerDetail, ownerPhone: value },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    formData.userId = localStorage.getItem('userId');
    formData.userType = 'ProLeadPartner';
    dispatch(addRequest(formData));
  };

  return (
    <div className='min-h-screen  flex items-start justify-center pt-0 px-4'>
      <ToastContainer />
      <div className='w-full max-w-lg bg-white py-6 px-4 rounded-md'>
        <h2 className='text-3xl font-semibold text-black mb-9 text-center'>
          Owner Details
        </h2>
        <form
          onSubmit={handleSubmit}
          className='space-y-6'
        >
          <div className='flex flex-col space-y-4'>
            <input
              type='text'
              id='ownerName'
              name='ownerName'
              value={formData.ownerDetail.ownerName}
              onChange={handleChange}
              placeholder='Enter owner name'
              className='w-96 px-4 py-2 border border-gray-900 rounded-md focus:ring-2 focus:ring-teal-500 focus:outline-none'
              required
            />
          </div>
          <div className='flex flex-col space-y-4'>
            <input
              type='tel'
              id='ownerPhone'
              name='ownerPhone'
              value={formData.ownerDetail.ownerPhone}
              onChange={handlePhoneChange}
              placeholder='Enter phone number'
              className='w-96 px-4 py-2 border border-gray-900 rounded-md focus:ring-2 focus:ring-teal-500 focus:outline-none'
            />
          </div>
          <div className='flex flex-col space-y-4'>
            <input
              type='text'
              id='ownerAddress'
              name='ownerAddress'
              value={formData.ownerDetail.ownerAddress}
              onChange={handleChange}
              placeholder='Enter owner address'
              className='w-96 px-4 py-2 border border-gray-900 rounded-md focus:ring-2 focus:ring-teal-500 focus:outline-none'
              required
            />
          </div>
          <div className='flex flex-col space-y-4'>
            <input
              type='email'
              id='ownerEmail'
              name='ownerEmail'
              value={formData.ownerDetail.ownerEmail}
              onChange={handleChange}
              placeholder='Enter owner email'
              className='w-96 px-4 py-2 border border-gray-900 rounded-md focus:ring-2 focus:ring-teal-500 focus:outline-none'
            />
          </div>
          <button
            type='submit'
            className='w-96 bg-teal-500 text-white py-2 rounded-md hover:bg-teal-600 transition-colors'
          >
            Generate Lead
          </button>
        </form>
      </div>
    </div>
  );
};

export default Vehicle4;

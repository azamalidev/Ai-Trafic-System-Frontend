import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import {addRequest} from '../redux/action/request'
const QuickUpload = () => {
  const dispatch = useDispatch();
  const [files, setFiles] = useState({
    vehicleDetailURL: null,
    previousPolicyURL: null,
  });

  const handleFileChange = (event, field) => {
    const selectedFile = event.target.files[0];
    setFiles((prev) => ({ ...prev, [field]: selectedFile }));
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  const handleUpload = async () => {
    const { vehicleDetailURL, previousPolicyURL } = files;

    if (vehicleDetailURL && previousPolicyURL) {
    
        const vehicleDetailBase64 = await convertToBase64(vehicleDetailURL);
        const previousPolicyBase64 = await convertToBase64(previousPolicyURL);
        files.userId = localStorage.getItem('userId');
        files.userType = 'ProLeadPartner';
        files.vehicleDetailURL= vehicleDetailBase64;
        files.previousPolicyURL= previousPolicyBase64;
        dispatch(addRequest(files));
      
    } else {
      toast.error('Please select both files before uploading!');
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center p-4'>
      <ToastContainer/>
      <div className='bg-white w-full max-w-4xl rounded-lg md:p-10'>
        <div>
          {/* Vehicle Detail Section */}
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              Vehicle Detail / Registration Certificate RC{' '}
              <span className='text-red-500'>
                ( Note: File should have all the vehicle details )
              </span>
            </label>
            <div className='border-2 border-dashed border-gray-300 rounded-lg p-6 text-center'>
              <div className='flex flex-col items-center space-y-2'>
                <svg
                  className='w-12 h-12 text-blue-500'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M3 10l9-9m0 0l9 9m-9-9v12m4-4H8m2-4h4m-6 4H5m6-4h2'
                  />
                </svg>
                <input
                  type='file'
                  accept='.png, .pdf'
                  onChange={(e) => handleFileChange(e, 'vehicleDetailURL')}
                  className='hidden'
                  id='vehicleDetailURL'
                />
                <label
                  htmlFor='vehicleDetailURL'
                  className='cursor-pointer text-sm text-gray-500'
                >
                  Drag and drop files to upload
                </label>
                <p className='text-xs text-gray-400'>
                  Only PNG and PDF files are supported.
                </p>
              </div>
            </div>
          </div>

          {/* Previous Policy Section */}
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              Previous Policy
            </label>
            <div className='border-2 border-dashed border-gray-300 rounded-lg p-6 text-center'>
              <div className='flex flex-col items-center space-y-2'>
                <svg
                  className='w-12 h-12 text-blue-500'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M3 10l9-9m0 0l9 9m-9-9v12m4-4H8m2-4h4m-6 4H5m6-4h2'
                  />
                </svg>
                <input
                  type='file'
                  accept='.png, .pdf'
                  onChange={(e) => handleFileChange(e, 'previousPolicyURL')}
                  className='hidden'
                  id='previousPolicyURL'
                />
                <label
                  htmlFor='previousPolicyURL'
                  className='cursor-pointer text-sm text-gray-500'
                >
                  Drag and drop files to upload
                </label>
                <p className='text-xs text-gray-400'>
                  Only PNG and PDF files are supported.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className='mt-8 text-center'>
          <button
            type='button'
            onClick={handleUpload}
            className='bg-blue-600 text-white py-3 px-6 rounded-lg text-sm font-medium hover:bg-blue-700 transition duration-300'
          >
            Save Vehicle Detail
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuickUpload;

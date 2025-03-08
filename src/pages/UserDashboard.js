import React, { useEffect, useState } from 'react';
import Footur from '../components/footur';
import Header from '../components/Header';
import RectangleImage from '../assets/image/Rectangle.png';
import Box from '../assets/icons/box';
import {
  fetchStates,
  getMyActivityPoints,
  getMyActivityHistory,
} from '../redux/action/request';
import { useDispatch, useSelector } from 'react-redux';

const UserDashboard = () => {
  const dispatch = useDispatch();
  const [startDate, useStartDate] = useState('2022-01-01T00:00:00.000Z');
  const [endDate, useEndDate] = useState('2025-01-01T00:00:00.000Z');

  const statesData = useSelector((state) => state.auth.states);
  const activityPoints = useSelector(
    (activityPoints) => activityPoints.auth.activityPoints
  );
  const pointsHistory = useSelector(
    (pointsHistory) => pointsHistory.auth.pointsHistory
  );

  console.log(
    statesData,
    activityPoints,
    pointsHistory,
    'hhhhhhhhhhhhhhhhhhhhhhh'
  );
  useEffect(() => {
    getMyStates();
  }, [1000]);

  const getMyStates = () => {
    const userId = localStorage.getItem('userId');
    dispatch(getMyActivityPoints(userId));
    dispatch(fetchStates(userId));
    const obj = {
      startDate,
      endDate,
    };
    dispatch(getMyActivityHistory(userId, obj));
  };

  return (
    <div className='relative'>
      <Header />

      {/* Rectangle image with overlayed text */}
      <div className='relative pt-4'>
        <img
          src={RectangleImage}
          alt='UserDashboard Info'
          className='w-11/12 mx-auto h-auto' // Reduces width to 91% and centers the image
        />

        <div className='absolute inset-0 flex justify-around'>
          {/* Each text group */}
          <div className='flex items-center justify-start  gap-3 px-4'>
            <span className='text-4xl font-bold'>
              {statesData?.totalRequests}
            </span>
            <span className='text-sm mt-[-30px] mr-[-90px]'>Total Request</span>
          </div>

          <div className='flex items-center justify-center gap-3 px-4'>
            <span className='text-4xl font-bold'>
              {statesData?.requestInReviewTotal}
            </span>
            <span className='text-sm mt-[-10px] mr-[-20px]'>
              Request Under
              <br /> Review
            </span>
          </div>

          <div className='flex items-center justify-center gap-3 px-4'>
            <span className='text-4xl font-bold'>
              {statesData?.quotationMadeUnPaidTotal}
            </span>
            <span className='text-sm mt-[-10px] mr-[-20px]'>
              Ready Quotation /<br /> Unpaid
            </span>
          </div>

          <div className='flex items-center justify-center  gap-3 px-4'>
            <span className='text-4xl font-bold'>
              {statesData?.quotationMadeAndPaidTotal}
            </span>
            <span className='text-sm mt-[-10px] mr-[-50px]'>
              Ready Quotation / <br />
              Paid
            </span>
          </div>

          <div className='flex items-center justify-center gap-3 px-4'>
            <span className='text-4xl font-bold'>
              {statesData?.purchaseRequestTotal}
            </span>
            <span className='text-sm mt-[-20px] mr-[-10px]'>
              Purchased Policy
            </span>
          </div>
        </div>
      </div>

      <div
        style={{
          background: '#1D1D41', // Background color for the section
          color: '#fff', // Text color
          borderRadius: '8px', // Rounded corners
          padding: '10px', // Padding around the content
          display: 'flex', // Flexbox layout to arrange items
          justifyContent: 'space-between', // Space between elements
          alignItems: 'center', // Vertically center elements
          gap: '7px', // Gap between items
          marginTop: '20px', // Move the element lower by adding margin-top
          marginLeft: 'auto', // Center horizontally
          marginRight: 'auto', // Center horizontally
          height: '300px', // Reduced height
          maxWidth: '95%', // Allow width to be dynamic but not exceed 90% of the parent container
        }}
      >
        {/* Your content goes here */}

        <div
          style={{
            background: '#fff', // White background for the main rectangle
            color: '#71717A', // Black text color
            borderRadius: '12px', // Increased rounded corners
            padding: '15px', // Padding around the content
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Optional shadow for a distinct rectangle
            width: '30%', // Reduced width (adjust this to your preference)
            height: '80%', // Adjust height as needed
            margin: '0 auto', // Center the rectangle horizontally
          }}
        >
          {/* Box icon */}
          <div className='absolute top-4 right-4'>
            <box className='w-8 h-8 text-gray-600' />{' '}
            {/* Adjust width, height, and color */}
          </div>

          <h3 style={{ fontSize: '18px', marginBottom: '50px' }}>
            Total Activity Points
          </h3>
          <p className='text-3xl font-inter text-black text-center mt-[-40px] ml-[-200px]'>
            {activityPoints?.totalActivityPoints}
          </p>
          <div className='absolute mt-[30px]'>
            <Box />
          </div>

          <div
            style={{
              marginLeft: '90px', // Moves the content a bit to the right
              marginTop: '-50px', // Moves the content a bit upward
              display: 'flex', // Use flex to keep items in a single line
              alignItems: 'center', // Vertically align items in the center
            }}
          >
            <div className='ml-[90px] mt-[-20px] flex flex-col items-start gap-4'>
              {/* Last Week Point */}
              <div className='flex flex-col'>
                <p className='m-0 font-sans'>Last Week Point</p>
                <div className='w-[50px] h-[30px] bg-gray-300 flex items-center justify-center rounded-md'>
                  <p className='m-0 font-sans text-black'>
                    {' '}
                    {activityPoints?.lastWeekPoints}
                  </p>
                </div>
              </div>

              {/* This Month Point */}
              <div className='flex flex-col'>
                <p className='m-0'>This Month Point</p>
                <div className='w-[50px] h-[30px] bg-gray-300 flex items-center justify-center rounded-md'>
                  <p className='m-0 font-sans text-black'>
                    {' '}
                    {activityPoints?.lastMonthPoints}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='flex-[2] px-2'>
          <h3>Activity Point History</h3>
          <div className='overflow-x-auto'>
            <table className='w-full text-white ml-[10px] mt-[5px] border-collapse border-spacing-0'>
              <thead>
                <tr>
                  <th className='text-left text-[12px]'>Lead Detail</th>
                  <th className='text-[12px]'>Date</th>
                  <th className='text-[12px]'>Act. Points</th>
                  <th className='text-[12px]'>Expected Date</th>
                  <th className='text-[12px]'>Status</th>
                </tr>
              </thead>
              <tbody>
                {pointsHistory.length === 0 ? (
                  <tr>
                    <td
                      colSpan='5'
                      className='text-center pt-[70px] pb-[70px]  text-gray-500'
                    >
                      No Activity Points History found
                    </td>
                  </tr>
                ) : (
                  pointsHistory.map((entry, index) => (
                    <tr key={index}>
                      <td className='flex items-center gap-2 p-[2px] text-[12px]'>
                        <img
                          src={entry?.paymentDetail?.companyLogo}
                          alt='Profile'
                          className='w-8 h-8 object-cover rounded-full' // Responsive image with fixed size
                        />
                        {entry?.paymentDetail?.lead}
                        <br />
                        {entry?.paymentDetail?.coverAmount}
                      </td>
                      <td className='text-center p-[2px] text-[12px] px-2'>
                        {entry.registrationDate
                          ? new Date(entry.registrationDate).toLocaleDateString(
                              'en-GB'
                            )
                          : 'N/A'}
                      </td>
                      <td className='text-center text-[12px]'>
                        <span className='bg-[#193345] py-1 px-2 rounded'>
                          {entry?.paymentDetail?.activityPointsReceived}
                        </span>
                      </td>
                      <td className='p-[2px] text-[12px] px-2 text-center'>
                        {entry?.paymentDate
                          ? new Date(entry.paymentDate).toLocaleDateString(
                              'en-GB'
                            )
                          : 'N/A'}
                      </td>
                      <td className='p-[2px] text-[12px] text-center'>
                        <span
                          className={
                            entry.paymentVarified
                              ? 'bg-[#193345] text-center py-1  px-2 rounded'
                              : 'bg-[#3C3C5A] text-center py-1  px-2 rounded'
                          }
                        >
                          {entry.paymentVarified ? 'Varified' : 'Pending'}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '60px' }}>
        <Footur />
      </div>
    </div>
  );
};

export default UserDashboard;

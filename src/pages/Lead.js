import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa'; // Import icons
import Footur from '../components/footur';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import NextIcon from '../assets/icons/next';
import DownloadIcon from '../assets/icons/download';
import { getMyLead } from '../redux/action/request';
import { useDispatch, useSelector } from 'react-redux';

const Lead = () => {
  const { leads } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  console.log(leads);

  useEffect(() => {
    getMyLeads();
  }, [1000]);

  const getMyLeads = () => {
    const userId = localStorage.getItem('userId');
    dispatch(getMyLead(userId));
  };

  const [editingLead, setEditingLead] = useState(null);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    // setLeads(leads.filter((lead) => lead.id !== id));
  };

  const handleEdit = (lead) => {
    setEditingLead(lead);
  };

  const handleSaveEdit = () => {
    // setLeads(
    //   leads.map((lead) => (lead.id === editingLead.id ? editingLead : lead))
    // );
    setEditingLead(null);
  };

  const goToRequestList = () => {
    navigate('/request-list');
  };

  return (
    <div className='min-h-screen flex flex-col bg-gray-50'>
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className='flex-grow px-4 sm:px-8 py-6'>
        {/* Title */}
        <h1 className='text-2xl font-semibold text-gray-800 mb-6 text-center'>
          Lead Gen Pro Request
        </h1>

        {/* Tabs */}
        <div className='flex justify-center space-x-4 mb-6'>
          <button className='px-4 py-2 bg-blue-500 text-white rounded-md'>
            All
          </button>
          <button
            className='px-4 py-2 bg-gray-200 text-gray-600 rounded-md'
            onClick={goToRequestList}
          >
            Quotation Made
          </button>
          <button className='px-4 py-2 bg-gray-200 text-gray-600 rounded-md'>
            Payment Done
          </button>
        </div>

        <div className='grid md:grid-cols-2 gap-4'>
          {leads.map((lead) => (
            <div
              key={lead._id}
              className={
                lead?.comments?.length > 0
                  ? 'bg-[#FCF2F2] shadow-md rounded-lg p-6 relative border border-gray-200'
                  : 'bg-white shadow-md rounded-lg p-6 relative border border-gray-200'
              }
            >
              {/* Title */}
              <div className='mb-2'>
                {lead.vehicleChassis ? (
                  <h2 className='text-xl font-semibold text-black'>
                    {lead?.vehicleModel}
                  </h2>
                ) : (
                  ''
                )}
              </div>

              {/* Make */}
              <div className='mb-2'>
                {lead.make ? (
                  <span className='text-sm bg-black text-white px-3 py-1 rounded-full absolute top-[26px] left-[200px]'>
                    Make: {lead.make}
                  </span>
                ) : (
                  ''
                )}
              </div>

              {/* Submitted */}
              <div className='mb-4'>
                {lead?.registrationDate ? (
                  <p className='text-sm text-gray-600 absolute top-[26px] right-[40px]'>
                    Submitted: {lead?.registrationDate}
                  </p>
                ) : (
                  ''
                )}
              </div>

              {/* Additional Content */}
              <div className='text-sm '>
                <p>
                  <span className='text-[#0000FF] font-bold'>Status:</span>

                  <span style={{ color: '#008000' }}>
                    {[
                      { key: 'requestSent', label: 'Request Sent' },
                      { key: 'quotationMade', label: 'Quotation Made' },
                      { key: 'paymentDone', label: 'Payment Done' },
                      { key: 'policyUploaded', label: 'Policy Uploaded' },
                    ]
                      .filter((stage) => lead[stage?.key]) // Filter out false stages
                      .map((stage, index, array) => (
                        <span
                          key={index}
                          className='inline-flex items-center'
                        >
                          {stage?.label}
                          {/* Render the icon only if there's a next stage in the filtered array */}
                          {index < array.length - 1 && (
                            <NextIcon className='inline-block mx-1' />
                          )}
                        </span>
                      ))}
                  </span>
                </p>

                <p className='mt-2'>{lead?.message}</p>
                {lead?.registrationNumber ? (
                  <p className='mt-2 font-bold'>
                    Register Number: {lead?.registrationNumber}
                  </p>
                ) : (
                  ''
                )}
              </div>

              {lead.alert && (
                <p className='mt-2 text-[#FF0000]'>Alert: {lead.alert}</p>
              )}
              {lead?.paymentDone &&
                (lead?.paymentDone &&
                lead?.paymentDetail?.activityPointsReceived &&
                lead?.paymentVarified ? (
                  <p className=' ml-64 inline-block px-2 py-0 bg-green-200 absolute  text-[#008000] rounded-full'>
                    Activity Point Sent:{' '}
                    {lead?.paymentDetail?.activityPointsReceived}
                  </p>
                ) : (
                  <p className=' ml-64 inline-block px-2 py-0 bg-red-200 absolute  text-[#FF0000] rounded-full'>
                    Activity Point Pending:{' '}
                    {lead?.paymentDetail?.activityPointsReceived}
                  </p>
                ))}

              {lead.policyUploaded ? (
                <div className='mt-2 text-blue-900 font-Intern flex items-center w-full'>
                  Download Issaurance Policy{' '}
                  <DownloadIcon className=' ml-64 cursor-pointer' />
                </div>
              ) : (
                <>
                  {' '}
                  {lead.quotationMade && lead?.paymentDone == false ? (
                    <div className='mt-2 text-blue-900 font-Intern flex items-center w-full'>
                      Pay For Quotation{' '}
                      <DownloadIcon className=' ml-64 cursor-pointer' />
                    </div>
                  ) : (
                    ''
                  )}
                </>
              )}

              {lead?.comments?.length > 0 && (
                <p className=' text-[#FF0000]'>
                  {' '}
                  Alert : {lead?.comments[0]?.discription}
                </p>
              )}
              {/* Edit and Delete Icons */}
              {!(
                lead.requestSent &&
                lead.quotationMade &&
                lead.paymentDone &&
                lead.policyUploaded
              ) && (
                <div className='absolute bottom-4 right-4 flex space-x-2'>
                  <button
                    onClick={() => handleEdit(lead)}
                    className='text-blue-500 hover:text-blue-700'
                  >
                    <FaEdit size={18} />
                  </button>
                  <button
                    onClick={() => handleDelete(lead.id)}
                    className='text-red-500 hover:text-red-700'
                  >
                    <FaTrash size={18} />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Edit Modal */}
      {editingLead && (
        <div className='fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50'>
          <div className='bg-white p-6 rounded-md shadow-lg w-96'>
            <h2 className='text-lg font-semibold mb-4'>Edit Lead</h2>
            <label className='block mb-2'>
              Title:
              <input
                type='text'
                value={editingLead.title}
                onChange={(e) =>
                  setEditingLead({
                    ...editingLead,
                    title: e.target.value,
                  })
                }
                className='block w-full mt-1 p-2 border rounded-md'
              />
            </label>
            <label className='block mb-2'>
              Message:
              <textarea
                value={editingLead.message}
                onChange={(e) =>
                  setEditingLead({
                    ...editingLead,
                    message: e.target.value,
                  })
                }
                className='block w-full mt-1 p-2 border rounded-md'
              />
            </label>
            <div className='flex justify-end space-x-2 mt-4'>
              <button
                onClick={() => setEditingLead(null)}
                className='px-4 py-2 bg-gray-200 text-gray-700 rounded-md'
              >
                Cancel
              </button>
              <button
                onClick={handleSaveEdit}
                className='px-4 py-2 bg-blue-500 text-white rounded-md'
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footur />
    </div>
  );
};

export default Lead;

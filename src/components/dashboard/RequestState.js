import React,  {useEffect} from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels'; // Import plugin
import { getMyPolicyByStageStatus } from '../../redux/action/request';
import { useDispatch, useSelector } from 'react-redux';
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const RequestState = () => {
 const dispatch = useDispatch();
  const { requestByStatus } = useSelector((state) => state.auth);
  console.log(requestByStatus, 'requestByStatus'); 

    useEffect(() => {
      dispatch(getMyPolicyByStageStatus());
    }, [1000]);

   const data = {
    labels: [
      'Pending Review',
      'Quotation Made',
      'Payment Done',
      'Policy Uploaded',
    ],
    datasets: [
      {
        data: [requestByStatus?.requestSent, requestByStatus?.quotationMade, requestByStatus?.paymentDone, requestByStatus?.policyUploaded], // Adjust percentages as needed
        backgroundColor: ['#FACC15', '#C026D3', '#14B8A6', '#4ADE80'], // Tailwind colors
        hoverBackgroundColor: ['#EAB308', '#A21CAF', '#0D9488', '#22C55E'],
      },
    ],
  };

  // Options for the chart
  const options = {
    cutout: '70%', // Creates the donut shape
    plugins: {
      legend: {
        display: false, // Disable default legend
      },
      tooltip: {
        enabled: true, // Enable tooltips on hover
      },
      datalabels: {
        formatter: (value, context) => {
          const dataset = context.chart.data.datasets[0].data;
          const total = dataset.reduce((acc, curr) => acc + curr, 0);
          const percentage = ((value / total) * 100).toFixed(1); // Show 1 decimal place
          return `${percentage}%`; // Return percentage
        },
        color: '#000', // Label text color
        font: {
          size: 12, // Font size for labels
          weight: 'bold',
        },
        anchor: 'end', // Label position relative to the segment
        align: 'start', // Align label text
      },
    },
  };

  return (
    <div className='flex justify-center  p-2'>
      <div className='flex flex-col items-center sm:items-start'>
        {/* Doughnut Chart Section */}
        <div className='relative w-48 sm:w-64'>
          <Doughnut data={data} options={options} />
          {/* Center Text */}
          <div className='absolute inset-0 flex flex-col items-center justify-center'>
            <p className='font-bold text-sm sm:text-lg'>Projected from all</p>
            <p className='font-bold text-sm sm:text-lg'>Request</p>
          </div>
        </div>

        {/* Legend Section */}
        <div className='mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4'>
          <div className='flex items-center space-x-2'>
            <div className='w-4 h-4 rounded-full bg-yellow-500'></div>
            <span className='text-xs sm:text-sm font-medium'>
              Pending Review
            </span>
          </div>
          <div className='flex items-center space-x-2'>
            <div className='w-4 h-4 rounded-full bg-pink-600'></div>
            <span className='text-xs sm:text-sm font-medium'>
              Quotation Made
            </span>
          </div>
          <div className='flex items-center space-x-2'>
            <div className='w-4 h-4 rounded-full bg-teal-500'></div>
            <span className='text-xs sm:text-sm font-medium'>
            Payment Done
            </span>
          </div>
          <div className='flex items-center space-x-2'>
            <div className='w-4 h-4 rounded-full bg-green-500'></div>
            <span className='text-xs sm:text-sm font-medium'>Policy Uploaded</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestState;

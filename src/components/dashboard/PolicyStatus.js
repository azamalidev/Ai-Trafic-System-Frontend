import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { getMyPolicyByStatus } from '../../redux/action/request';
import { useDispatch, useSelector } from 'react-redux';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const PolicyStatus = () => {
  const dispatch = useDispatch();
  const { policy } = useSelector((state) => state.auth);
  const [years, setYears] = useState([]);
  const [activeRequests, setActiveRequests] = useState([]);
  const [expireRequests, setExpireRequests] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Extract values and set state
    const extractedYears = [];
    const extractedActiveRequests = [];
    const extractedExpireRequests = [];
    let totalNow = 0;
    policy?.forEach((item) => {
      extractedYears.push(item.year);

      extractedActiveRequests.push(item.activeRequest);
      extractedExpireRequests.push(item.expireRequest);
      console.log(item, 'item.expireRequest')

      if (item.activeRequest > 0) {
        totalNow= totalNow+item.activeRequest;
      }
      if (item.expireRequest > 0) {
        totalNow= totalNow+item.expireRequest;
      }
    });
    setTotal(totalNow);
    setYears(extractedYears);
    setActiveRequests(extractedActiveRequests);
    setExpireRequests(extractedExpireRequests);
  }, [policy]);

  useEffect(() => {
    dispatch(getMyPolicyByStatus([2024, 2025, 2026, 2027]));
  }, [1000]);
  const data = {
    labels: years, // X-axis labels
    datasets: [
      {
        label: 'Expired',
        data: expireRequests, // Expired policy data (0 to 150)
        backgroundColor: '#FF3B30', // Red background
        borderColor: '#FF3B30',
        tension: 0.3, // Smooth curve
        fill: true,
      },
      {
        label: 'Active',
        data: activeRequests, // Active policy data (starts from 200)
        backgroundColor: '#4CD964', // Green background
        borderColor: '#4CD964',
        tension: 0.3, // Smooth curve
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Ensures responsiveness
    plugins: {
      legend: {
        display: true,
        position: 'top', // Legend position
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        position: 'right', // Move Y-axis labels to the right

        ticks: {
          callback: function (value) {
            return value; // Customize Y-axis tick labels if needed
          },
        },
      },
    },
  };

  return (
    <div className='bg-white  w-full max-w-6xl mx-auto lg:mx-0 lg:w-5/6  relative p-4'>
      <div className='absolute right-0 flex text-gray-600'>
        <p className='text-sm font-medium mr-2'>Total</p>
        <p className='text-2xl font-bold'>{total}</p>
      </div>
      <h2 className='text-2xl font-semibold mb-6 text-center lg:text-left'>
        Course Status
      </h2>
      <div className='h-[250px] lg:h-[250px] w-[300px] lg:w-[400px]'>
        <Line
          data={data}
          options={options}
        />
      </div>
    </div>
  );
};

export default PolicyStatus;

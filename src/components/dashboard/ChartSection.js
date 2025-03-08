import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';
import { getMyLeadByVehicleType } from '../../redux/action/request';
import * as XLSX from 'xlsx';
import DownloadIcon from '../../assets/icons/download';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ChartSection = () => {
  const { requestVehicleStat } = useSelector((state) => state.auth);
  const handleExport = () => {
    // Create a new workbook
    const wb = XLSX.utils.book_new();

    // Convert the JSON data into a worksheet
    const ws = XLSX.utils.json_to_sheet(requestVehicleStat);

    // Append the worksheet to the workbook
    XLSX.utils.book_append_sheet(wb, ws, 'Requests Data');

    // Generate and download the Excel file
    XLSX.writeFile(wb, `vehicle_requests_${selectedYear}.xlsx`);
  };
  const [selectedYear, setSelectedYear] = useState('2025');
  const years = [
    '2023',
    '2024',
    '2025',
    '2026',
    '2027',
    '2028',
    '2029',
    '2030'
  ];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMyLeadByVehicleType('2025'));
  }, [1000]);

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
    setMonth([]);
    setCarData([]);
    setBikeData([]);
    dispatch(getMyLeadByVehicleType(e.target.value));
  };

  const [month, setMonth] = useState([]);
  const [carData, setCarData] = useState([]);
  const [bikeData, setBikeData] = useState([]);
  const [vehicleData, setVehicleData] = useState([]);

  useEffect(() => {
    if(month?.length == 0){
      for (let x = 0; x < requestVehicleStat?.length; x++) {
        setMonth((prevMonths) => [...prevMonths, requestVehicleStat[x].month]);
        setCarData((prevCar) => [
          ...prevCar,
          requestVehicleStat[x].totalCarRequest,
        ]);
        setBikeData((prevBike) => [
          ...prevBike,
          requestVehicleStat[x].totalBikeRequest,
        ]);
        setVehicleData((prevVehicle) => [
          ...prevVehicle,
          requestVehicleStat[x].totalCommercialVehicleRequest,
        ]);
  
        console.log(requestVehicleStat[x]);
      }
    }
   
  }, [requestVehicleStat]);
  // Chart data
  const data = {
    labels: month,
    datasets: [
      {
        label: 'Online',
        data: bikeData,
        backgroundColor: '#6359E9',
      },
      {
        label: 'Physical',
        data: carData,
        backgroundColor: '#64CFF6',
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Course Enrollment (2025)',
      },
    },
  };

  return (
    <div className='bg-white p-2  '>
      <h2 className='text-sm font-semibold mb-4 flex justify-between items-center'>
      Online and Physical Course Registeration
        <div className='flex items-center space-x-2'>
          <button
            className=' rounded px-1 py-1'
            onClick={() => handleExport()}
          >
            <DownloadIcon className='w-5 h-5' />
          </button>
          <select
            id='year-select'
            value={selectedYear}
            onChange={handleYearChange}
            className='border border-gray-300 text-sm rounded-md p-1 focus:outline-none focus:ring-2 focus:ring-blue-500'
          >
            {years.map((year) => (
              <option
                key={year}
                value={year}
              >
                {year}
              </option>
            ))}
          </select>
        </div>
      </h2>

      <div className='h-100  w-[200px] lg:w-[400px] '>
        <Bar
          data={data}
          options={options}
        />
      </div>
    </div>
  );
};

export default ChartSection;

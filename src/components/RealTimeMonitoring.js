import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const RealTimeMonitoring = () => {
  // Example data for charts
  const trafficData = [
    { name: 'Intersection A', vehicles: 400, speed: 45 },
    { name: 'Intersection B', vehicles: 300, speed: 30 },
    { name: 'Intersection C', vehicles: 200, speed: 50 },
    { name: 'Intersection D', vehicles: 500, speed: 20 },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Real-Time Monitoring</h1>
        <p className="text-gray-600">
          Monitor live traffic conditions and respond to incidents in real time.
        </p>
      </div>

      {/* Live Traffic Map */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Live Traffic Map</h2>
        <div className="bg-white p-4 rounded-lg shadow">
          <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '400px', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
              <Popup>
                Intersection A: High Congestion
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>

      {/* Traffic Metrics */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Traffic Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-700">Vehicle Count</h3>
            <p className="text-2xl font-bold text-blue-600">1,234</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-700">Average Speed</h3>
            <p className="text-2xl font-bold text-green-600">45 km/h</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-700">Wait Time</h3>
            <p className="text-2xl font-bold text-red-600">2.5 mins</p>
          </div>
        </div>
      </div>

      {/* Incident Alerts */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Incident Alerts</h2>
        <div className="bg-white p-4 rounded-lg shadow">
          <ul className="space-y-2">
            <li className="text-red-600">Accident at Intersection A. Use alternate route.</li>
            <li className="text-yellow-600">Road closure at Main Street. Expect delays.</li>
          </ul>
        </div>
      </div>

      {/* Traffic Signal Status */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Traffic Signal Status</h2>
        <div className="bg-white p-4 rounded-lg shadow">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={trafficData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="vehicles" fill="#8884d8" />
              <Bar dataKey="speed" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default RealTimeMonitoring;
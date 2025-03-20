import React, { useState } from "react";
import axios from "axios";

const BACKEND_URL = "http://localhost:5000/upload"; // Update if backend URL changes

function UploadVideos() {
  const [selectedFiles, setSelectedFiles] = useState({
    north: null,
    south: null,
    east: null,
    west: null,
  });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e, direction) => {
    setSelectedFiles((prevFiles) => ({
      ...prevFiles,
      [direction]: e.target.files[0], // Store only 1 file per input
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Ensure all 4 files are selected
    if (!selectedFiles.north || !selectedFiles.south || !selectedFiles.east || !selectedFiles.west) {
      alert("Please upload exactly 4 videos.");
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("videos", selectedFiles.north);
    formData.append("videos", selectedFiles.south);
    formData.append("videos", selectedFiles.east);
    formData.append("videos", selectedFiles.west);

    try {
      const response = await axios.post(BACKEND_URL, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setResult(response.data);
    } catch (error) {
      console.error("Error uploading files:", error);
      alert("Error uploading videos.");
    }

    setLoading(false);
  };

  return (
    <div className="relative py-12 px-20 bg-white">
      <div className="max-w-full mx-auto bg-white rounded-lg shadow-2xl p-8">
        <h1 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#1a2a6c] via-[#b21f1f] to-[#fdbb2d] mb-4">
          🚗 AI Based Traffic Management
        </h1>
        <hr className="mb-6 border-gray-300" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                🚦 Optimize Traffic Flow with AI 🤖
              </h2>
              <p className="text-gray-600">
                Enhance your city's traffic management with our smart adaptive system. Our technology optimizes traffic light timings based on real-time data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                📹 Upload Your Traffic Videos
              </h2>
              <p className="text-gray-600 mb-4">
                Select 4 videos showing different roads at an intersection. Our system will analyze these videos to optimize traffic light timings.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                {["north", "south", "east", "west"].map((direction) => (
                  <div key={direction}>
                    <label className="block text-sm font-medium text-gray-700">
                      🚦 {direction.charAt(0).toUpperCase() + direction.slice(1)} Road:
                    </label>
                    <input
                      type="file"
                      accept="video/*"
                      onChange={(e) => handleFileChange(e, direction)}
                      className="mt-1 block w-full border border-gray-300 rounded-md p-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                ))}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-[#1a2a6c] via-[#b21f1f] to-[#fdbb2d] text-white py-2 px-4 rounded-md hover:from-[#1a2a6c] hover:to-[#b21f1f] transition-all duration-300 transform hover:scale-105 disabled:opacity-50"
                >
                  {loading ? "Processing..." : "Run Model"}
                </button>
              </form>
            </section>
          </div>

          <section className="bg-gray-50 p-6 rounded-lg shadow-inner">
            {!loading && !result && (
              <p className="text-gray-500 text-center">
                Optimization results will show here <br />
                <span className="text-2xl">🚦🚦🚦🚦</span>
              </p>
            )}
            {loading && (
              <p className="text-gray-600 text-center">Processing videos, it may take a few minutes...</p>
            )}
            {result && !result.error && (
              <>
                <h2 className="text-2xl font-semibold text-green-600 mb-4">
                  ✅ Optimization Results
                </h2>
                <p className="text-gray-600 mb-4">
                  Here are the recommended green times for each direction:
                </p>
                <ul className="space-y-2">
                  {["north", "south", "east", "west"].map((direction) => (
                    <li key={direction} className="text-gray-700">
                      🚦 {direction.charAt(0).toUpperCase() + direction.slice(1)}:{" "}
                      <span className="font-semibold">{result[direction]}</span> seconds
                    </li>
                  ))}
                </ul>
              </>
            )}
            {result && result.error && (
              <div>
                <h2 className="text-2xl font-semibold text-red-600 mb-2">Error:</h2>
                <p className="text-gray-600">{result.error}</p>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}

export default UploadVideos;
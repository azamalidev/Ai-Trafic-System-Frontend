import React, { useState } from "react";

const VehicleDetailsForm = ({ onSave }) => {
  const [formData, setFormData] = useState({
    registerNumber: "",
    make: "",
    model: "",
    ccGvc: "",
    registrationDate: "",
    manufactureYear: "",
    fuelType: "",
    chassisNumber: "",
    engineNumber: "",
    policyFile: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "policyFile" && files[0]) {
      const file = files[0];
      const reader = new FileReader();
  
      // Event listener for when file is loaded
      reader.onloadend = () => {
        setFormData((prevData) => ({
          ...prevData,
          policyFile: reader.result, // Base64 string here
        }));
      };
  
      // Read the file as a Base64 string
      reader.readAsDataURL(file);
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Vehicle Details Submitted:", formData);
    if (onSave) {
      onSave(formData); // Send the form data to the parent component
    }
  };

  return (
    <div className="min-h-screen flex justify-center  mt-[-20px] md:p-1 pt-2">
      <div className="w-full max-w-3xl md:p-1 px-8">
        <form onSubmit={handleSubmit} className="space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <input
                type="text"
                name="registerNumber"
                value={formData.registerNumber}
                onChange={handleChange}
                className="w-80 border border-gray-900 rounded px-6 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Register Number"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="make"
                value={formData.make}
                onChange={handleChange}
                className="w-80 border border-gray-900 rounded px-6 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Make"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="model"
                value={formData.model}
                onChange={handleChange}
                className="w-80 border border-gray-900 rounded px-6 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Vehicle Model"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="ccGvc"
                value={formData.ccGvc}
                onChange={handleChange}
                className="w-80 border border-gray-900 rounded px-6 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="CC / GVC"
              />
            </div>
            <div>
              <input
                type="date"
                name="registrationDate"
                value={formData.registrationDate}
                onChange={handleChange}
                className="w-80 border border-gray-900 rounded px-6 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <input
                type="text"
                name="manufactureYear"
                value={formData.manufactureYear}
                onChange={handleChange}
                className="w-80 border border-gray-900 rounded px-6 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Manufacture Year"
              />
            </div>
            <div>
              <select
                name="fuelType"
                value={formData.fuelType}
                onChange={handleChange}
                className="w-80 border border-gray-900 rounded px-6 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Fuel Type</option>
                <option value="Petrol">Petrol</option>
                <option value="Diesel">Diesel</option>
                <option value="Electric">Electric</option>
              </select>
            </div>
            <div>
              <input
                type="text"
                name="chassisNumber"
                value={formData.chassisNumber}
                onChange={handleChange}
                className="w-80 border border-gray-900 rounded px-6 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Chassis Number"
              />
            </div>
          </div>

          {/* Additional fields */}
          <div className="flex justify-center -mt-90">
            <div className="w-1/2">
              <input
                type="text"
                name="engineNumber"
                value={formData.engineNumber}
                onChange={handleChange}
                className="w-80 border border-gray-900 rounded px-6 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Engine Number"
              />
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <div className="w-1/2">
              <input
                type="file"
                name="policyFile"
                onChange={handleChange}
                className="w-80 border border-gray-900 rounded px-6 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Attach Previous Policy"
              />
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <button
              type="submit"
              className="bg-blue-500 w-80 text-white px-6 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2  mr-20 focus:ring-blue-300"
            >
              Save Vehicle Detail
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VehicleDetailsForm;

import React, { useState } from "react";

const Vehicle2 = ({ onSave }) => {
  const [selectedPolicy, setSelectedPolicy] = useState(""); // Track the selected policy
  const [selectedPreviousPolicy, setSelectedPreviousPolicy] = useState(""); // Track the selected previous policy
  const [claimMade, setClaimMade] = useState(""); // Track the claim selection
  const [policyExpirydate, setPolicyExpirydate] = useState(""); // Track the expiry date
  const [policyMorethan90, setPolicyMorethan90] = useState(false); // Track the checkbox for previous policy expired more than 90 days ago

  const handleSave = () => {
    // Call onSave function with the current state values
    onSave(selectedPolicy, selectedPreviousPolicy, claimMade, policyExpirydate, policyMorethan90);
  };

  return (
    <div className="flex flex-col items-center bg-white p-80 md:p-6 max-w-2xl mx-auto mt-[-60px] "> 
      {/* Policy Type */}
      <div className="mb-6 text-center">
        <h3 className="font-medium text-lg mb-4">What type of policy do you want to buy?</h3>
        <div className="flex justify-center gap-6">
          {["Own Damage", "Comprehensive", "Third Party"].map((policy) => (
            <button
              key={policy}
              className={`border rounded-none py-3 px-8 transition duration-300 ease-in-out flex items-center justify-center ${selectedPolicy === policy ? "bg-transparent text-blue-500 border-blue-500" : "border-gray-900 text-gray-700 hover:border-black"}`}
              onClick={() => setSelectedPolicy(policy)}
            >
              <span className={`w-6 h-6 rounded-full ${selectedPolicy === policy ? "bg-blue-500" : "bg-transparent border-2 border-gray-300"} mr-2`} />
              {policy}
            </button>
          ))}
        </div>
      </div>

      {/* Previous Policy Type */}
      <div className="mb-10 text-center">
        <h3 className="font-medium text-lg mb-8">Previous policy type?</h3>
        <div className="flex flex-col md:flex-row justify-center gap-10">
          {[
            "Standalone Own Damage",
            "1 yr Own Damage + 5yr Third Party",
            "5 yr Third Party only",
          ].map((policy) => (
            <label
              key={policy}
              className={`flex items-center ${selectedPreviousPolicy === policy ? "text-blue-500" : ""}`}
            >
              <input
                type="radio"
                name="previous-policy"
                className="w-4 h-6 -mt-4 -ml-5 text-blue-600"
                checked={selectedPreviousPolicy === policy}
                onChange={() => setSelectedPreviousPolicy(policy)}
              />
              <span className="text-gray-700 text-sm whitespace-nowrap ml-6">
                {policy}
                <span className="block text-gray-900 text-xs mt-1">(Eligible for only cover)</span>
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Claim Made in Previous Year */}
      <div className="mb-6 text-center">
        <h3 className="font-medium text-lg mb-4">Made any claim in the previous year?</h3>
        <div className="flex justify-center ml-6 gap-24">
          {["Yes", "No"].map((claim) => (
            <label
              key={claim}
              className={`flex items-center gap-2 ${claimMade === claim ? "text-blue-500" : ""}`}
            >
              <input
                type="radio"
                name="claim"
                className="w-4 h-4 text-blue-600"
                checked={claimMade === claim}
                onChange={() => setClaimMade(claim)}
              />
              <span className="text-gray-700 ">{claim}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Expiry Date */}
      <div className="relative mb-9 flex justify-center items-center gap-4">
        <input
          type="date"
          id="expiry-date"
          className="border border-gray-900 rounded-none px-16 py-2 w-96 max-w-xs focus:ring-2 focus:ring-blue-500 peer placeholder-transparent"
          value={policyExpirydate}
          onChange={(e) => setPolicyExpirydate(e.target.value)}
        />
        <label
          htmlFor="expiry-date"
          className="absolute left-4 top-2 text-gray-400 text-sm pointer-events-none transition-all duration-200 peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-500"
        >
          Expiry Date
        </label>
      </div>

      {/* Checkbox */}
      <div className="flex items-center gap-2 mb-6">
        <input
          type="checkbox"
          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          checked={policyMorethan90}
          onChange={(e) => setPolicyMorethan90(e.target.checked)}
        />
        <label className="text-gray-700 text-sm">
          Previous policy expired more than 90 days ago
        </label>
      </div>

      {/* Save Button */}
      <button
        onClick={handleSave} // Trigger handleSave function on click
        className="bg-blue-500 w-96 max-w-xs text-white font-medium rounded-lg h-10 hover:bg-blue-600 transition"
      >
        Save
      </button>
    </div>
  );
};
export default Vehicle2;

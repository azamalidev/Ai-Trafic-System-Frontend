import React, { useState } from "react";

const DropdownPage = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const getContent = () => {
    switch (selectedOption) {
      case "how-to-create-account":
        return (
          <div>
            <h2 className="text-xl font-bold">How to Create an Account</h2>
            <p>To create an account, click on the "Sign Up" button on the homepage...</p>
          </div>
        );
      case "how-to-register-course":
        return (
          <div>
            <h2 className="text-xl font-bold">How to Register for a Course</h2>
            <p>To register for a course, log in to your account, go to the courses section...</p>
          </div>
        );
      case "how-to-setup-students-lms":
        return (
          <div>
            <h2 className="text-xl font-bold">How to Set Up Student's LMS</h2>
            <p>Setting up the LMS requires admin access. Follow these steps...</p>
          </div>
        );
      case "news-for-you":
        return (
          <div>
            <h2 className="text-xl font-bold">News for You</h2>
            <p>Stay updated with the latest news related to your courses...</p>
          </div>
        );
      default:
        return <div className="text-gray-500">Please select an option to see the content.</div>;
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-6">Single Page with Dropdowns</h1>

      <div className="space-y-4">
        <div className="dropdown">
          <select
            className="w-full p-3 border border-gray-300 rounded-md"
            value={selectedOption}
            onChange={handleDropdownChange}
          >
            <option value="">Select an option</option>
            <option value="how-to-create-account">How to Create an Account</option>
            <option value="how-to-register-course">How to Register for a Course</option>
            <option value="how-to-setup-students-lms">How to Set Up Student's LMS</option>
            <option value="news-for-you">News for You</option>
          </select>
        </div>

        <div className="content mt-6">
          {getContent()}
        </div>
      </div>
    </div>
  );
};

export default DropdownPage;

import React from "react";
import Header from "../components/Header";
import Footer from "../components/footur";
import { Key, Globe, Users, FileText, CheckCircle } from "lucide-react"; // Modern Icons

const SetupStudentsLMS = () => {
  const steps = [
    {
      icon: <Key className="w-8 h-8 text-white" />,
      title: "Obtain Admin Credentials",
      description: "Ensure you have the required admin credentials provided by your institution.",
    },
    {
      icon: <Globe className="w-8 h-8 text-white" />,
      title: "Access the LMS Portal",
      description: "Visit the LMS portal using the official link provided by the institution.",
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Configure User Accounts",
      description: "Add student accounts, assign roles, and set permissions for course access.",
    },
    {
      icon: <FileText className="w-8 h-8 text-white" />,
      title: "Upload Course Materials",
      description: "Upload relevant course materials, including PDFs, videos, and assignments.",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-white" />,
      title: "Test the Setup",
      description: "Conduct a test run to ensure students can log in and access their courses without issues.",
    },
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center p-4 sm:p-6">
        <div className="max-w-4xl w-full bg-white shadow-lg rounded-2xl p-6 sm:p-8 md:p-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-green-700 text-center mb-4 sm:mb-6">
            How to Set Up Student's LMS
          </h2>
          <p className="text-gray-600 text-center mb-6 sm:mb-8">
            Follow these simple steps to ensure proper LMS configuration.
          </p>

          <div className="space-y-8 sm:space-y-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 p-4 sm:p-6 bg-green-50 rounded-xl shadow-md transition-transform transform hover:scale-105 hover:shadow-lg"
              >
                <div className="bg-green-600 p-3 sm:p-4 rounded-full shadow-md">
                  {step.icon}
                </div>
                <div className="flex flex-col sm:items-start items-center text-center sm:text-left">
                  <h3 className="text-lg sm:text-xl font-semibold text-green-700">
                    {index + 1}. {step.title}
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SetupStudentsLMS;

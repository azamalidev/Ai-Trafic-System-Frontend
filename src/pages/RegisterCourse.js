import React from "react";
import Header from "../components/Header";
import Footer from "../components/footur";
import { LogIn, BookOpen, CheckSquare, ClipboardCheck, Mail } from "lucide-react"; // Modern Icons

const RegisterCourse = () => {
  const steps = [
    {
      icon: <LogIn className="w-8 h-8 text-white" />,
      title: "Log in to Your Account",
      description: "Use your student credentials to access the platform securely.",
    },
    {
      icon: <BookOpen className="w-8 h-8 text-white" />,
      title: "Navigate to the Courses Section",
      description: "Click on the 'Courses' tab to explore available courses.",
    },
    {
      icon: <CheckSquare className="w-8 h-8 text-white" />,
      title: "Select Your Desired Course",
      description: "Choose a course that fits your interests and learning goals.",
    },
    {
      icon: <ClipboardCheck className="w-8 h-8 text-white" />,
      title: "Complete Registration",
      description: "Fill out your details and click 'Register' to enroll in the course.",
    },
    {
      icon: <Mail className="w-8 h-8 text-white" />,
      title: "Receive Confirmation",
      description: "You will get a confirmation email once your registration is successful.",
    },
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center p-4 sm:p-6">
        <div className="max-w-4xl w-full bg-white shadow-lg rounded-2xl p-6 sm:p-8 md:p-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-green-700 text-center mb-4 sm:mb-6">
            Register for a Course
          </h2>
          <p className="text-gray-600 text-center mb-6 sm:mb-8">
            Follow these simple steps to enroll in your desired course.
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

export default RegisterCourse;

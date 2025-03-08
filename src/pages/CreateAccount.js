import React from "react";
import Header from "../components/Header";
import Footer from "../components/footur";
import { Home, UserPlus, ClipboardList, Send, Mail } from "lucide-react"; // Modern Icons

const CreateAccount = () => {
  const steps = [
    {
      icon: <Home className="w-8 h-8 text-white" />,
      title: "Go to the Homepage",
      description: "Visit our homepage and click on the 'Sign Up' button in the top right corner.",
    },
    {
      icon: <UserPlus className="w-8 h-8 text-white" />,
      title: "Click on 'Sign Up'",
      description: "Click the 'Sign Up' button to be redirected to the account creation page.",
    },
    {
      icon: <ClipboardList className="w-8 h-8 text-white" />,
      title: "Fill Out the Form",
      description: "Provide your name, email, and set a strong password for your account.",
    },
    {
      icon: <Send className="w-8 h-8 text-white" />,
      title: "Submit the Form",
      description: "Review your details and click 'Create Account' to proceed.",
    },
    {
      icon: <Mail className="w-8 h-8 text-white" />,
      title: "Confirm Your Email",
      description: "Check your email inbox for a confirmation link and activate your account.",
    },
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center p-4 sm:p-6">
        <div className="max-w-4xl w-full bg-white shadow-lg rounded-2xl p-6 sm:p-8 md:p-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-green-700 text-center mb-4 sm:mb-6">
            Create an Account
          </h2>
          <p className="text-gray-600 text-center mb-6 sm:mb-8">
            Follow these simple steps to set up your account in minutes.
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

export default CreateAccount;
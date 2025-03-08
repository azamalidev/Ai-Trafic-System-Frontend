import React from "react";
import Header from "../components/Header";
import Footer from "../components/footur";

const NewsForYou = () => {
  // Sample news data
  const newsData = [
    {
      id: 1,
      title: "Upcoming Course Registration Deadlines",
      date: "January 5, 2025",
      description: "Make sure to register for your courses before the deadline to avoid any late penalties.",
    },
    {
      id: 2,
      title: "New Features Added to Student LMS",
      date: "January 3, 2025",
      description: "Explore the new tools and features available in your LMS for better learning.",
    },
    {
      id: 3,
      title: "Campus Events for the Month",
      date: "January 10, 2025",
      description: "Check out the list of events happening on campus this month and participate!",
    },
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">News for You</h2>
          <p className="text-gray-600 mb-6">
            Stay updated with the latest news related to your courses and campus life.
          </p>
          <div className="space-y-4">
            {newsData.map((news) => (
              <div
                key={news.id}
                className="p-4 border border-gray-300 rounded-md hover:shadow-lg transition-shadow duration-200"
              >
                <h3 className="text-xl font-semibold text-blue-600">{news.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{news.date}</p>
                <p className="text-gray-700">{news.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NewsForYou;

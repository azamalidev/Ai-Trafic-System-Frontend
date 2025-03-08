import React, { useState } from "react";
import guest1 from "../assets/image/guest1.jpg";
import guest2 from "../assets/image/guest2.jpg";
import guest3 from "../assets/image/guest3.jpg";

const Card2 = () => {
  const [activeButton, setActiveButton] = useState(1); // Initialize with id 1

  const buttons = [
    { id: 1, label: "OUR GUESTS" },
    { id: 2, label: "NYF CHAPTER 2024" },
    { id: 3, label: "NYF CHAPTER 2022" },
    { id: 4, label: "NYF CHAPTER 2021" },
    { id: 5, label: "CONFERENCE" },
    { id: 6, label: "ALUMNI'S" },
  ];

  const cardData = {
    1: [
      {
        image: guest1,
        name: "Guest 1",
        title: "Speaker at Conference",
      },
      {
        image: guest1,
        name: "Guest 2",
        title: "Keynote Speaker",
      },
      {
        image: guest1,
        name: "Guest 3",
        title: "Keynote Speaker",
      },
      {
        image: guest1,
        name: "Guest 4",
        title: "Keynote Speaker",
      },
      {
        image: guest1,
        name: "Guest 5",
        title: "Keynote Speaker",
      },
      {
        image: guest1,
        name: "Guest 6",
        title: "Keynote Speaker",
      },
      {
        image: guest1,
        name: "Guest 7",
        title: "Keynote Speaker",
      },
      {
        image: guest1,
        name: "Guest 8",
        title: "Keynote Speaker",
      },

    ],
    2: [
      {
        image: guest2,
        name: "Chapter Member 1",
        title: "Organizer 2024",
      },
      {
        image: guest2,
        name: "Chapter Member 2",
        title: "Volunteer 2024",
      },
      {
        image: guest2,
        name: "Chapter Member 2",
        title: "Volunteer 2024",
      },
      {
        image: guest2,
        name: "Chapter Member 2",
        title: "Volunteer 2024",
      },
    ],
    3: [
      {
        image: guest3,
        name: "Chapter Member 1",
        title: "Organizer 2024",
      },
      {
        image: guest3,
        name: "Chapter Member 2",
        title: "Volunteer 2024",
      },
      {
        image: guest3,
        name: "Chapter Member 2",
        title: "Volunteer 2024",
      },
      {
        image: guest3,
        name: "Chapter Member 2",
        title: "Volunteer 2024",
      },
    ],
    4: [
      {
        image: guest2,
        name: "Chapter Member 1",
        title: "Organizer 2024",
      },
      {
        image: guest2,
        name: "Chapter Member 2",
        title: "Volunteer 2024",
      },
      {
        image: guest2,
        name: "Chapter Member 2",
        title: "Volunteer 2024",
      },
      {
        image: guest2,
        name: "Chapter Member 2",
        title: "Volunteer 2024",
      },
    ],
    5: [
      {
        image: guest3,
        name: "Chapter Member 1",
        title: "Organizer 2024",
      },
      {
        image: guest3,
        name: "Chapter Member 2",
        title: "Volunteer 2024",
      },
      {
        image: guest3,
        name: "Chapter Member 2",
        title: "Volunteer 2024",
      },
      {
        image: guest3,
        name: "Chapter Member 2",
        title: "Volunteer 2024",
      },
    ],
    6: [
      {
        image: guest2,
        name: "Chapter Member 1",
        title: "Organizer 2024",
      },
      {
        image: guest2,
        name: "Chapter Member 2",
        title: "Volunteer 2024",
      },
      {
        image: guest2,
        name: "Chapter Member 2",
        title: "Volunteer 2024",
      },
      {
        image: guest2,
        name: "Chapter Member 2",
        title: "Volunteer 2024",
      },
    ],
    // Add more data for other buttons
  };

  const handleButtonClick = (id) => {
    setActiveButton(id); // Update the active button ID
  };

  return (
    <div className="w-full mb-8">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm w-full mb-6">
        <div className="container mx-auto px-6 py-2 overflow-x-auto">
          <div className="flex space-x-4 whitespace-nowrap">
            {buttons.map((button) => (
             <button
             key={button.id}
             onClick={() => handleButtonClick(button.id)}
             className={`px-4 py-2 rounded-lg 
               ${
                 activeButton === button.id
                   ? "bg-green-700 text-white hover:bg-green-800"
                   : "text-gray-700 hover:bg-green-100"
               }
               focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-200`}
           >
             {button.label}
           </button>
           
            ))}
          </div>
        </div>
      </nav>

      {/* Cards Section */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cardData[activeButton]?.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <img
                src={card.image}
                alt={card.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800">{card.name}</h2>
                <p className="text-gray-500 text-sm">{card.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card2;

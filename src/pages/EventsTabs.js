import React, { useState } from 'react';

// Import local images (make sure you have them in the appropriate folder)
import profileImage1 from '../assets/image/eventsone/1.jpg';
import profileImage2 from '../assets/image/eventsone/1.jpg';
import dashboardImage1 from '../assets/image/eventsone/1.jpg';
import dashboardImage2 from '../assets/image/eventsone/1.jpg';
import settingsImage1 from '../assets/image/eventsone/1.jpg';
import settingsImage2 from '../assets/image/eventsone/1.jpg';
import contactImage1 from '../assets/image/eventsone/1.jpg';
import contactImage2 from '../assets/image/eventsone/1.jpg';

const TabContent = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', title: 'Profile' },
    { id: 'dashboard', title: 'Dashboard' },
    { id: 'settings', title: 'Settings' },
    { id: 'contacts', title: 'Contacts' },
  ];

  // Card data with local images and unique titles/descriptions for each tab
  const cardData = {
    profile: [
      { id: 1, imgSrc: profileImage1, title: 'Profile Card 1', description: 'This is the profile card 1 description.' },
      { id: 2, imgSrc: profileImage2, title: 'Profile Card 2', description: 'This is the profile card 2 description.' },
      // Add more profile cards as needed
    ],
    dashboard: [
      { id: 1, imgSrc: dashboardImage1, title: 'Dashboard Card 1', description: 'This is the dashboard card 1 description.' },
      { id: 2, imgSrc: dashboardImage2, title: 'Dashboard Card 2', description: 'This is the dashboard card 2 description.' },
      // Add more dashboard cards as needed
    ],
    settings: [
      { id: 1, imgSrc: settingsImage1, title: 'Settings Card 1', description: 'This is the settings card 1 description.' },
      { id: 2, imgSrc: settingsImage2, title: 'Settings Card 2', description: 'This is the settings card 2 description.' },
      // Add more settings cards as needed
    ],
    contacts: [
      { id: 1, imgSrc: contactImage1, title: 'Contact Card 1', description: 'This is the contact card 1 description.' },
      { id: 2, imgSrc: contactImage2, title: 'Contact Card 2', description: 'This is the contact card 2 description.' },
      // Add more contact cards as needed
    ],
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* Tabs Header */}
      <div className="mb-6 flex justify-center">
        <ul className="flex space-x-6 text-sm font-medium text-center">
          {tabs.map((tab) => (
            <li key={tab.id}>
              <button
                className={`inline-block py-2 px-4 rounded-t-lg transition-colors duration-300 ${
                  activeTab === tab.id
                    ? 'text-purple-600 border-b-2 border-purple-600'
                    : 'text-gray-500 hover:text-gray-600'
                }`}
                onClick={() => setActiveTab(tab.id)}
                role="tab"
                aria-controls={tab.id}
                aria-selected={activeTab === tab.id}
              >
                {tab.title}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Tab Content */}
      <div id="default-styled-tab-content">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${
              activeTab === tab.id ? 'block' : 'hidden'
            }`}
            id={tab.id}
            role="tabpanel"
            aria-labelledby={`${tab.id}-tab`}
          >
            {/* Cards in the Tab */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {cardData[tab.id].map((card) => (
                <div
                  key={card.id}
                  className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800"
                >
                  <img className="w-full" src={card.imgSrc} alt={card.title} />
                  <div className="px-6 py-4">
                    <h3 className="font-bold text-xl mb-2 text-gray-800 dark:text-white">
                      {card.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-400">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabContent;

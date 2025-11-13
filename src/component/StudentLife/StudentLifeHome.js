import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';
import CampusLifeDetails from './CampusLifeDetails';
import ClubsAndOrganizations from './ClubsAndOrganizations';
import StudentEvents from './StudentEvents';
import AlumniPage from '../../pages/AlumniPage';

const StudentLife = () => {
  const [activeTab, setActiveTab] = useState('campusLife');
  // const navigate = useNavigate(); // For navigation

  const tabs = [
    {
      id: 'campusLife',
      title: 'Campus Life',
      icon: '🏫',
      content: <CampusLifeDetails />,
    },
    {
      id: 'clubsAndOrganizations',
      title: 'Clubs & Organizations',
      icon: '🎨',
      content: <ClubsAndOrganizations />,
    },
    {
      id: 'studentEvents',
      title: 'Student Events',
      icon: '🎉',
      content: <StudentEvents />,
    },
    {
      id: 'alumni',
      title: 'Alumni',
      icon: '🎓',
      content: <AlumniPage />, // No content, redirect instead
    },
  ];

  const handleTabClick = (tabId) => {
   
      setActiveTab(tabId);
    
  };

  const getFilteredContent = () => {
    const tab = tabs.find((tab) => tab.id === activeTab);
    if (!tab) return null;
    return tab.content;
  };

  const filteredContent = getFilteredContent();

  return (
    <div className="p-6">
      {/* Tabs Navigation */}
      <div className="flex items-center justify-between border-b border-gray-300 mb-6 pb-2">
        <div className="flex">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`py-2 px-6 text-md font-semibold flex items-center gap-2 focus:outline-none transition-all ${
                activeTab === tab.id
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500'
              }`}
              onClick={() => handleTabClick(tab.id)}
            >
              <span>{tab.icon}</span> {tab.title}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <Transition
        show={true}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="text-gray-700">
          {filteredContent || tabs.find((tab) => tab.id === activeTab)?.content}
        </div>
      </Transition>
    </div>
  );
};

export default StudentLife;

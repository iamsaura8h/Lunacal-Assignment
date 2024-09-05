import { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
      <div className="flex justify-center space-x-6 mb-6">
        {['About Me', 'Experiences', 'Recommended'].map((tab) => (
          <button
            key={tab}
            className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === tab.toLowerCase()
                ? 'bg-gray-700 text-white'
                : 'bg-gray-600 text-gray-300 hover:bg-gray-700'
            }`}
            onClick={() => setActiveTab(tab.toLowerCase())}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="text-gray-300 p-4 bg-gray-900 rounded-lg shadow-inner">
        {activeTab === 'about' && <p>Hello! I'm Dave, your sales rep from Salesforce...</p>}
        {activeTab === 'experiences' && <p>Experience details go here...</p>}
        {activeTab === 'recommended' && <p>Recommended content goes here...</p>}
      </div>
    </div>
  );
};

export default Tabs;

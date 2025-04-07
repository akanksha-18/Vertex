import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('Overview');
  const tabs = ['Overview', 'Portfolio', 'Experience', 'Media'];
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
   
      <header className="bg-black border-b border-gray-800 flex items-center p-3">
        <div className="flex items-center mr-8">
          <div className="bg-white text-black rounded-full p-1 mr-2 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
          </div>
          <span className="font-bold text-sm text-white">Vertxlabs, Inc</span>
        </div>
        
        <div className="flex flex-1 items-center justify-between">
          <button className="text-sm font-medium text-white">Profile</button>
          <div className="flex items-center space-x-6">
            <Link to="/analytics" className="text-sm text-gray-400 hover:text-white">Activity</Link>
            <button className="text-sm text-white">Log out</button>
          </div>
        </div>
      </header>
      
      <div className="flex flex-1">
        {/* Sidebar with menu items */}
        <aside className="w-16 md:w-36 bg-black border-r border-gray-800 flex-shrink-0">
          {/* Navigation Items with Avatars */}
          <div className="flex flex-col mt-4">
            <div className="flex items-center py-3 px-4">
              <div className="w-6 h-6 mr-3 flex items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-gray-400"></div>
              </div>
              <span className="text-white hidden md:inline text-sm">Dashboard</span>
            </div>
            
            <div 
              className="flex items-center py-3 px-4 cursor-pointer hover:bg-gray-900"
              onClick={() => navigate('/analytics')}
            >
              <div className="w-6 h-6 mr-3 flex items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-gray-400"></div>
              </div>
              <span className="text-gray-500 hidden md:inline text-sm">Analytics</span>
            </div>
            
            <div className="flex items-center py-3 px-4">
              <div className="w-6 h-6 mr-3 flex items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-green-500"></div>
              </div>
              <span className="text-gray-500 hidden md:inline text-sm">Connect</span>
            </div>
          </div>
          
          {/* Text-only menu items */}
          <div className="flex flex-col mt-4">
            <div className="flex items-center py-2 px-4">
              <span className="text-gray-500 ml-9 hidden md:inline text-sm">Dealroom</span>
            </div>
            
            <div className="flex items-center py-2 px-4">
              <span className="text-gray-500 ml-9 hidden md:inline text-sm">Profile</span>
            </div>
            
            <div className="flex items-center py-2 px-4">
              <span className="text-gray-500 ml-9 hidden md:inline text-sm">Settings</span>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Tabs navigation */}
          <div className="border-b border-gray-800">
            <div className="flex">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={`px-4 py-3 text-sm ${
                    activeTab === tab 
                      ? 'border-b-2 border-white text-white' 
                      : 'text-gray-400'
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Page Content */}
          <div className="p-4 flex-1">
            <h1 className="text-xl font-bold mb-4">Overview</h1>
            
            {/* Profile Card */}
            <div className="border border-gray-800 rounded-lg p-6 mb-6">
              <div className="flex flex-col sm:flex-row">
                <div className="flex items-center justify-center mb-4 sm:mb-0 sm:mr-6">
                  <div className="w-20 h-20">
                    {/* User avatar placeholder */}
                    <svg className="w-full h-full text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" fill="white"/>
                      <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" fill="white"/>
                    </svg>
                  </div>
                </div>
                <div>
                  <div className="flex items-center">
                    <h2 className="text-xl font-bold mr-2">Mr A</h2>
                    <div className="bg-blue-500 rounded-full p-1">
                      <FaCheck className="text-xs" />
                    </div>
                  </div>
                  <p className="text-sm mb-2">
                    Co-Founder & CEO <span className="font-bold">@Vertx</span>
                  </p>
                  <div className="inline-block bg-gray-800 px-2 py-1 rounded-full text-xs mb-4">
                    Online since Feb 2023
                  </div>
                  
                  <div className="flex space-x-2">
                    {/* LinkedIn */}
                    <a href="#" className="bg-blue-600 p-1 rounded w-6 h-6 flex items-center justify-center">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    {/* Twitter/X */}
                    <a href="#" className="bg-gray-800 p-1 rounded w-6 h-6 flex items-center justify-center">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                    {/* Email */}
                    <a href="#" className="bg-red-500 p-1 rounded w-6 h-6 flex items-center justify-center">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"/>
                        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Founded Companies */}
              <div className="border border-green-600 rounded-lg p-6">
                <h3 className="text-lg font-bold mb-4">Founded Companies</h3>
                <div className="text-6xl font-bold mb-6">02</div>
                
                {/* Company 1 */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <div className="flex items-center justify-center bg-white p-1 rounded mr-2 w-6 h-6">
                        <span className="text-black font-bold text-xs">V</span>
                      </div>
                      <span className="font-bold">Vertx</span>
                      <span className="ml-2 text-xs bg-green-600 px-1 py-0.5 rounded">CEO</span>
                    </div>
                    <button className="text-xs">View Profile</button>
                  </div>
                  <p className="text-xs text-gray-400">FOUNDED IN 2020 • FINTECH</p>
                </div>
                
                {/* Company 2 */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <div className="flex items-center justify-center bg-white p-1 rounded mr-2 w-6 h-6">
                        <span className="text-transparent">C</span>
                      </div>
                      <span className="font-bold">Company Ipsum</span>
                      <span className="ml-2 text-xs bg-blue-600 px-1 py-0.5 rounded">INVESTOR</span>
                    </div>
                    <button className="text-xs">View Profile</button>
                  </div>
                  <p className="text-xs text-gray-400">PRE-PRODUCT REVENUE • B2B SAAS</p>
                </div>
              </div>
              
              {/* Experience */}
              <div className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-bold mb-4">Experience</h3>
                <div className="text-6xl font-bold mb-6">03</div>
                
                {/* Companies list */}
                <div className="space-y-4">
                  {[1, 2, 3].map((num) => (
                    <div key={num} className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="bg-white p-1 rounded mr-2 w-6 h-6"></div>
                        <span className="font-bold">Company {num}</span>
                      </div>
                      <button className="text-xs">View Profile</button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
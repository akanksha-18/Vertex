import { useState } from 'react';
import { ChevronDown, ArrowRight, Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

// SVG Flag Components
const IndiaFlag = () => (
  <svg className="w-6 h-4" viewBox="0 0 640 480">
    <path fill="#f93" d="M0 0h640v160H0z"/>
    <path fill="#fff" d="M0 160h640v160H0z"/>
    <path fill="#128807" d="M0 320h640v160H0z"/>
    <g transform="matrix(3.2 0 0 3.2 320 240)">
      <circle r="20" fill="#008"/>
      <circle r="17.5" fill="#fff"/>
      <circle r="3.5" fill="#008"/>
      <g id="d">
        <g id="c">
          <g id="b">
            <g id="a" fill="#008">
              <circle r=".9" transform="rotate(7.5 -8.8 133.5)"/>
              <path d="M0 17.5L.6 7 0 2l-.6 5L0 17.5z"/>
            </g>
            <use width="100%" height="100%" transform="rotate(15)"/>
          </g>
          <use width="100%" height="100%" transform="rotate(30)"/>
        </g>
        <use width="100%" height="100%" transform="rotate(60)"/>
      </g>
      <use width="100%" height="100%" transform="rotate(120)"/>
      <use width="100%" height="100%" transform="rotate(-120)"/>
    </g>
  </svg>
);

const USAFlag = () => (
  <svg className="w-6 h-4" viewBox="0 0 640 480">
    <path fill="#bd3d44" d="M0 0h640v480H0"/>
    <path stroke="#fff" strokeWidth="37" d="M0 55.3h640M0 129h640M0 203h640M0 277h640M0 351h640M0 425h640"/>
    <path fill="#192f5d" d="M0 0h364.8v258.5H0"/>
    <g fill="#fff">
      <g id="d">
        <g id="c">
          <g id="e">
            <g id="b">
              <path id="a" d="M13.5 0v7.7h-13.5z" transform="translate(0 -7.7) rotate(36)"/>
              <use width="100%" height="100%" transform="scale(-1 1)"/>
            </g>
            <use width="100%" height="100%" transform="rotate(72)"/>
          </g>
          <use width="100%" height="100%" transform="rotate(144)"/>
        </g>
        <use width="100%" height="100%" transform="rotate(144)"/>
      </g>
      <use width="100%" height="100%" x="13.5" y="15.5"/>
      <use width="100%" height="100%" x="27" y="31"/>
      <use width="100%" height="100%" x="40.5" y="15.5"/>
      <use width="100%" height="100%" x="54" y="31"/>
      <use width="100%" height="100%" x="13.5" y="46.5"/>
      <use width="100%" height="100%" x="27" y="62"/>
      <use width="100%" height="100%" x="40.5" y="46.5"/>
      <use width="100%" height="100%" x="54" y="62"/>
      <use width="100%" height="100%" x="81" y="0"/>
      <use width="100%" height="100%" x="94.5" y="15.5"/>
      <use width="100%" height="100%" x="108" y="0"/>
      <use width="100%" height="100%" x="121.5" y="15.5"/>
      <use width="100%" height="100%" x="135" y="0"/>
      <use width="100%" height="100%" x="148.5" y="15.5"/>
      <use width="100%" height="100%" x="162" y="0"/>
      <use width="100%" height="100%" x="175.5" y="15.5"/>
      <use width="100%" height="100%" x="81" y="31"/>
      <use width="100%" height="100%" x="94.5" y="46.5"/>
      <use width="100%" height="100%" x="108" y="31"/>
      <use width="100%" height="100%" x="121.5" y="46.5"/>
      <use width="100%" height="100%" x="135" y="31"/>
      <use width="100%" height="100%" x="148.5" y="46.5"/>
      <use width="100%" height="100%" x="162" y="31"/>
      <use width="100%" height="100%" x="175.5" y="46.5"/>
      <use width="100%" height="100%" x="81" y="62"/>
      <use width="100%" height="100%" x="94.5" y="77.5"/>
      <use width="100%" height="100%" x="108" y="62"/>
      <use width="100%" height="100%" x="121.5" y="77.5"/>
      <use width="100%" height="100%" x="135" y="62"/>
      <use width="100%" height="100%" x="148.5" y="77.5"/>
      <use width="100%" height="100%" x="162" y="62"/>
      <use width="100%" height="100%" x="175.5" y="77.5"/>
    </g>
  </svg>
);

const CanadaFlag = () => (
  <svg className="w-6 h-4" viewBox="0 0 640 480">
    <path fill="#fff" d="M81.1 0h362.3v480H81.1z"/>
    <path fill="#d52b1e" d="M-100 0H81.1v480H-100zm543.4 0h181.1v480H443.4zM135.3 259.2l-14 4.8 65.4 57.5c5 14.7-1.7 19-6 26.8l71-9L251 403l14.7-41c13.7-3.2 18.8-4.8 28.2-8.8l14.3 41.3 18.2-87-73.6-10.2c-4.5-9.7-5-18.3-2.3-28.2l-81 28.2L135.3 259z"/>
  </svg>
);

const UAEFlag = () => (
  <svg className="w-6 h-4" viewBox="0 0 640 480">
    <path fill="#00732f" d="M0 0h640v160H0z"/>
    <path fill="#fff" d="M0 160h640v160H0z"/>
    <path d="M0 320h640v160H0z"/>
    <path fill="red" d="M0 0h220v480H0z"/>
  </svg>
);

// Dropdown component for reusability
const Dropdown = ({ label, options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div 
        className="flex items-center gap-2 text-sm cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{value}</span>
        <ChevronDown size={16} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </div>
      
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 bg-gray-800 rounded-md shadow-lg z-50 min-w-max">
          <ul className="py-1">
            {options.map((option) => (
              <li 
                key={option}
                className="px-4 py-2 hover:bg-gray-700 cursor-pointer text-sm"
                onClick={() => handleSelect(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

// Sample data for different chart configurations
const chartData = {
  // Visitor filter data
  Visitors: {
    primaryLine: {
      color: "purple",
      path: "M0,80 L20,75 L40,70 L60,60 L80,65 L100,50 L120,45 L140,60 L160,70 L180,40 L200,50 L220,60 L240,55 L260,60 L280,50 L300,45 L320,55 L340,40 L360,35 L380,30 L400,20",
      stats: { value: "13.49K", change: "+25%", previous: "10K" }
    },
    secondaryLine: {
      color: "white",
      path: "M0,90 L20,85 L40,80 L60,75 L80,70 L100,85 L120,80 L140,70 L160,75 L180,60 L200,65 L220,70 L240,65 L260,70 L280,65 L300,60 L320,70 L340,60 L360,55 L380,50 L400,45",
      stats: { value: "3.49K", change: "+80%", previous: "1.9K" }
    }
  },
  "Unique Visitors": {
    primaryLine: {
      color: "blue",
      path: "M0,60 L20,55 L40,60 L60,50 L80,45 L100,40 L120,45 L140,40 L160,50 L180,30 L200,40 L220,50 L240,45 L260,50 L280,40 L300,35 L320,45 L340,30 L360,25 L380,20 L400,10",
      stats: { value: "8.72K", change: "+18%", previous: "7.4K" }
    },
    secondaryLine: {
      color: "green",
      path: "M0,70 L20,75 L40,70 L60,65 L80,60 L100,70 L120,65 L140,60 L160,65 L180,50 L200,55 L220,60 L240,55 L260,60 L280,55 L300,50 L320,60 L340,50 L360,45 L380,40 L400,35",
      stats: { value: "2.14K", change: "+65%", previous: "1.3K" }
    }
  },
  "New Visitors": {
    primaryLine: {
      color: "cyan",
      path: "M0,90 L20,85 L40,80 L60,70 L80,75 L100,60 L120,55 L140,70 L160,80 L180,50 L200,60 L220,70 L240,65 L260,70 L280,60 L300,55 L320,65 L340,50 L360,45 L380,40 L400,30",
      stats: { value: "5.32K", change: "+42%", previous: "3.75K" }
    },
    secondaryLine: {
      color: "yellow",
      path: "M0,85 L20,80 L40,75 L60,70 L80,65 L100,80 L120,75 L140,65 L160,70 L180,55 L200,60 L220,65 L240,60 L260,65 L280,60 L300,55 L320,65 L340,55 L360,50 L380,45 L400,40",
      stats: { value: "1.87K", change: "+95%", previous: "0.96K" }
    }
  },
  "Returning Visitors": {
    primaryLine: {
      color: "red",
      path: "M0,70 L20,65 L40,60 L60,50 L80,55 L100,40 L120,35 L140,50 L160,60 L180,30 L200,40 L220,50 L240,45 L260,50 L280,40 L300,35 L320,45 L340,30 L360,25 L380,20 L400,10",
      stats: { value: "8.17K", change: "+15%", previous: "7.1K" }
    },
    secondaryLine: {
      color: "orange",
      path: "M0,80 L20,75 L40,70 L60,65 L80,60 L100,75 L120,70 L140,60 L160,65 L180,45 L200,50 L220,55 L240,50 L260,55 L280,50 L300,45 L320,55 L340,45 L360,40 L380,35 L400,30",
      stats: { value: "1.62K", change: "+74%", previous: "0.93K" }
    }
  }
};

// Connection filter data
const connectionData = {
  Connections: {
    primaryLine: {
      color: "purple",
      path: "M0,80 L20,75 L40,70 L60,60 L80,65 L100,50 L120,45 L140,60 L160,70 L180,40 L200,50 L220,60 L240,55 L260,60 L280,50 L300,45 L320,55 L340,40 L360,35 L380,30 L400,20"
    },
    secondaryLine: {
      color: "white",
      path: "M0,90 L20,85 L40,80 L60,75 L80,70 L100,85 L120,80 L140,70 L160,75 L180,60 L200,65 L220,70 L240,65 L260,70 L280,65 L300,60 L320,70 L340,60 L360,55 L380,50 L400,45"
    }
  },
  Clicks: {
    primaryLine: {
      color: "green",
      path: "M0,50 L20,55 L40,60 L60,50 L80,45 L100,60 L120,65 L140,50 L160,40 L180,45 L200,40 L220,30 L240,35 L260,40 L280,50 L300,55 L320,45 L340,50 L360,45 L380,40 L400,30"
    },
    secondaryLine: {
      color: "teal",
      path: "M0,70 L20,65 L40,70 L60,65 L80,60 L100,65 L120,70 L140,75 L160,65 L180,60 L200,55 L220,50 L240,55 L260,60 L280,65 L300,70 L320,65 L340,60 L360,55 L380,50 L400,45"
    }
  },
  Views: {
    primaryLine: {
      color: "blue",
      path: "M0,60 L20,65 L40,70 L60,75 L80,70 L100,65 L120,60 L140,55 L160,50 L180,55 L200,60 L220,65 L240,60 L260,55 L280,50 L300,45 L320,40 L340,35 L360,30 L380,25 L400,20"
    },
    secondaryLine: {
      color: "lightblue",
      path: "M0,80 L20,75 L40,70 L60,75 L80,80 L100,75 L120,70 L140,65 L160,60 L180,65 L200,70 L220,75 L240,70 L260,65 L280,60 L300,55 L320,50 L340,45 L360,40 L380,35 L400,30"
    }
  },
  Shares: {
    primaryLine: {
      color: "yellow",
      path: "M0,90 L20,85 L40,80 L60,85 L80,80 L100,75 L120,70 L140,65 L160,70 L180,75 L200,70 L220,65 L240,60 L260,55 L280,50 L300,45 L320,40 L340,35 L360,30 L380,25 L400,20"
    },
    secondaryLine: {
      color: "orange",
      path: "M0,70 L20,65 L40,60 L60,65 L80,70 L100,65 L120,60 L140,55 L160,60 L180,65 L200,60 L220,55 L240,50 L260,45 L280,40 L300,35 L320,30 L340,25 L360,20 L380,15 L400,10"
    }
  }
};

// Time range data
const timeRangeData = {
  "Last 7 days": {
    labels: ["Mar 24", "Mar 25", "Mar 26", "Mar 27", "Mar 28", "Mar 29", "Mar 30"]
  },
  "Last 30 days": {
    labels: ["Mar 1", "Mar 5", "Mar 10", "Mar 15", "Mar 20", "Mar 25", "Mar 30"]
  },
  "Last 90 days": {
    labels: ["Jan 1", "Jan 15", "Feb 1", "Feb 15", "Mar 1", "Mar 15", "Mar 30"]
  },
  "Last year": {
    labels: ["Apr '24", "Jun '24", "Aug '24", "Oct '24", "Dec '24", "Feb '25", "Apr '25"]
  },
  "Custom": {
    labels: ["Start", "", "", "Mid", "", "", "End"]
  }
};

// Demographic data by visitor type
const demographicData = {
  Visitors: {
    countries: [
      { country: "INDIA", flag: IndiaFlag, percentage: 40 },
      { country: "USA", flag: USAFlag, percentage: 25 },
      { country: "CANADA", flag: CanadaFlag, percentage: 10 },
      { country: "UAE", flag: UAEFlag, percentage: 7 }
    ]
  },
  "Unique Visitors": {
    countries: [
      { country: "INDIA", flag: IndiaFlag, percentage: 35 },
      { country: "USA", flag: USAFlag, percentage: 30 },
      { country: "CANADA", flag: CanadaFlag, percentage: 15 },
      { country: "UAE", flag: UAEFlag, percentage: 5 }
    ]
  },
  "New Visitors": {
    countries: [
      { country: "INDIA", flag: IndiaFlag, percentage: 45 },
      { country: "USA", flag: USAFlag, percentage: 20 },
      { country: "CANADA", flag: CanadaFlag, percentage: 12 },
      { country: "UAE", flag: UAEFlag, percentage: 8 }
    ]
  },
  "Returning Visitors": {
    countries: [
      { country: "INDIA", flag: IndiaFlag, percentage: 38 },
      { country: "USA", flag: USAFlag, percentage: 28 },
      { country: "CANADA", flag: CanadaFlag, percentage: 8 },
      { country: "UAE", flag: UAEFlag, percentage: 6 }
    ]
  }
};

// Insight data by visitor type
const insightData = {
  Visitors: {
    founders: { value: "7.4K", change: "+200%", previous: "900" },
    investors: { value: "6.09K", change: "+100%", previous: "3K" }
  },
  Founders: {
    founders: { value: "7.4K", change: "+200%", previous: "900" },
    investors: { value: "3.2K", change: "+50%", previous: "2.1K" }
  },
  Investors: {
    founders: { value: "4.8K", change: "+120%", previous: "2.2K" },
    investors: { value: "6.09K", change: "+100%", previous: "3K" }
  },
  Connections: {
    founders: { value: "5.3K", change: "+150%", previous: "2.1K" },
    investors: { value: "4.5K", change: "+75%", previous: "2.6K" }
  }
};




export default function AnalyticsDashboard() {
  const [activeTab, setActiveTab] = useState('Overview');
  const [visitorFilter, setVisitorFilter] = useState('Visitors');
  const [timeRange, setTimeRange] = useState('Last 30 days');
  const [connectionFilter, setConnectionFilter] = useState('Connections');
  const [insightFilter, setInsightFilter] = useState('Visitors');
  const [demographicsFilter, setDemographicsFilter] = useState('Visitors');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  

  // Options for dropdowns
  const visitorOptions = ['Visitors', 'Unique Visitors', 'New Visitors', 'Returning Visitors'];
  const timeRangeOptions = ['Last 7 days', 'Last 30 days', 'Last 90 days', 'Last year', 'Custom'];
  const connectionOptions = ['Connections', 'Clicks', 'Views', 'Shares'];
  const insightOptions = ['Visitors', 'Founders', 'Investors', 'Connections'];
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Get current chart data based on filters
  const currentChartData = chartData[visitorFilter];
  const currentConnectionData = connectionData[connectionFilter];
  const currentTimeLabels = timeRangeData[timeRange].labels;
  const currentInsightData = insightData[insightFilter];
  const currentDemographicsData = demographicData[demographicsFilter];
  
  // Combined path data based on visitor and connection filters
  const primaryPath = currentConnectionData.primaryLine.path;
  const secondaryPath = currentConnectionData.secondaryLine.path;
  const primaryColor = currentChartData.primaryLine.color;
  const secondaryColor = currentChartData.secondaryLine.color;

  return (
    <div className="flex h-screen w-full bg-black text-white overflow-hidden">
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button 
          onClick={toggleSidebar} 
          className="bg-gray-800 text-white p-2 rounded-md"
        >
          {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Sidebar - responsive */}
      <div className={`
        fixed lg:static lg:block z-40 h-full 
        transition-all duration-300 ease-in-out
        ${sidebarOpen ? 'left-0' : '-left-full lg:left-0'}
        w-64 md:w-64 lg:w-64 
        border-r border-gray-800 bg-black
      `}>
        <div className="flex items-center p-4 border-b border-gray-800">
        <div className="bg-white text-black rounded-full p-1 mr-2 flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
        </div>
          <span className="font-semibold">Verblabs, Inc</span>
        </div>
        
        <div className="pt-4">
          <div className="flex items-center px-4 py-2 text-gray-400 hover:bg-gray-900 cursor-pointer"
          onClick={() => navigate('/')}
          >
            <span>Dashboard</span>
          </div>
          <div className="flex items-center px-4 py-2 bg-gray-900 text-white cursor-pointer">
            <span>Analytics</span>
          </div>
          <div className="flex items-center px-4 py-2 text-gray-400 hover:bg-gray-900 cursor-pointer">
            <span>Connect</span>
          </div>
          <div className="flex items-center px-4 py-2 text-gray-400 hover:bg-gray-900 cursor-pointer">
            <span>Dealroom</span>
          </div>
          <div className="flex items-center px-4 py-2 text-gray-400 hover:bg-gray-900 cursor-pointer">
            <span>Profile</span>
          </div>
          <div className="flex items-center px-4 py-2 text-gray-400 hover:bg-gray-900 cursor-pointer">
            <span>Settings</span>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 overflow-auto pb-20 w-full">
        {/* Header */}
        <div className="flex justify-between border-b border-gray-800 px-4 sm:px-8 py-3">
          <div className="flex gap-6 ml-12 lg:ml-0">
            <span className="font-semibold">Analytics</span>
          </div>
          <div className="flex gap-4 sm:gap-6">
            <span className="hidden sm:block">Activity</span>
            <span>Log out</span>
          </div>
        </div>
        
        {/* Navigation Tabs */}
        <div className="flex border-b border-gray-700 overflow-x-auto">
          <div 
            className={`px-2 sm:px-4 py-3 cursor-pointer whitespace-nowrap ${activeTab === 'Overview' ? 'border-b-2 border-white' : ''}`}
            onClick={() => setActiveTab('Overview')}
          >
            Overview
          </div>
          <div 
            className={`px-2 sm:px-4 py-3 cursor-pointer whitespace-nowrap text-gray-600 ${activeTab === 'Demographics' ? 'border-b-2 border-white' : ''}`}
            onClick={() => setActiveTab('Demographics')}
          >
            Demographics
          </div>
          <div className="flex-1 flex justify-end px-4 py-3 whitespace-nowrap">
            <span>More</span>
          </div>
        </div>
        
        {/* Dashboard Content */}
        <div className="p-2 sm:p-4 md:p-6 bg-[#1d1d1d]">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Overview</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {/* Chart Section */}
            <div className="lg:col-span-3 bg-black rounded-lg p-2 sm:p-3 md:p-4 order-1">
              {/* Top Filters - Responsive */}
              <div className="flex flex-col sm:flex-row sm:flex-wrap justify-between mb-4 gap-2">
                <Dropdown
                  label="Visitor Filter"
                  options={visitorOptions}
                  value={visitorFilter}
                  onChange={setVisitorFilter}
                  className="w-full sm:w-auto"
                />
                <Dropdown
                  label="Time Range"
                  options={timeRangeOptions}
                  value={timeRange}
                  onChange={setTimeRange}
                  className="w-full sm:w-auto"
                />
                <Dropdown
                  label="Connection Filter"
                  options={connectionOptions}
                  value={connectionFilter}
                  onChange={setConnectionFilter}
                  className="w-full sm:w-auto"
                />
              </div>
              
              {/* Stats - Responsive */}
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-4 sm:gap-6 md:gap-12 mb-6">
                <div>
                  <div className="text-lg sm:text-xl md:text-2xl font-bold">{currentChartData.primaryLine.stats.value}</div>
                  <div className="flex items-center">
                    <span className="text-green-500 text-xs sm:text-sm mr-2">{currentChartData.primaryLine.stats.change}</span>
                    <span className="text-gray-400 text-xs sm:text-sm">({currentChartData.primaryLine.stats.previous})</span>
                  </div>
                </div>
                <div>
                  <div className="text-lg sm:text-xl md:text-2xl font-bold">{currentChartData.secondaryLine.stats.value}</div>
                  <div className="flex items-center">
                    <span className="text-green-500 text-xs sm:text-sm mr-2">{currentChartData.secondaryLine.stats.change}</span>
                    <span className="text-gray-400 text-xs sm:text-sm">({currentChartData.secondaryLine.stats.previous})</span>
                  </div>
                </div>
              </div>
              
              {/* Line Chart Placeholder - Responsive height */}
              <div className="h-24 sm:h-32 md:h-40 lg:h-48 w-full relative">
                <div className="absolute inset-0 flex items-end">
                  <svg className="w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
                    <path d={primaryPath}
                          stroke={primaryColor}
                          strokeWidth="2" 
                          fill="none" />
                    <path d={secondaryPath}
                          stroke={secondaryColor}
                          strokeWidth="2" 
                          fill="none" />
                  </svg>
                </div>
                {/* Responsive Chart Labels - Hide some on small screens */}
                <div className="absolute bottom-0 w-full flex justify-between text-xs text-gray-500">
                  {currentTimeLabels.map((label, index) => (
                    <span key={index} className={index % 2 !== 0 && index !== 0 && index !== currentTimeLabels.length - 1 ? "hidden sm:block" : ""}>
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Insights Section */}
            <div className="bg-black rounded-lg p-2 sm:p-3 md:p-4 order-2 lg:order-1">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                <div className="text-lg font-bold mb-2 sm:mb-0">Insights</div>
                <Dropdown
                  label="Insights Filter"
                  options={insightOptions}
                  value={insightFilter}
                  onChange={setInsightFilter}
                  className="w-full sm:w-auto"
                />
              </div>
              
              <div className="mb-4">
                <div className="text-gray-400 text-xs sm:text-sm">Founders</div>
                <div className="flex justify-between items-end">
                  <div className="text-lg sm:text-xl font-bold">7.4K</div>
                  <div className="flex items-center">
                    <span className="text-green-500 text-xs sm:text-sm">+200%</span>
                  </div>
                </div>
                <div className="text-gray-400 text-xs">(900)</div>
              </div>
              
              <div>
                <div className="text-gray-400 text-xs sm:text-sm">Investors</div>
                <div className="flex justify-between items-end">
                  <div className="text-lg sm:text-xl font-bold">6.09K</div>
                  <div className="flex items-center">
                    <span className="text-green-500 text-xs sm:text-sm">+100%</span>
                  </div>
                </div>
                <div className="text-gray-400 text-xs">(3K)</div>
              </div>
              
              <div className="flex justify-end items-center mt-4 sm:mt-8 text-xs sm:text-sm">
                <span className="mr-1">View detailed insights</span>
                <ArrowRight size={12} />
              </div>
            </div>
          </div>
          
          {/* Demographics Section */}
          <h2 className="text-xl sm:text-2xl font-bold mt-6 sm:mt-8 mb-4 sm:mb-6">Demographics</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            <div className="lg:col-span-3 bg-black rounded-lg p-2 sm:p-3 md:p-4">
              <div className="flex justify-between mb-4">
                <Dropdown
                  label="Demographics Filter"
                  options={visitorOptions}
                  value={demographicsFilter}
                  onChange={setDemographicsFilter}
                  className="w-full sm:w-auto"
                />
              </div>
              
              <div className="h-32 sm:h-40 md:h-56 lg:h-64 w-full relative">
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <svg width="100%" height="100%" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid meet">
                    <path d="M217,142 L266,142 L266,152 L291,152 L291,181 L272,181 L272,201 L288,201 L288,223 L307,223 L307,241 L331,241 L331,265 L307,265 L307,283 L280,283 L280,279 L247,279 L247,259 L228,259 L228,241 L215,241 L215,223 L203,223 L203,192 L184,192 L184,174 L194,174 L194,164 L217,164 Z" fill="#333" />
                    <path d="M508,112 L568,112 L568,132 L529,132 L529,153 L550,153 L550,173 L580,173 L580,190 L600,190 L600,228 L580,228 L580,246 L529,246 L529,228 L508,228 Z" fill="#333" />
                    <path d="M339,181 L364,181 L364,201 L380,201 L380,221 L398,221 L398,242 L378,242 L378,262 L361,262 L361,284 L339,284 L339,260 L319,260 L319,239 L339,239 Z" fill="#333" />
                  </svg>
                </div>
               
                <div className="absolute top-1/4 left-1/4 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-blue-600 rounded-full"></div>
                <div className="absolute top-1/3 left-1/5 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-orange-500 rounded-full"></div>
                <div className="absolute top-1/4 left-1/6 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-yellow-500 rounded-full"></div>
                <div className="absolute top-1/3 left-2/3 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-green-500 rounded-full"></div>
            
                <div className="absolute bottom-2 left-2 flex flex-wrap gap-1 sm:gap-2 md:gap-4">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-600 rounded-full"></div>
                    <span className="text-xs">INDIA</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-orange-500 rounded-full"></div>
                    <span className="text-xs">USA</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-xs">CANADA</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                    <span className="text-xs">UAE</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-black rounded-lg p-2 sm:p-3 md:p-4">
              <div className="space-y-2 sm:space-y-3 md:space-y-4">
                <div className="flex items-center gap-2">
                  <div className="flex-shrink-0">
                    <IndiaFlag />
                  </div>
                  <span className="flex-1 text-xs sm:text-sm">INDIA</span>
                  <div className="w-8 sm:w-10 md:w-12 bg-gray-700 h-1 sm:h-1.5 md:h-2 rounded-full overflow-hidden">
                    <div className="bg-orange-500 h-full w-10/12"></div>
                  </div>
                  <span className="text-xs sm:text-sm">40%</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="flex-shrink-0">
                    <USAFlag />
                  </div>
                  <span className="flex-1 text-xs sm:text-sm">USA</span>
                  <div className="w-8 sm:w-10 md:w-12 bg-gray-700 h-1 sm:h-1.5 md:h-2 rounded-full overflow-hidden">
                    <div className="bg-orange-500 h-full w-1/4"></div>
                  </div>
                  <span className="text-xs sm:text-sm">25%</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="flex-shrink-0">
                    <CanadaFlag />
                  </div>
                  <span className="flex-1 text-xs sm:text-sm">CANADA</span>
                  <div className="w-8 sm:w-10 md:w-12 bg-gray-700 h-1 sm:h-1.5 md:h-2 rounded-full overflow-hidden">
                    <div className="bg-orange-500 h-full w-1/10"></div>
                  </div>
                  <span className="text-xs sm:text-sm">10%</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="flex-shrink-0">
                    <UAEFlag />
                  </div>
                  <span className="flex-1 text-xs sm:text-sm">UAE</span>
                  <div className="w-8 sm:w-10 md:w-12 bg-gray-700 h-1 sm:h-1.5 md:h-2 rounded-full overflow-hidden">
                    <div className="bg-orange-500 h-full w-1/12"></div>
                  </div>
                  <span className="text-xs sm:text-sm">7%</span>
                </div>
              </div>
              
              <div className="flex justify-end items-center mt-4 sm:mt-8 md:mt-16 text-xs sm:text-sm">
                <span className="mr-1">View all countries</span>
                <ArrowRight size={12} />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add Button - Responsive position */}
      <div className="fixed bottom-4 sm:bottom-6 left-4 sm:left-6 z-20">
        <button className="bg-gray-900 text-white w-8 h-8 rounded-full flex items-center justify-center shadow-lg">
          <span className="text-xl font-bold">+</span>
        </button>
      </div>
      
      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
}
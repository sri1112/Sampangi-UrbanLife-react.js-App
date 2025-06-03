import React from 'react';
import { Map, HardHat, Award, Users } from 'lucide-react'; // Optional: replace with react-icons if preferred

const stats = [
  {
    value: '400+',
    label: 'Acres',
    icon: <Map className="w-10 h-10 text-white" />,
  },
  {
    value: '15+',
    label: 'Years In Real Estate',
    icon: <HardHat className="w-10 h-10 text-white" />,
  },
  {
    value: '20+',
    label: 'Awards Received',
    icon: <Award className="w-10 h-10 text-white" />,
  },
  {
    value: '5,000+',
    label: 'Customers',
    icon: <Users className="w-10 h-10 text-white" />,
  },
];

const CompanyStats = () => {
  return (
    <div className="bg-black bg-opacity-70 text-center py-10 px-5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center text-white">
            <div className="text-4xl font-bold text-red-600">{stat.value}</div>
            <div className="my-2">{stat.icon}</div>
            <div className="text-sm font-semibold">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyStats;

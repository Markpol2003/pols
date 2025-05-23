import React from 'react';
import { useHistory } from 'react-router-dom'; // for navigation after login

const Home = ({ user, onLogout }) => {
  const history = useHistory();

  // Handle logout
  const handleLogout = () => {
    onLogout(); // clear user state or tokens
    history.push('/login'); // redirect to login page
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl mx-auto">
        {/* Dashboard Heading */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>
        
        {/* Welcome Message */}
        <div className="mb-6">
          <p className="text-xl text-gray-700">Welcome back, <span className="font-semibold">{user.name}</span>!</p>
          <p className="text-gray-500">Your email: <span className="font-semibold">{user.email}</span></p>
        </div>

        {/* Dashboard Content */}
        <div className="space-y-4">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-gray-700">Your Statistics</h2>
            <p className="text-gray-600">Display any dashboard statistics here.</p>
            {/* You can add charts, graphs, or any data related to the user */}
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-gray-700">Recent Activity</h2>
            <p className="text-gray-600">Display recent activity logs here.</p>
            {/* Recent activities could be a list of actions or events the user has triggered */}
          </div>
        </div>

        {/* Logout Button */}
        <div className="mt-6">
          <button
            onClick={handleLogout}
            className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none transition duration-200"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

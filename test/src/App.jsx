import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import logo from './assets/logo.jpg';  // Import the logo image

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  const handleRegisterClick = () => {
    setShowRegister(true);
    setShowLogin(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-50 via-purple-100 to-pink-200 py-8 px-4">
      {/* Logo Section */}
      <div className="mb-8 animate-pulse">
        <img
          src={logo}
          alt="App Logo"
          className="w-36 h-36 rounded-full object-contain border-4 border-gray-300 shadow-xl transition-all duration-500 ease-in-out transform hover:scale-125 hover:rotate-6 hover:shadow-2xl"
        />
      </div>

      {/* Title */}
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center tracking-wide">
        Welcome to My App
      </h1>

      {/* Buttons Section */}
      <div className="space-x-4 mb-6 flex justify-center">
        <button
          onClick={handleLoginClick}
          className="px-8 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg focus:outline-none transition duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg"
        >
          Login
        </button>
        <button
          onClick={handleRegisterClick}
          className="px-8 py-3 text-white bg-green-600 hover:bg-green-700 rounded-lg focus:outline-none transition duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg"
        >
          Register
        </button>
      </div>

      {/* Conditionally render Login form */}
      {showLogin && <Login />}

      {/* Conditionally render Register form */}
      {showRegister && <Register />}
    </div>
  );
}

export default App;

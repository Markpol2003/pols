// src/Register.jsx
import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({ email: '', password: '', confirmPassword: '' });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match");
    } else {
      setError('');
      // Handle registration logic here
      alert('Registered successfully!');
    }
  };

  return (
<div className="mt-6 p-8 bg-white shadow-lg rounded-lg w-full sm:w-96 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
  {/* Heading centered */}
  <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">REGISTER</h2>

  {/* Error Message */}
  {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

  <form onSubmit={handleSubmit} className="space-y-6">
    {/* Email Input */}
    <div>
      <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        required
        className="w-full mt-2 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none transition duration-300 ease-in-out transform hover:scale-105"
        placeholder="Enter your email"
      />
    </div>

    {/* Password Input */}
    <div>
      <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
        required
        className="w-full mt-2 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none transition duration-300 ease-in-out transform hover:scale-105"
        placeholder="Enter your password"
      />
    </div>

    {/* Confirm Password Input */}
    <div>
      <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-600">Confirm Password</label>
      <input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleInputChange}
        required
        className="w-full mt-2 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none transition duration-300 ease-in-out transform hover:scale-105"
        placeholder="Confirm your password"
      />
    </div>

    {/* Register Button */}
    <button
      type="submit"
      className="w-full py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none transition duration-200 transform hover:scale-105 hover:shadow-lg"
    >
      Register
    </button>
  </form>
</div>

  );
};

export default Register;

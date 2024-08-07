import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-3xl mb-6">Page Not Found</h2>
      <p className="mb-6 text-lg">Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
        Go Home
      </Link>
      <div className="mt-10">
        <img
          src="https://via.placeholder.com/400"
          alt="Not Found"
          className="w-64 h-64 object-cover"
        />
      </div>
    </div>
  );
};

export default Error;

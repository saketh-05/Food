
import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="text-2xl text-gray-600">Oops! Page not found.</p>
      <img
        src="/images/404-error.svg"
        alt="404 Error"
        className="w-64 h-64 mt-8"
      />
      <a
        href="/"
        className="mt-8 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Go back to Home
      </a>
    </div>
  );
};

export default NotFoundPage;

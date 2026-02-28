import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a0f26] text-white px-4">
      <h1 className="text-6xl font-black mb-4">404</h1>
      <p className="text-xl mb-8">Page not found.</p>
      <Link to="/" className="px-6 py-3 bg-teal-500 rounded-xl font-bold hover:bg-teal-400 transition-colors">
        Go back home
      </Link>
    </div>
  );
};

export default NotFound;

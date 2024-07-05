// pages/index.js

import React from 'react';

const HomePage = () => {
  return (
    <div className="flex justify-center items-center bg-gray-100">
      <div className="max-w-full w-full">
        <img
          src="/main.jpg" // Replace with your actual image path
          alt="Your Image"
          style={{ maxWidth: '100%', maxHeight: '650px', width: '100%', height: 'auto' }}
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default HomePage;

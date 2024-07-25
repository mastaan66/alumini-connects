import React from 'react';

const Event = ({ event }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4 sm:w-1/2 md:w-1/3 lg:w-1/4">
      <h2 className="text-xl font-bold mb-2">{event.title}</h2>
      <p className="text-gray-600 mb-2">{event.description}</p>
      <div className="flex items-center text-gray-500">
        <svg className="h-5 w-5 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-.71-5.29h1.41v-5.42h-1.41v5.42zm1.85-5.42h-3.41v5.42h3.41v-5.42z"/>
        </svg>
        <p>{event.date}</p>
      </div>
    </div>
  );
};

export default Event;

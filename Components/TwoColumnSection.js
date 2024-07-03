import React from 'react';

const TwoColumnSection = () => {
  return (
    <div className="bg-black py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          {/* First Section: Photo on the left */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <img
              className="rounded-lg shadow-lg"
              src="alumini3.jpg"
              alt="Photo"
            />
          </div>
          {/* Second Section: Description on the right */}
          <div className="lg:w-1/2">
            <div className="max-w-lg mx-auto">
              <h2 className="text-3xl font-bold leading-tight text-white mb-4">
                Section Title 1
              </h2>
              <p className="text-white leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Second set of sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="lg:flex lg:items-center lg:justify-between">
          {/* Second Section: Description on the left */}
          <div className="lg:w-1/2 mb-8 lg:mb-0 order-last lg:order-first">
            <div className="max-w-lg mx-auto">
              <h2 className="text-3xl font-bold leading-tight text-white mb-4">
                Section Title 2
              </h2>
              <p className="text-white leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
          </div>
          {/* First Section: Photo on the right */}
          <div className="lg:w-1/2 order-first lg:order-last">
            <img
              className="rounded-lg shadow-lg"
              src="alumini2.jpg"
              alt="Second Photo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoColumnSection;

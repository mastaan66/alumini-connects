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
                Professors Of JNTUH
              </h2>
              <p className="text-white leading-relaxed">
                All Professors with Vice-Chancellor of JNTUH
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
                JGAM 2023
              </h2>
              <p className="text-white leading-relaxed">
                Hn Governer of Telangana visited JNTUH for Global alumini meet
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

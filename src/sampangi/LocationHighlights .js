import React from 'react';

const LocationHighlights = () => {
  return (
    <div className="w-full bg-white py-8">
      {/* Title */}
      <h2 className="text-3xl font-semibold text-center text-[#123456] mb-4">
        Location Highlights
      </h2>

      {/* Decorative Red Lines Under Title */}
      <div className="flex justify-center mb-6">
        <div className="w-6 h-1 bg-red-500 mx-1"></div>
        <div className="w-3 h-1 bg-red-500 mx-1"></div>
        <div className="w-6 h-1 bg-red-500 mx-1"></div>
      </div>

      {/* Image Split into Left and Right */}
      <div className="flex flex-col md:flex-row justify-center items-center">
        {/* Left Half of the Image */}
        <div className="md:w-1/2 w-full p-2 flex justify-center">
          <img
             src="/sampangi/location.png"
            alt="Location left"
            className="object-cover object-left w-[50%] h-auto"
          />
        </div>

        {/* Right Half of the Image */}
        <div className="md:w-1/2 w-full p-2 flex justify-center">
          <img
            src="/sampangi/sampangi-city-of-the-joy-aliar-loction-maps-1500x1414.jpg"
            alt="Location right"
            className="object-cover object-right w-[60%] h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default LocationHighlights;

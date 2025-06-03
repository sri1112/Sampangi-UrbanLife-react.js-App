import React from "react";

const HeroSection = () => {
  return (
    <div className="w-full">
      {/* Hero Section with Background Image */}
      {/* <div
        className="relative h-[90vh] bg-cover bg-center flex items-center justify-center"
        style ={{
          backgroundImage: `url("/sampangi/sam.mp4")`, // update this path
        }}
      > */}
      <div className="relative h-[90vh] w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/sampangi/sam.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay for dark effect */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Text on top */}
        <div className="relative text-center text-white px-4">
          <h2 className="text-2xl sm:text-3xl font-light mb-2">
            {/* sampangi */}
            </h2>
          <h1 className="text-5xl sm:text-6xl font-bold mb-2">
            {/* City of the Joy */}
          </h1>
          <h3 className="text-xl sm:text-2xl font-semibold">
            {/* The Wellness Resort */}
          </h3>
        </div>
      </div>

      {/* Description Section */}
      <div className="bg-white text-center px-6 py-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4 relative inline-block">
          City of The Joy Wellness Resort
          <span className="block w-12 h-1 bg-red-500 mx-auto mt-2 rounded-sm" />
        </h2>
        <p className="text-gray-700 max-w-4xl mx-auto text-sm sm:text-base leading-relaxed">
          City of the Joy is a visionary project dedicated to creating a
          harmonious and sustainable way of life. It embraces a serene
          environment, health, and a peaceful life by promoting natural food
          that nourishes both the body and mind. Rooted in the belief that
          nature provides everything we need, this project ensures that future
          generations benefit from the best that nature has to offer. The fresh
          air, organic produce, and holistic lifestyle help in preventing and
          even curing long-term illnesses through nature’s healing power...
        </p>
      </div>

      {/* Subheading Section */}
      <div className="bg-white text-center px-6 pb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          The Inspiration
        </h2>
        <p className="text-gray-700 max-w-4xl mx-auto text-sm sm:text-base leading-relaxed">
          The idea for City of the Joy emerged from a deep desire to create a
          space where people can live in sync with nature while healing and
          growing...
        </p>
      </div>
    </div>
  );
};

export default HeroSection;

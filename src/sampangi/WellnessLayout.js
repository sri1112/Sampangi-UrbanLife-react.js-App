import React from "react";

const WellnessLayout = () => {
  return (
    <div className="bg-[#fdfaf5] text-center px-4 py-12 space-y-16">
      {/* Row 1 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
        <img src="/sampangi/1.jpg" alt="Tranquil Space" className="rounded-xl shadow-md w-full max-w-md" />
        <img src="/sampangi/2.jpg" alt="Family Outdoors" className="rounded-xl shadow-md w-full max-w-md" />
      </div>
      <p className="text-lg font-semibold text-gray-800">
        Own a space where tranquility, style, and well-being<br />come together in one prestigious address
      </p>

      {/* Row 2 */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-items-center">
        <div>
          <img src="/sampangi/3.jpg" alt="Woman Relaxing" className="rounded-xl shadow-md w-full max-w-sm" />
          <p className="text-sm mt-2 text-gray-600">
            Own a space where tranquility, style, & well-being come together in one prestigious address
          </p>
        </div>
        <div>
          <img src="/sampangi/4.jpg" alt="Resort Pool" className="rounded-xl shadow-md w-full max-w-sm" />
          <p className="text-sm mt-2 text-gray-600">
            Resort Residences designed for your mind, body & soul
          </p>
        </div>
        <div>
          <img src="/sampangi/1.jpg" alt="Yoga View" className="rounded-xl shadow-md w-full max-w-sm" />
          <p className="text-sm mt-2 text-gray-600">
            Step into a lifestyle that blends nature, health, & refined living in perfect harmony
          </p>
        </div>
      </div>

      {/* Title */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800">A Holiday Home That Heals & Delights</h2>
        <p className="text-lg text-gray-700 mt-1">Amidst Wellness, Luxury & Legacy</p>
        <span className="block w-12 h-1 bg-red-500 mx-auto mt-2 rounded-sm" />
      </div>

      {/* Features Icons Row */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 text-sm text-gray-700 max-w-6xl mx-auto">
        <div>
          <img src="/sampangi/6.jpg" alt="Elegant Home" className="mx-auto mb-2 h-10" />
          <p>Elegant 500 sq. ft. Designer Holiday Home nestled on a secluded 35.5k Yards Park – your personal retreat</p>
        </div>
        <div>
          <img src="/sampangi/7.jpg" alt="Nature Inspired" className="mx-auto mb-2 h-10" />
          <p>Surrounded by Nature & Serenity, inside a Fully-developed wellness resort offering tranquility and rejuvenation</p>
        </div>
        <div>
          <img src="/sampangi/1.jpg" alt="Access to Wellness" className="mx-auto mb-2 h-10" />
          <p>Access to World-Class Wellness Amenities like pools, herb gardens, spa, shopping, and organic living</p>
        </div>
        <div>
          <img src="/sampangi/1.jpg" alt="Managed Living" className="mx-auto mb-2 h-10" />
          <p>Fully Managed Living Experience – maintenance, food, housekeeping, and concierge, done-for-you</p>
        </div>
      </div>

      {/* Final Image */}
      <img src="/sampangi/5.jpg" alt="Luxury Villa" className="rounded-xl shadow-lg w-full max-w-4xl mx-auto" />
    </div>
  );
};

export default WellnessLayout;

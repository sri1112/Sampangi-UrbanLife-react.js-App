// import React from 'react';

// const Header = () => {
//   return (
//     <div className="w-full">
//       {/* Top bar */}
//       <div className="bg-black text-white text-sm flex justify-between items-center px-6 py-2">
//         <div>
//           <span className="mr-4 cursor-pointer">India</span>
//           <span className="mr-4 cursor-pointer">UAE</span>
//           <span className="cursor-pointer">Singapore</span>
//         </div>
//         <div className="flex items-center space-x-6">
//           <span className="flex items-center">
//             📧 <span className="ml-1">info@sampanginfra.com</span>
//           </span>
//           <span className="flex items-center">
//             🕒 <span className="ml-1">Mon - Sat 9:30am - 7:00pm</span>
//           </span>
//           <div className="flex space-x-3">
//             <i className="fab fa-facebook-f cursor-pointer" />
//             <i className="fab fa-instagram cursor-pointer" />
//             <i className="fab fa-youtube cursor-pointer" />
//           </div>
//         </div>
//       </div>

//       {/* Main Header */}
//       <div className="flex justify-between items-center px-9 py-1 shadow-md bg-white">
//         {/* Logo */}
//         <div className="flex items-center space-x-4">
//           <img src="/sampangi/sampangi-infra-logo.png" alt="Sampangi Logo" className="h-12" />
//           {/* <div>
//             <span className="block text-red-600 font-bold text-lg">sampangi</span>
//             <span className="block text-xs text-gray-500">Realty & Infrastructure</span>
//           </div> */}
//         </div>

//         {/* Contact */}
//         <div className="flex items-center space-x-2">
//           <span className="text-red-100 text-xl">🎧</span>
//           <div>
//             <p className="text-xs text-gray-500">Call Now</p>
//             <p className="text-md font-bold">+91 63000 98374</p>
//           </div>
//         </div>
//       </div>

//       {/* Navigation */}
//       <nav className="bg-white px-6 py-2 shadow-sm">
//         <ul className="flex space-x-6 text-sm font-semibold">
//           <li className="text-red-600 cursor-pointer">Home</li>
//           <li className="cursor-pointer">About Us</li>
//           <li className="cursor-pointer">Our Projects ▾</li>
//           <li className="cursor-pointer">Awards & Achievements</li>
//           <li className="cursor-pointer">CSR Activities ▾</li>
//           <li className="cursor-pointer">Gallery ▾</li>
//           <li className="cursor-pointer">Blog</li>
//           <li className="cursor-pointer">Contact Us</li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default Header;
// import React from 'react';

// const Header = () => {
//   return (
//     <div className="w-full fixed top-0 z-50 bg-white shadow-md">
//       {/* Top bar */}
//       <div className="bg-black text-white text-sm flex justify-between items-center px-6 py-2">
//         <div>
//           <span className="mr-4 cursor-pointer">India</span>
//           <span className="mr-4 cursor-pointer">UAE</span>
//           <span className="cursor-pointer">Singapore</span>
//         </div>
//         <div className="flex items-center space-x-6">
//           <span className="flex items-center">
//             📧 <span className="ml-1">info@sampanginfra.com</span>
//           </span>
//           <span className="flex items-center">
//             🕒 <span className="ml-1">Mon - Sat 9:30am - 7:00pm</span>
//           </span>
//           <div className="flex space-x-3">
//             <i className="fab fa-facebook-f cursor-pointer" />
//             <i className="fab fa-instagram cursor-pointer" />
//             <i className="fab fa-youtube cursor-pointer" />
//           </div>
//         </div>
//       </div>

//       {/* Main Header */}
//       <div className="flex justify-between items-center px-9 py-1 bg-white">
//         <div className="flex items-center space-x-4">
//           <img
//             src="/sampangi/sampangi-infra-logo.png"
//             alt="Sampangi Logo"
//             className="h-12"
//           />
//         </div>

//         <div className="flex items-center space-x-2">
//           <span className="text-red-100 text-xl">🎧</span>
//           <div>
//             <p className="text-xs text-gray-500">Call Now</p>
//             <p className="text-md font-bold">+91 63000 98374</p>
//           </div>
//         </div>
//       </div>

//       {/* Navigation */}
//       <nav className="bg-white px-6 py-2 shadow-sm">
//         <ul className="flex space-x-6 text-sm font-semibold">
//           <li className="text-red-600 cursor-pointer">Home</li>
//           <li className="cursor-pointer">About Us</li>
//           <li className="cursor-pointer">Our Projects ▾</li>
//           <li className="cursor-pointer">Awards & Achievements</li>
//           <li className="cursor-pointer">CSR Activities ▾</li>
//           <li className="cursor-pointer">Gallery ▾</li>
//           <li className="cursor-pointer">Blog</li>
//           <li className="cursor-pointer">Contact Us</li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default Header;
import React from 'react';

const Header = () => {
  return (
    <div className="w-full fixed top-0 z-50 bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-black text-white text-sm flex justify-between items-center px-6 py-2">
        <div>
          <span className="mr-4 cursor-pointer">India</span>
          <span className="mr-4 cursor-pointer">UAE</span>
          <span className="cursor-pointer">Singapore</span>
        </div>
        <div className="flex items-center space-x-6">
          <span className="flex items-center">
            📧 <span className="ml-1">info@sampanginfra.com</span>
          </span>
          <span className="flex items-center">
            🕒 <span className="ml-1">Mon - Sat 9:30am - 7:00pm</span>
          </span>
          <div className="flex space-x-3">
            <i className="fab fa-facebook-f cursor-pointer" />
            <i className="fab fa-instagram cursor-pointer" />
            <i className="fab fa-youtube cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Logo + Navigation + Call Section in one row */}
      <div className="flex justify-between items-center px-9 py-3 bg-white">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/sampangi/sampangi-infra-logo.png"
            alt="Sampangi Logo"
            className="h-12 mr-6"
          />
        </div>

        {/* Navigation */}
        <ul className="flex space-x-6 text-sm font-semibold flex-1 justify-center">
          <li className="text-red-600 cursor-pointer">Home</li>
          <li className="cursor-pointer">About Us</li>
          <li className="cursor-pointer">Our Projects ▾</li>
          <li className="cursor-pointer">Awards & Achievements</li>
          <li className="cursor-pointer">CSR Activities ▾</li>
          <li className="cursor-pointer">Gallery ▾</li>
          <li className="cursor-pointer">Blog</li>
          <li className="cursor-pointer">Contact Us</li>
        </ul>

        {/* Call Section */}
        <div className="flex items-center space-x-2">
          <span className="text-red-100 text-xl">🎧</span>
          <div>
            <p className="text-xs text-gray-500">Call Now</p>
            <p className="text-md font-bold">+91 63000 98374</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

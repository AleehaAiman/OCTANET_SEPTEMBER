import React from 'react';
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";
const App = () => {
  return (
    <div 
    className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 p-6">
    <div className="flex flex-col md:flex-row items-center  bg-green-100 p-4 mb-3 md:p-8 space-y-4 md:space-y-0 md:space-x-4">
      {/* Left Section */}
      <div className="md:w-1/2 text-center md:text-left space-y-6">
      <h1 className="text-huge font-cursive font-extrabold text-gray-800 ">
        Naqashi
      </h1>
        <h2 className="text-mid font-semibold text-gray-700">Calligraphy Store</h2>
        <p className="text-gray-600">
      
          We have a wide variety of hand painted calligraphies to choose from.
          Now you can style your homeplace with unqiue and affordable calligraphies.
        </p>

        <a href="https://www.instagram.com/naqashi_i" target="_blank" rel="noopener noreferrer">
          <button className="bg-green-700 text-white mt-8 px-6 py-3 font-semibold text-lg rounded-full shadow-md hover:bg-green-800 transition duration-300">
            Buy Now
          </button>
        </a>

        <div className="space-y-2 mt-6">
          <p className="text-gray-600  flex items-center">
      
            <a
            href="https://wa.me/03356675390" // Replace with your actual WhatsApp link
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 mr-2 hover:text-green-600 text-3xl transition-colors duration-200"
          >
            <FaWhatsapp />
          </a>
            123-456-7890
          </p>
          <p className="text-gray-600 flex items-center">
          
             <a
            href="https://instagram.com/naqashi_i" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 mr-2 hover:text-pink-600 text-3xl transition-colors duration-200"
          >
            <FaInstagram />
          </a>
            
            naqashi_i
          </p>
          <p className="text-gray-600 flex items-center">
          <div className="text-red-600 mr-2 hover:text-pink-600 text-3xl transition-colors duration-200">
            <FaLocationDot />
          </div>
          
            Faisalabad
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2">
        <img
          src="/mmnn.PNG"
          alt="Naqashi Store"
          className="rounded-xl shadow-lg"
        />
      </div>
      <div className="flex justify-center space-x-4 mt-4 pb-4">
         
          
          
        </div>
    </div>
    </div>
  );
};

export default App;

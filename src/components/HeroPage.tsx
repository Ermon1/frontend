import React from "react";
import "./HeroPage.css"; // Import the CSS file for animation styles
import image1 from "../asset/image/image1.jpg";
import image2 from "../asset/image/image2.jpg";
import image3 from "../asset/image/image3.png";
import { Link } from "react-router-dom";

const HeroPage: React.FC = () => {
  return (
    <div className="relative bg-gray-900 text-white h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-[-1]">
        <img
          src={image1}
          alt="image.jpg"
          className="w-full h-full object-cover"
        />
        <img
          src={image2}
          alt="image.jpg"
          className="w-full h-full object-cover"
        />
        <img
          src={image3}
          alt="image.jpg"
          className="w-full h-full object-cover"
        />
      </div>
     
      <div className="relative z-10 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Your Gateway to Exam Success
        </h1>
        <p className="text-lg mb-8">
          Revolutionize your exam preparation with our advanced platform.
        </p>
        <Link
          to="signup" // Replace with the actual link or action
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default HeroPage;

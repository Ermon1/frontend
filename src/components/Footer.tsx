import React from "react";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";



const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between px-6">
        <div className="footer-section">
          <h3 className="text-xl font-bold mb-4">Connect with Us</h3>
          <div className="flex space-x-4">
            <BsTwitter className="text-2xl cursor-pointer" />
            <SiLinkedin className="text-2xl cursor-pointer" />
            <BsYoutube className="text-2xl cursor-pointer" />
            <FaFacebookF className="text-2xl cursor-pointer" />
          </div>
        </div>
        <div className="footer-section">
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Services
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p>123 Main Street, City, Country</p>
          <p>Email: info@example.com</p>
          <p>Phone: +1 234 567 890</p>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-400">
        <p>&copy; 2024 Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

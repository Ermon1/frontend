import React from "react";
import BannerBackground from "../asset/image/bg.jpg";
import BannerImage from "../asset/image/bg.jpg";
import Navbar from "./Header";
import { FiArrowRight } from "react-icons/fi";
import '../App.css'
import { useNavigate } from "react-router-dom";
const Home = () => {

    const navigate = useNavigate();

    const handleSignUpClick = () => {
     
      navigate("/signup");
    };


  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          {/* <img src={BannerBackground} alt="" /> */}
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">Your Favorite Exam Center</h1>
          <p className="primary-text">
            Our comprehensive exam preparation platform simplifies your study
            routine by providing expertly crafted study materials, including
            practice questions, detailed explanations, and mock exams. With our
            intuitive interface and personalized study plans, you can focus on
            mastering the content and excel in your exams.
          </p>

          <button className="secondary-button" onClick={handleSignUpClick}>
            get started <FiArrowRight />
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import "../App.css";
import AboutBackground from "../asset/image/bg.jpg";
import AboutBackgroundImage from "../asset/image/exam.jpg";
import { BsFillPlayCircleFill } from "react-icons/bs";

const AboutPage: React.FC = () => {
  return (
    <div className="about-section-container">
      {/* <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div> */}
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Preparation Is Key to Success in Your Culinary Journey
        </h1>

        <p className="primary-text">
          Welcome to our comprehensive exam website, where academic success
          meets convenience. Our platform is designed to provide students,
          educators, and institutions with a seamless and efficient exam
          experience. Whether you're a student preparing for a crucial exam, an
          educator creating assessments, or an institution managing large-scale
          exams, we have the tools and resources to support your needs. Our
          platform offers a wide range of features, including customizable
          exams, secure proctoring options, instant grading and feedback, and
          detailed analytics to track performance and identify areas for
          improvement. 
        </p>

        <p className="primary-text">
          Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
          facilisis at fringilla quam.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

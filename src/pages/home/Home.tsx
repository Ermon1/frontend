import React from "react";
import Home from "../../components/Home";
import HeroPage from "../../components/HeroPage";
import AboutPage from "../../components/AboutPage";
import BlogPage from "../../components/BlogPage";
import TestimonialPage from "../../components/TestimonialPage";
import ContactPage from "../../components/ContactPage";
import Footer from "../../components/Footer";
import "../../App.css";
const HomePage: React.FC = () => {
  return (
    <>
    <div className="App">
      <Home />
      <AboutPage />
      <TestimonialPage />
      <ContactPage />
     
    </div>
     <Footer />
    </>
  );
};

export default HomePage;

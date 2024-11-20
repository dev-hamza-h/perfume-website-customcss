import React from 'react';
import heroImg from "@/assets/heroImg.png";
import Image from 'next/image';
import '@/styles/Hero.css'; 

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        
        {/* Right section containing the image */}
        <div className="hero-image-container">
          <Image
            src={heroImg}
            alt="Victory Scented Fragrance Bottle"
            className="hero-image"
          />
        </div>

        {/* Left section containing the text and button */}
        <div className="hero-text-container">
          <h1 className="hero-heading">
            Elevate Your Spirit with Victory Scented Fragrances!
          </h1>
          <p className="hero-description">
            Shop now and embrace the sweet smell of victory with Local Face.
          </p>

          {/* Button Container */}
          <div className="hero-button-container">
            <button className="hero-button">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

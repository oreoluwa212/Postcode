import React from 'react'

const HeroSection = () => {
  return (
    <>
      <div className="hero-container">
        <div className="hero-bg">
          <div className="hero-section">
            <h1>Check My Postcode</h1>
            <h2>Get started by searching for a postcode or place name.</h2>
            <div className="search-hero">
               <input type="text" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection
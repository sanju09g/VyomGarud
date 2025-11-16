import React, { useEffect, useRef } from "react";
import "./Capabilities.css";

function Capabilities() {
  const headingRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          headingRef.current.classList.add("fade-visible");
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(headingRef.current);
  }, []);

  return (
    <section className="products" id="products">
      <div className="products-container">
        <div className="products-header fade-trigger" ref={headingRef}>
          <h1>Our Products</h1>
          <p>Advanced UAV Systems Designed for Performance & Precision</p>
        </div>

        <div className="product-grid">
          <div className="product-card">
            <img src="/drone2.jpg" alt="Drone Model" />
            <h2>VG-Aquila X1</h2>
            <p className="tagline">Long-range Tactical UAV</p>

            <ul className="features">
              <li>⦿ 4K Recon Camera</li>
              <li>⦿ 60 min Flight Time</li>
              <li>⦿ Autonomous Mode</li>
              <li>⦿ Wind Resistance Level 6</li>
            </ul>

            <a href="#" className="product-btn">
              View Details
            </a>
          </div>

          <div className="product-card">
            <img src="/drone.webp" alt="Drone Model" />
            <h2>VG-Falcon Pro</h2>
            <p className="tagline">AI-Powered Surveillance Drone</p>

            <ul className="features">
              <li>⦿ Dual Sensor System</li>
              <li>⦿ Smart Path Optimization</li>
              <li>⦿ 50 km Range</li>
              <li>⦿ Thermal Imaging</li>
            </ul>

            <a href="#" className="product-btn">
              View Details
            </a>
          </div>

          <div className="product-card">
            <img src="/drone3.jpg" alt="Drone Model" />
            <h2>VG-Ranger S2</h2>
            <p className="tagline">Compact Field-Ops Drone</p>

            <ul className="features">
              <li>⦿ Lightweight Carbon Frame</li>
              <li>⦿ 35 min Endurance</li>
              <li>⦿ GPS + GLONASS</li>
              <li>⦿ Real-Time Telemetry</li>
            </ul>

            <a href="#" className="product-btn">
              View Details
            </a>
          </div>
        </div>

        <div className="specs-section">
          <h2>Technical Specifications</h2>

          <div className="specs-table">
            <div className="spec-row">
              <span className="spec-title">Frame Material</span>
              <span className="spec-value">Aerospace-grade Carbon Fiber</span>
            </div>

            <div className="spec-row">
              <span className="spec-title">Max Flight Altitude</span>
              <span className="spec-value">5200 m</span>
            </div>

            <div className="spec-row">
              <span className="spec-title">Communication Range</span>
              <span className="spec-value">20–50 km</span>
            </div>

            <div className="spec-row">
              <span className="spec-title">Battery Life</span>
              <span className="spec-value">35–60 minutes</span>
            </div>

            <div className="spec-row">
              <span className="spec-title">Payload Capacity</span>
              <span className="spec-value">1.5 – 4.5 kg</span>
            </div>
          </div>
        </div>

        <div className="products-cta">
          <h3>Need a Custom Drone?</h3>
          <p>
            We build mission-specific drones for defense, surveillance, and
            mapping.
          </p>
          <a href="#footer" className="cta-btn">
            Contact Sales
          </a>
        </div>
      </div>
    </section>
  );
}

export default Capabilities;

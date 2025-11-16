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
    <section class="products" id="products">
      <div class="products-container">
        <div className="products-header fade-trigger" ref={headingRef}>
          <h1>Our Products</h1>
          <p>Advanced UAV Systems Designed for Performance & Precision</p>
        </div>

        <div class="product-grid">
          <div class="product-card">
            <img src="/drone2.jpg" alt="Drone Model" />
            <h2>VG-Aquila X1</h2>
            <p class="tagline">Long-range Tactical UAV</p>

            <ul class="features">
              <li>⦿ 4K Recon Camera</li>
              <li>⦿ 60 min Flight Time</li>
              <li>⦿ Autonomous Mode</li>
              <li>⦿ Wind Resistance Level 6</li>
            </ul>

            <a href="#" class="product-btn">
              View Details
            </a>
          </div>

          <div class="product-card">
            <img src="/drone.webp" alt="Drone Model" />
            <h2>VG-Falcon Pro</h2>
            <p class="tagline">AI-Powered Surveillance Drone</p>

            <ul class="features">
              <li>⦿ Dual Sensor System</li>
              <li>⦿ Smart Path Optimization</li>
              <li>⦿ 50 km Range</li>
              <li>⦿ Thermal Imaging</li>
            </ul>

            <a href="#" class="product-btn">
              View Details
            </a>
          </div>

          <div class="product-card">
            <img src="/drone3.jpg" alt="Drone Model" />
            <h2>VG-Ranger S2</h2>
            <p class="tagline">Compact Field-Ops Drone</p>

            <ul class="features">
              <li>⦿ Lightweight Carbon Frame</li>
              <li>⦿ 35 min Endurance</li>
              <li>⦿ GPS + GLONASS</li>
              <li>⦿ Real-Time Telemetry</li>
            </ul>

            <a href="#" class="product-btn">
              View Details
            </a>
          </div>
        </div>

        <div class="specs-section">
          <h2>Technical Specifications</h2>

          <div class="specs-table">
            <div class="spec-row">
              <span class="spec-title">Frame Material</span>
              <span class="spec-value">Aerospace-grade Carbon Fiber</span>
            </div>

            <div class="spec-row">
              <span class="spec-title">Max Flight Altitude</span>
              <span class="spec-value">5200 m</span>
            </div>

            <div class="spec-row">
              <span class="spec-title">Communication Range</span>
              <span class="spec-value">20–50 km</span>
            </div>

            <div class="spec-row">
              <span class="spec-title">Battery Life</span>
              <span class="spec-value">35–60 minutes</span>
            </div>

            <div class="spec-row">
              <span class="spec-title">Payload Capacity</span>
              <span class="spec-value">1.5 – 4.5 kg</span>
            </div>
          </div>
        </div>

        <div class="products-cta">
          <h3>Need a Custom Drone?</h3>
          <p>
            We build mission-specific drones for defense, surveillance, and
            mapping.
          </p>
          <a href="#footer" class="cta-btn">
            Contact Sales
          </a>
        </div>
      </div>
    </section>
  );
}

export default Capabilities;

import React from 'react';
import "./Highlights.css";

function Highlights() {
    return ( <>
    <section class="highlights">
  <div class="highlights-container">


    <div class="highlights-header">
      <h1>Our Highlights</h1>
      <p>Excellence in UAV Engineering & Autonomous Flight Systems</p>
    </div>

    <div class="highlights-grid">

      <div class="highlight-box">
        <h2>150+ Successful Missions</h2>
        <p>Tested across defense, surveillance, and mapping environments.</p>
      </div>

      <div class="highlight-box">
        <h2>AI-Driven Autonomy</h2>
        <p>Path planning, obstacle avoidance, and intelligent decision making.</p>
      </div>

      <div class="highlight-box">
        <h2>Military-Grade Build</h2>
        <p>Tough composite body, weather-resistant, and field-proven durability.</p>
      </div>

      <div class="highlight-box">
        <h2>Realtime Data Streaming</h2>
        <p>Encrypted telemetry, HD video, and advanced analytics pipeline.</p>
      </div>

      <div class="highlight-box">
        <h2>Long Flight Endurance</h2>
        <p>Up to 75 minutes of uninterrupted aerial operations.</p>
      </div>

      <div class="highlight-box">
        <h2>Precision Payload Systems</h2>
        <p>Multi-sensor support including EO-IR, LiDAR, and thermal imaging.</p>
      </div>
    </div>

    <div class="metrics">
      <h2>Performance Metrics</h2>
      <ul>
        <li><strong>Range:</strong> Up to 15 km</li>
        <li><strong>Top Speed:</strong> 85 km/h</li>
        <li><strong>Wind Resistance:</strong> Up to 40 km/h</li>
        <li><strong>Payload Capacity:</strong> 2.5 kg</li>
        <li><strong>Operational Altitude:</strong> 400+ m AGL</li>
      </ul>
    </div>


    <div class="awards">
      <h2>Awards & Recognitions</h2>
      <div class="award-list">
        <div class="award-card">Best UAV Startup 2025</div>
        <div class="award-card">Innovation Excellence Award</div>
        <div class="award-card">Defense Tech Certification Level-1</div>
      </div>
    </div>


    <div class="highlight-cta">
      <h3>Experience UAV Innovation</h3>
      <p>Explore drones engineered for precision, reliability & intelligent missions.</p>
      <a href="#" class="cta-btn">View Products</a>
    </div>

  </div>
</section>

    </> );
}

export default Highlights;
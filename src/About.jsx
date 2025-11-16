import React from 'react';
import "./About.css";

function About() {
    return ( <>
    
    <section class="about">
  <div class="about-container">


    <div class="about-header">
      <h1>About VyomGarud</h1>
      <p>Engineering the Future of Intelligent Aerial Systems</p>
    </div>


    <div class="about-content">
      <img src="https://via.placeholder.com/500x300" alt="Drone Image" class="about-img" />

      <div class="about-text">
        <h2>Who We Are</h2>
        <p>
          VyomGarud is a next-generation aerospace startup focused on developing
          advanced autonomous UAVs for surveillance, mapping, and defense-grade applications.
          Our systems are built with precision engineering, high-performance sensors,
          and intelligent flight software.
        </p>
      </div>
    </div>

  
    <div class="mv-section">
      <div class="mv-box">
        <h3>Our Mission</h3>
        <p>
          To create powerful, reliable, and intelligent aerial systems that enhance
          situational awareness and redefine mission capabilities.
        </p>
      </div>

      <div class="mv-box">
        <h3>Our Vision</h3>
        <p>
          To become a global leader in autonomous drone technology through innovation,
          precision, and uncompromising quality.
        </p>
      </div>
    </div>

    
    <div class="values">
      <h2>Core Values</h2>
      <ul>
        <li>Innovation</li>
        <li>Precision Engineering</li>
        <li>Reliability</li>
        <li>Safety & Compliance</li>
        <li>Customer-Centric Approach</li>
      </ul>
    </div>


    <div class="why">
      <h2>Why Choose Us</h2>
      <p>
        With cutting-edge UAV designs, advanced AI capabilities, and rigorous testing standards,
        VyomGarud ensures unmatched performance in real-world missions.
      </p>
      <ul>
        <li>Defense-grade technology</li>
        <li>Lightweight & rugged designs</li>
        <li>Long-flight endurance</li>
        <li>Custom mission configurations</li>
        <li>24/7 support & training</li>
      </ul>
    </div>

 
    <div class="team">
      <h2>Our Team</h2>
      <div class="team-cards">
        <div class="team-card">
          <img src="https://via.placeholder.com/200" />
          <h4>Team Member</h4>
          <p>Drone Engineer</p>
        </div>

        <div class="team-card">
          <img src="https://via.placeholder.com/200" />
          <h4>Team Member</h4>
          <p>Software Architect</p>
        </div>

        <div class="team-card">
          <img src="https://via.placeholder.com/200" />
          <h4>Team Member</h4>
          <p>Flight Operations Lead</p>
        </div>
      </div>
    </div>

 
    <div class="cta-box">
      <h3>Want to work with us?</h3>
      <p>Let’s build the future of UAV technology together.</p>
      <a href="#" class="cta-btn">Contact Us</a>
    </div>

  </div>
</section>
</> );
}

export default About;
import React, { useEffect } from "react";
import "./About.css";

function About() {
  useEffect(() => {
    const reveal = () => {
      const elements = document.querySelectorAll(".reveal");
      elements.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
          el.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", reveal);
    return () => window.removeEventListener("scroll", reveal);
  }, []);

  return (
    <>
      <section className="about" id="about">
        <div className="about-container">
          <div className="about-header reveal">
            <h1>About VyomGarud</h1>
            <p>Engineering the Future of Intelligent Aerial Systems</p>
          </div>

          <div className="about-content reveal">
            <img src="/drone.webp" alt="Drone" className="about-img" />
            <div className="about-text">
              <h2>Who We Are</h2>
              <p>
                VyomGarud is a next-generation aerospace startup dedicated to
                creating smarter, safer, and more autonomous aerial technologies
                for the future.
              </p>
            </div>
          </div>

          <div className="mv-section reveal">
            <div className="mv-box">
              <h3>Our Mission</h3>
              <p>To create powerful aerial systems ...</p>
            </div>

            <div className="mv-box">
              <h3>Our Vision</h3>
              <p>To become a global leader ...</p>
            </div>
          </div>

          <div className="values reveal">
            <h2>Core Values</h2>
            <ul>
              <li>Innovation</li>
              <li>Precision Engineering</li>
              <li>Reliability</li>
              <li>Safety & Compliance</li>
              <li>Customer-Centric Approach</li>
            </ul>
          </div>

          <div className="why reveal">
            <h2>Why Choose Us</h2>
            <p>With cutting-edge UAV designs...</p>
            <ul>
              <li>Defense-grade technology</li>
              <li>Lightweight & rugged</li>
              <li>Long-flight endurance</li>
              <li>Custom mission configurations</li>
              <li>24/7 support</li>
            </ul>
          </div>

          <div className="team reveal">
            <h2>Our Team</h2>
            <div className="team-cards">
              <div className="team-card">
                <h4>Team Member</h4>
                <p>Drone Engineer</p>
              </div>
              <div className="team-card">
                <h4>Team Member</h4>
                <p>Software Architect</p>
              </div>
              <div className="team-card">
                <h4>Team Member</h4>
                <p>Flight Ops Lead</p>
              </div>
            </div>
          </div>

          <div className="cta-box reveal">
            <h3>Want to work with us?</h3>
            <p>Let’s build the future of UAV technology.</p>
            <a href="#" className="cta-btn">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;

import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer className="footer" id="footer">
        <div className="footer-container">
          <div className="footer-left">
            <h2 className="footer-logo">VyomGarud</h2>
            <p class="footer-desc">
              Advanced UAV & Drone Systems. Precision • Innovation •
              Performance.
            </p>
          </div>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#products">Products</a>
            <a href="#footer">Contact</a>
          </div>

          <div className="footer-social">
            <a href="https://github.com/sanju09g">Github</a>
            <a href="https://www.linkedin.com/in/sanjitsingh004/">LinkedIn</a>
          </div>
        </div>

        <p className="footer-bottom">© 2025 VyomGarud — All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default Footer;

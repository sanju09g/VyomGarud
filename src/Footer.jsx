import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer class="footer" id="footer">
        <div class="footer-container">
          <div class="footer-left">
            <h2 class="footer-logo">VyomGarud</h2>
            <p class="footer-desc">
              Advanced UAV & Drone Systems. Precision • Innovation •
              Performance.
            </p>
          </div>

          <div class="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#products">Products</a>
            <a href="#footer">Contact</a>
          </div>

          <div class="footer-social">
            <a href="https://github.com/sanju09g">Github</a>
            <a href="https://www.linkedin.com/in/sanjitsingh004/">LinkedIn</a>
          </div>
        </div>

        <p class="footer-bottom">© 2025 VyomGarud — All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default Footer;

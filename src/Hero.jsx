import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <>
      <section class="showcase">
        <header>
          <h2 className="logo">VyomGarud</h2>
          <ul className="nav__links">
        <li className="link"><a href="#">Home</a></li>
        <li className="link"><a href="#">About Us</a></li>
        <li className="link"><a href="#">Services</a></li>
        <li className="link"><a href="#" id="nav__btn">Contact</a></li>
      </ul>
        </header>
        <video src="/space.mp4" muted loop autoPlay playsInline></video>

        <div className="overlay"></div>
        <div className="text">
          <h2>Never Stop</h2>
          <h3>Exploring The World</h3>
          <p className="mute">
         
          Our technology combines military-grade engineering with intelligent autonomy for the future of aerial defense
          </p>
          <a href="#">Explore</a>
        </div>
        <ul className="social">
          <li>
            <a href="#">
              <img src="https://i.ibb.co/x7P24fL/facebook.png" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="https://i.ibb.co/Wnxq2Nq/twitter.png" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="https://i.ibb.co/ySwtH4B/instagram.png" />
            </a>
          </li>
        </ul>
      </section>

    </>
  );
}

export default Hero;

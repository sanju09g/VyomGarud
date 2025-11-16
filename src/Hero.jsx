import React, { useState, useEffect } from "react";
import "./Hero.css";

function Hero() {
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    const btn = document.getElementById("backTopBtn");

    const handleScroll = () => {
      if (window.scrollY > 400) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const videos = document.querySelectorAll(".video-container video");
    const thumbnails = document.querySelectorAll(".thumbnails .item");

    thumbnails.forEach((thumbnail, index) => {
      thumbnail.addEventListener("click", () => {
        document.querySelector(".video-container video.active").classList.remove("active");
        document.querySelector(".thumbnails .item.active").classList.remove("active");
        videos[index].classList.add("active");
        videos[index].play();
        thumbnail.classList.add("active");
      });
    });
  }, []);

  return (
    <>
      <section className="showcase">
        <header>
          <h2 className="logo">VyomGarud</h2>

          <nav className="navbar">
            <ul className={`nav__links ${menuActive ? "active" : ""}`}>
              <li className="link"><a href="#home">Home</a></li>
              <li className="link"><a href="#about">About Us</a></li>
              <li className="link"><a href="#products">Products</a></li>
              <li className="link"><a href="#highlights">Highlights</a></li>
              <li className="link"><a href="#footer" id="nav__btn">Contact</a></li>
            </ul>

            <div className="hamburger" onClick={() => setMenuActive(!menuActive)}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </nav>
        </header>

        <div className="video-container">
          <video src="/drone01.mp4" muted loop autoPlay playsInline className="active"></video>
          <video src="/drone02.mp4" muted loop playsInline></video>
          <video src="/dr2.mp4" muted loop playsInline></video>
        </div>

        <div className="overlay" id="home"></div>
        <div className="text">
          <h2>Never Stop</h2>
          <h3>Innovating Drone Tech</h3>
          <p className="mute">
            Our technology combines military-grade engineering with intelligent autonomy for the future of aerial defense
          </p>
          <a href="#">Explore</a>
        </div>

        <ul className="thumbnails">
          <li className="item active">
            <img src="drone1.webp" alt="video1" />
          </li>
          <li className="item">
            <img src="drone2.jpg" alt="video2" />
          </li>
          <li className="item">
            <img src="drone.webp" alt="video3" />
          </li>
        </ul>
      </section>

      <a href="#home" className="back-top" id="backTopBtn">
        <i className="fa-solid fa-arrow-up"></i>
      </a>
    </>
  );
}

export default Hero;

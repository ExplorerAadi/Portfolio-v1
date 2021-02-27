import React, { useState } from "react";
import "./header.css";
import menu from "../../media/menu.svg";
import cross from "../../media/cross.svg";

const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [slideInOut, setSlideInOut] = useState(false);

  // useEffect(() => {
  //   window.addEventListener(
  //     "resize",
  //     () => {
  //       const resized = window.innerWidth <= 768;
  //       setIsMobile(resized);
  //     },
  //     false
  //   );
  // }, []);

  const toggleMenu = () => {
    setIsMenuVisible(false);
    setSlideInOut(false);
  };

  const slideMenu = () => {
    setIsMenuVisible(true);
    setSlideInOut(!slideInOut);
  };

  return (
    <header>
      <div className="navWrapper container">
        <div id="left-header">
          <h2>AR</h2>
        </div>
        <img src={menu} alt="menu" onClick={slideMenu} />
        <ul
          className={`${
            isMenuVisible ? (slideInOut ? "slideIn" : "slideOut") : ""
          }`}
        >
          <img src={cross} alt="cancel" onClick={slideMenu} />
          <a href="#projects" onClick={toggleMenu}>
            Work
          </a>
          <a href="#about" onClick={toggleMenu}>
            About
          </a>
          <a href="#contact" onClick={toggleMenu}>
            Contact
          </a>
        </ul>
      </div>
    </header>
  );
};

export default Header;

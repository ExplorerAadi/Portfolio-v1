import React from "react";

const LeftWork = () => {
  return (
    <div className="section-fill-leftImg first-project">
      <div className="project-img">
        <video src={WrapsyGif} width="535" height="328" loop autoPlay>
          Your browser does not support the video tag
        </video>
        <img src={wrapsyImg} alt="A Laptop mockup" />
      </div>
      <div className="project-content">
        <h1>
          Wrapsy <span>-</span> Online <br />
          Gift store
        </h1>
        <p>
          An E-commerce gift store built with React.js with all
          <br /> the required features from searching, filtering and sorting{" "}
          <br />
          products to adding them to a cart, setting quantities
          <br /> and so on.
        </p>
        <div className="project-btn">
          <a
            className="visit"
            href="https://wrapsy.now.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit
          </a>
          <a
            id="github"
            href="https://github.com/Aadi-27/secondapp-frontend"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default LeftWork;

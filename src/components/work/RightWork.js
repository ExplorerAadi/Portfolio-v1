import React from "react";

const RightWork = () => {
  return (
    <div className="section-fill-rightImg others">
      <div className="project-content">
        <h1>
          Spot <span>-</span> Mark your <br />
          favourite spots
        </h1>
        <p>
          Spot is a geolocation bookmark app that lets you
          <br /> mark your favourite spots on the map as you visit them and{" "}
          <br />
          let you save them incase if you decide to visit them later.
        </p>
        <div className="project-btn">
          <a
            className="visit"
            href="https://stop-n-spot.herokuapp.com/"
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
      <div className="project-img">
        <video src={spotGif} width="535" height="328" loop autoPlay>
          Your browser does not support the video tag
        </video>
        <img src={wrapsyImg} alt="A Laptop mockup" />
      </div>
    </div>
  );
};

export default RightWork;

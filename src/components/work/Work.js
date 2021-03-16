import React from "react";
import "./work.css";
import wrapsyImg from "../../media/lappyCut2.png";
import WrapsyGif from "../../media/wrapsyGif.mp4";
import spotGif from "../../media/spotGif.mp4";
import snakeGif from "../../media/snakeGame.mp4";
import SectionBreak from "../../common/sectionBreak";
import LeftWork from "./LeftWork";
import RightWork from "./RightWork";

const Work = () => {
  return (
    <main>
      <Intro />
      <section id="projects" className="project-section">
        <SectionBreak />
        <LeftWork />
        <RightWork />
        <div className="section-fill-leftImg others">
          <div className="project-img">
            <video src={snakeGif} width="535" height="328" loop autoPlay>
              Your browser does not support the video tag
            </video>
            <img src={wrapsyImg} alt="A Laptop mockup" />
          </div>
          <div className="project-content">
            <h1>
              Snake Rumble <span>-</span> Multiplayer <br />
              Snake Battle
            </h1>
            <p>
              A Multiplayer Snake Game that takes the famous snake game <br />
              of 90s to a next level and lets you play catch and win <br />
              with your opponents snake before timer runs out.
            </p>
            <div className="project-btn">
              <a
                className="visit"
                id="disable"
                href="https://github.com/Aadi-27/multiplayerSnakeGame"
              >
                In Progress
              </a>
              <a
                id="github"
                href="https://github.com/Aadi-27/multiplayerSnakeGame"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Work;

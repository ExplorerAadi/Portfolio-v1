import React, { Component } from "react";
import myPic from "../../media/profile.jpg";
import "./about.css";
// import polygon from '../../media/polygonBlue.png'

export class About extends Component {
  render() {
    return (
      <section id="about">
        <div className="section-break">
          <h1>About Me</h1>
        </div>
        <div className="section-fill-about">
          <div id="about-content">
            <p>
              Hello! I'm Aditya Raj, a Fullstack Web Developer based in
              Bangalore, India <br />
              with a love and passion for creating beautiful and smooth <br />{" "}
              User Experiences using the latest web technologies.
            </p>
            <p>
              After dropping out of college, I dived into Web Development and{" "}
              <br />
              have been working on real-world projects with amazing people since
              then.
            </p>
            <p>Here are a few technologies I'm proficient in:</p>
            <ul>
              <li>HTML {"&"} (S)CSS</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React.js</li>
              <li>Node.js</li>
              <li>MongoDB</li>
            </ul>
          </div>
          <div id="about-img">
            <img src={myPic} alt="The author" />
          </div>
        </div>
      </section>
    );
  }
}

export default About;

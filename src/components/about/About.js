import React, { Component } from "react";
import myPic from "../../media/profile.jpg";
import "./about.css";
// import polygon from '../../media/polygonBlue.png'

export class About extends Component {
    render() {
        return (
            <section id='about'>
                <div className='section-break'>
                    <h1>About Me</h1>
                </div>
                <div className='section-fill-about'>
                    <div id='about-content'>
                        <p>
                            Hello! I'm Aditya Raj, a Fullstack Web Developer
                            based in Bangalore, India <br />
                            who loves to build scalable Web Apps with efficient
                            backends and <br />
                            clean User Interface using the latest web
                            technologies.
                        </p>
                        <p>
                            After dropping out of college, I dived into Web
                            Development and <br />
                            have been working on cool projects with amazing
                            people since then.
                        </p>
                        <p>Here are a few technologies I'm proficient in:</p>
                        <ul>
                            <li>HTML {"&"} (S)CSS</li>
                            <li>JavaScript (ES6+)</li>
                            <li>React.js</li>
                            <li>Node.js</li>
                            <li>MongoDB</li>
                            <li>Express</li>
                        </ul>
                    </div>
                    <div id='about-img'>
                        <img src={myPic} alt='The author' />
                    </div>
                </div>
            </section>
        );
    }
}

export default About;

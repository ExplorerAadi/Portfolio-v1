import React, { Component } from "react";
import "./work.css";
import boyPhone from "../../media/illustration.svg";
import wrapsyImg from "../../media/lappyCut.png";
import myPic from "../../media/profile.jpg";

export class Work extends Component {
    render() {
        return (
            <main>
                <section id='sec-1'>
                    <div id='left-sec-1'>
                        <h1>
                            I'm <span>Aditya</span> - I build <br />
                            scalable <span>web apps</span> with
                            <br />
                            <span>eye-catching</span> UI.
                        </h1>
                        <button>View my Work</button>
                    </div>
                    <div id='right-sec-1'>
                        <img
                            src={boyPhone}
                            alt='A Standing Boy Illustration'
                            width='540px'
                            height='740px'
                        />
                    </div>
                </section>
                <div className='section-break'>
                    <hr />
                    <h1>Some Apps I've built</h1>
                    <hr />
                </div>
                <section id='sec-2' className='project-sec-leftImg'>
                    <div className='project-img'>
                        <img src={wrapsyImg} alt='Project Image' />
                    </div>
                    <div className='project-content'>
                        <h2>
                            Wrapsy - An Online <br />
                            gift store
                        </h2>
                        <p>
                            An E-commerce gift store built with React.js with
                            all
                            <br /> the required features from searching,
                            filtering and sorting <br />
                            products to adding them to a cart, setting
                            quantities
                            <br /> and so on.
                        </p>
                        <div className='project-btn'>
                            <a>
                                <p>View</p>
                                <span>yayy</span>
                            </a>
                        </div>
                    </div>
                </section>
                <section className='project-sec-rightImg'>
                    <div className='project-content'>
                        <h2>
                            Wrapsy - An Online <br />
                            gift store
                        </h2>
                        <p>
                            An E-commerce gift store built with React.js <br />
                            with all the required features from searching,{" "}
                            <br />
                            filtering and sorting products to adding them <br />
                            to a cart, setting quantities and so on.
                        </p>
                        <div className='project-btn'>
                            <a>
                                <p>View</p>
                                <span>yayy</span>
                            </a>
                        </div>
                    </div>
                    <div className='project-img'>
                        <img src={wrapsyImg} alt='Project Image' />
                    </div>
                </section>
                <section className='project-sec-leftImg'>
                    <div className='project-img'>
                        <img src={wrapsyImg} alt='Proejct Image' />
                    </div>
                    <div className='project-content'>
                        <h2>
                            Wrapsy - An Online <br />
                            gift store
                        </h2>
                        <p>
                            An E-commerce gift store built with React.js <br />
                            with all the required features from searching,{" "}
                            <br />
                            filtering and sorting products to adding them <br />
                            to a cart, setting quantities and so on.
                        </p>
                        <div className='project-btn'>
                            <a>
                                <p>View</p>
                                <span>yayy</span>
                            </a>
                        </div>
                    </div>
                </section>
                <div className='section-break'>
                    <hr />
                    <h1>About Me</h1>
                    <hr />
                </div>
                <section id='about'>
                    <div id='about-content'>
                        <p>
                            Hello! I'm Aditya, a Fullstack Web Developer based
                            in Bangalore, India <br />
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
                            <br /> Here are a few technologies I'm proficient
                            in:
                        </p>
                        <ul>
                            <li>JavaScript (ES6+)</li>
                            <li>React.js</li>
                            <li>Node.js</li>
                            <li>HTML {"&"} (S)CSS</li>
                            <li>MongoDB</li>
                            <li>Express</li>
                        </ul>
                    </div>
                    <div id='about-img'>
                        <img src={myPic} alt='The author' />
                    </div>
                </section>
                <div className='section-break'>
                    <hr />
                    <h1>Get in Touch</h1>
                    <hr />
                </div>
                <section>
                    <p>
                        Want me to work on your project or your team? <br />
                        My inbox is always open whether it's for a potential
                        client, <br />a recruiter or to simply drop and say hi!
                    </p>
                </section>
            </main>
        );
    }
}

export default Work;

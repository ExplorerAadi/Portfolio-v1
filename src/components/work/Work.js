import React, { Component } from "react";
import "./work.css";
import boyPhone from "../../media/illustration.svg";
import wrapsyImg from "../../media/lappyCut2.png";
import WrapsyGif from "../../media/wrapsyGif.mp4";
import About from "../about/About";
import Contact from "../contact/Contact";

export class Work extends Component {
    render() {
        return (
            <main>
                <section id='home'>
                    <div id='left-home'>
                        <h1>
                            I'm <span>Aditya</span> - I build <br />
                            scalable <span>web apps</span> with
                            <br />
                            <span>eye-catching</span> UI.
                        </h1>
                        <a href='#projects'>View my Work</a>
                    </div>
                    <div id='right-home'>
                        <img
                            src={boyPhone}
                            alt='A Standing Boy Illustration'
                            width='540px'
                            height='740px'
                        />
                    </div>
                </section>
                <section id='projects' className='project-section'>
                    <div className='section-break'>
                        <h1>Some Apps I've built</h1>
                    </div>
                    <div className='section-fill-leftImg'>
                        <div className='project-img'>
                            <video
                                src={WrapsyGif}
                                width='535'
                                height='328'
                                loop
                                autoPlay
                            >
                                Your browser does not support the video tag
                            </video>
                            <img src={wrapsyImg} alt='A Laptop mockup' />
                        </div>
                        <div className='project-content'>
                            <h1>
                                Wrapsy <span>-</span> Online <br />
                                Gift store
                            </h1>
                            <p>
                                An E-commerce gift store built with React.js
                                with all
                                <br /> the required features from searching,
                                filtering and sorting <br />
                                products to adding them to a cart, setting
                                quantities
                                <br /> and so on.
                            </p>
                            <div className='project-btn'>
                                <a
                                    id='visit'
                                    href='https://wrapsy.now.sh/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    Visit
                                </a>
                                <a
                                    id='github'
                                    href='https://github.com/Aadi-27/secondapp-frontend'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    Github
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* <div className='section-fill-rightImg'>
                        <div className='project-content'>
                            <h2>
                                Wrapsy - An Online <br />
                                gift store
                            </h2>
                            <p>
                                An E-commerce gift store built with React.js
                                with all
                                <br /> the required features from searching,
                                filtering and sorting <br />
                                products to adding them to a cart, setting
                                quantities
                                <br /> and so on.
                            </p>
                            <div className='project-btn'>
                                <a>View</a>
                            </div>
                        </div>
                        <div className='project-img'>
                            <img src={wrapsyImg} alt='Project Image' />
                        </div>
                    </div>
                    <div className='section-fill-leftImg'>
                        <div className='project-img'>
                            <img src={wrapsyImg} alt='Project Image' />
                        </div>
                        <div className='project-content'>
                            <h2>
                                Wrapsy - An Online <br />
                                gift store
                            </h2>
                            <p>
                                An E-commerce gift store built with React.js
                                with all
                                <br /> the required features from searching,
                                filtering and sorting <br />
                                products to adding them to a cart, setting
                                quantities
                                <br /> and so on.
                            </p>
                            <div className='project-btn'>
                                <a>View</a>
                            </div>
                        </div>
                    </div> */}
                </section>
                <About />
                <Contact />
            </main>
        );
    }
}

export default Work;

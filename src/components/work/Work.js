import React, { Component } from "react";
import "./work.css";
import boyPhone from "../../media/illustration.svg";
import wrapsyImg from "../../media/lappyCut2.png";
import WrapsyGif from "../../media/wrapsyGif.mp4";
import spotGif from "../../media/spotGif.mp4";
import snakeGif from "../../media/snakeGame.mp4";
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
                    <div className='section-fill-leftImg first-project'>
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
                                    className='visit'
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

                    <div className='section-fill-rightImg others'>
                        <div className='project-content'>
                            <h1>
                                Spot <span>-</span> Mark your <br />
                                favourite spots
                            </h1>
                            <p>
                                Spot is a geolocation bookmark app that lets you
                                <br /> mark your favourite spots on the map as
                                you visit them and <br />
                                let you save them incase if you decide to visit
                                them later.
                            </p>
                            <div className='project-btn'>
                                <a
                                    className='visit'
                                    href='https://stop-n-spot.herokuapp.com/'
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
                        <div className='project-img'>
                            <video
                                src={spotGif}
                                width='535'
                                height='328'
                                loop
                                autoPlay
                            >
                                Your browser does not support the video tag
                            </video>
                            <img src={wrapsyImg} alt='A Laptop mockup' />
                        </div>
                    </div>

                    <div className='section-fill-leftImg others'>
                        <div className='project-img'>
                            <video
                                src={snakeGif}
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
                                Snake Rumble <span>-</span> Multiplayer <br />
                                Snake Battle
                            </h1>
                            <p>
                                A Multiplayer Snake Game that takes the famous
                                snake game <br />
                                of 90s to a next level and lets you play catch
                                and win <br />
                                with your opponents snake before timer runs out.
                            </p>
                            <div className='project-btn'>
                                <a
                                    className='visit'
                                    id='disable'
                                    href='https://github.com/Aadi-27/multiplayerSnakeGame'
                                >
                                    In Progress
                                </a>
                                <a
                                    id='github'
                                    href='https://github.com/Aadi-27/multiplayerSnakeGame'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    Github
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <About />
                <Contact />
            </main>
        );
    }
}

export default Work;

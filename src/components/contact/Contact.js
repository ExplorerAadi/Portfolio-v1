import React, { Component } from "react";
import "./contact.css";

export class Contact extends Component {
    render() {
        return (
            <section id='contact'>
                <div className='section-break'>
                    <hr id='contact-first-hr' />
                    <h1>Get in Touch</h1>
                    <hr id='contact-second-hr' />
                </div>
                <div className='section-fill-contact'>
                    <p>
                        Want me to work on your project or your team ? <br />
                        My inbox is always open whether it's for a potential
                        client, <br />a recruiter or to simply drop for a chat.
                    </p>
                    <a href='mailto:rajaditya27145@gmail.com' id='email'>
                        Say Hi
                    </a>
                    <div id='social-media'>
                        <p>
                            <a
                                href='https://www.instagram.com/thewhisperertalks/'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                Instagram
                            </a>
                        </p>
                        <p>
                            <a
                                href='https://twitter.com/exploreraadi'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                Twitter
                            </a>
                        </p>
                        <p>
                            <a
                                href='https://www.linkedin.com/in/exploreraadi'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                LinkedIn
                            </a>
                        </p>
                    </div>

                    <p id='footer'>Developed by Aditya Raj</p>
                </div>
            </section>
        );
    }
}

export default Contact;

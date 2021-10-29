import React from "react";
import "./about.css";
import myPic from "../../media/me3.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
// import polygon from '../../media/polygonBlue.png'

const About = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <section id="about">
      <div className="section-break">
        <h1>About Me</h1>
      </div>
      <div className="section-fill-about" ref={ref}>
        <motion.div
          id="about-img"
          initial={{ x: -200, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: -200, opacity: 0 }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
        >
          <img src={myPic} alt="The author" />
        </motion.div>
        <motion.div
          id="about-content"
          initial={{ x: 200, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: 200, opacity: 0 }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
        >
          <p>
            Hello! I'm Aditya Raj, a Web Developer based in Bangalore, India
            with a love and passion for creating beautiful and smooth User
            Experiences using the latest web technologies.
          </p>
          <p>
            After dropping out of college, I dived into Web Development and have
            been working on real-world projects with amazing people since then.
            <br /> Currently working at 
            <a className="tech-blog-link" href="https://www.useplaza.com/">
              Plaza
            </a>
            and sharing all the learnings in my{" "}
            <a className="tech-blog-link" href="https://blog.exploreraadi.com/">
              Tech Blog
            </a>
            .
          </p>
          <p>Here are a few technologies I'm proficient in:</p>
          <ul>
            <li>HTML {"&"} (S)CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React.js</li>
            <li>Next.js</li>
            <li>Electron</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

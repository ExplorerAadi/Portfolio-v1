import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const LeftWork = ({ id, title, slogan, gif, desc, liveLink, githubLink }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div
      className={`section-fill-leftImg ${
        id === 1 ? "first-project" : "others"
      }`}
      ref={ref}
    >
      <motion.div
        className="project-img-container"
        initial={{ x: -200, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : { x: -200, opacity: 0 }}
        transition={{
          duration: 0.9,
          ease: "easeOut",
        }}
      >
        <div className="project-img">
          <video src={gif} loop autoPlay>
            Your browser does not support the video tag
          </video>
          {/* <img src={wrapsyImg} alt="A Laptop mockup" /> */}
        </div>
      </motion.div>
      <motion.div
        className="project-content"
        initial={{ x: 200, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : { x: 200, opacity: 0 }}
        transition={{
          delay: "0.3",
          duration: 0.9,
          ease: "easeOut",
        }}
      >
        <h1>
          {title} <span>-</span> {slogan}
        </h1>
        <p>{desc}</p>
        <div className="project-btn">
          <a
            className="visit"
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit
          </a>
          <a
            id="github"
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default LeftWork;

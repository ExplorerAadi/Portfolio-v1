import React from "react";
import boyPhone from "../../media/illustration.svg";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <section id="home">
      <motion.div
        id="left-home"
        initial={{ x: -150, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: "0.3",
          duration: 0.9,
          ease: "easeOut",
        }}
      >
        <h1>
          I'm <span>Aditya</span> - I build <br />
          scalable <span>web apps</span> with
          <br />
          <span>smooth</span> UX.
        </h1>
        <a href="#projects">View my Work</a>
      </motion.div>
      <motion.div
        id="right-home"
        initial={{ x: 150, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <img
          src={boyPhone}
          alt="A Standing Boy Illustration"
          width="530px"
          height="740px"
        />
      </motion.div>
    </section>
  );
};
export default Intro;

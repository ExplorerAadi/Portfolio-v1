import React from "react";
import boyPhone from "../../media/illustration.svg";

const Intro = () => {
  return (
    <section id="home">
      <div id="left-home">
        <h1>
          I'm <span>Aditya</span> - I build <br />
          scalable <span>web apps</span> with
          <br />
          <span>smooth</span> UX.
        </h1>
        <a href="#projects">View my Work</a>
      </div>
      <div id="right-home">
        <img
          src={boyPhone}
          alt="A Standing Boy Illustration"
          width="540px"
          height="740px"
        />
      </div>
    </section>
  );
};
export default Intro;

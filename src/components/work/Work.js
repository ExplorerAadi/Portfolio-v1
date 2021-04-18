import React from "react";
import "./work.css";
import Intro from "../intro/Intro";
import ProjectsData from "../../common/projectsData.json";
import SectionBreak from "../../common/sectionBreak";
import LeftWork from "./LeftWork";
import RightWork from "./RightWork";
import wrapsyGif from "../../media/wrapsyGif.mp4";
import dropySS from "../../media/dropySS.png";
import spotGif from "../../media/spotGif.mp4";

const Work = () => {
  const WRAPSY_DATA = ProjectsData.projects[0];
  const DROPY_DATA = ProjectsData.projects[1];
  const SPOT_DATA = ProjectsData.projects[2];
  return (
    <main>
      <Intro />
      <section id="projects" className="project-section">
        <SectionBreak />
        <LeftWork
          id={WRAPSY_DATA.id}
          title={WRAPSY_DATA.title}
          slogan={WRAPSY_DATA.slogan}
          gif={wrapsyGif}
          desc={WRAPSY_DATA.desc}
          liveLink={WRAPSY_DATA.liveLink}
          githubLink={WRAPSY_DATA.githubLink}
        />
        <RightWork
          id={DROPY_DATA.id}
          title={DROPY_DATA.title}
          slogan={DROPY_DATA.slogan}
          gif={dropySS}
          desc={DROPY_DATA.desc}
          liveLink={DROPY_DATA.liveLink}
          githubLink={DROPY_DATA.githubLink}
        />
        <LeftWork
          id={SPOT_DATA.id}
          title={SPOT_DATA.title}
          slogan={SPOT_DATA.slogan}
          gif={spotGif}
          desc={SPOT_DATA.desc}
          liveLink={SPOT_DATA.liveLink}
          githubLink={SPOT_DATA.githubLink}
        />
        {/* {data.map((project) =>
          project.id % 2 ? (
            <LeftWork
              id={project.id}
              title={project.title}
              slogan={project.slogan}
              gif={project.gif}
              desc={project.desc}
              liveLink={project.liveLink}
              githubLink={project.githubLink}
            />
          ) : (
            <RightWork
              id={project.id}
              title={project.title}
              slogan={project.slogan}
              gif={project.gif}
              desc={project.desc}
              liveLink={project.liveLink}
              githubLink={project.githubLink}
            />
          )
        )} */}
      </section>
    </main>
  );
};

export default Work;

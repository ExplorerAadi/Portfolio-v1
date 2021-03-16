import React from "react";
import Header from "./components/header/Header";
import Work from "./components/work/Work";
import About from "../about/About";
import Contact from "../contact/Contact";

const App = () => {
  return (
    <div>
      <Header />
      <Intro />
      <About />
      <Contact />
    </div>
  );
};

export default App;

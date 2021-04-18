import React from "react";
import Header from "./components/header/Header";
import Work from "./components/work/Work";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <div>
      <Header />
      <Work />
      <About />
      <Contact />
    </div>
  );
};

export default App;

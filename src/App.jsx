import React from "react";
import Nav from "./Components/Nav";
import Header from "./Components/Header";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="bg-bgcol   ">
      <Nav />
      <Header />
      <About />
      <Projects />
       <Contact />
      <Footer /> 
    </div>
  );
};

export default App;

import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Catering from "./components/Catering";
import About from "./components/About";
import Contact from "./components/Contact";
import Leaf from "./components/Leaf";
import "./App.css";


function App() {
  const [leafCount, setLeafCount] = useState(25);
  const leaves = [];

  useEffect(() => {
    const screenWidth = window.innerWidth;
    const leafCountValue = screenWidth < 768 ? 15 : 25; // Reduce the leaf count for mobile screens
    setLeafCount(leafCountValue);
  }, []);

  for (let i = 0; i < leafCount; i++) {
    leaves.push(<Leaf key={i} />);
  }
  return (
    <div className=" h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden ">

      <div className="absolute inset-0 overflow-hidden">{leaves}</div>


      <section id="header" className="snap-start">
        <Header />
      </section>

      <section id="menu" className="snap-center">
        <Menu />
      </section>
      <section id="catering" className="snap-center">
        <Catering />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="contact" className="snap-start">
        <Contact />
      </section>
      <a href="#header">
        <footer className="sticky bottom-5 w-full cursor-pointer ">
          <div className="flex items-center justify-between">
            <img
              src="https://cdn-icons-png.flaticon.com/512/7604/7604589.png"
              alt=""
              className="h-10 w-10 rounded-full grayscale hover:grayscale-0"
            />

          </div>
        </footer>
      </a>


    </div>
  );
}

export default App;

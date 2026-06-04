import { useState } from "react";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Feedback from "./components/Feedback";
import ProjectUpdates from "./components/ProjectUpdates";
import ScrollProgress from "./components/ScrollProgress";
import Skills from "./components/Skills";

function App() {
  // const [darkMode, setDarkMode] = useState(true);
  const [theme, setTheme] = useState("dark");

  return (
    <div className={`${theme}-theme`}>
      <ScrollProgress />

      <Navbar theme={theme} setTheme={setTheme} />
      <Header message={`Welcom! Here you will know more about me`} />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Feedback />
      <ProjectUpdates />
      <Footer />
    </div>
  );
}

export default App;

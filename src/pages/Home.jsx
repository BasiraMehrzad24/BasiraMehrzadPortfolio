import Header from "../components/Header";
import About from "../pages/About";
import Skills from "../components/Skills";
import Projects from "../pages/Projects";
import Feedback from "../components/Feedback";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    document.title = "Basira Mehrzad | Frontend Developer";
  }, []);
  return (
    <>
      <Header message="Welcome! Here you will know more about me" />
      <main>
        <About />
        <Skills />
        <Projects />
        <Feedback />
      </main>
    </>
  );
}

export default Home;

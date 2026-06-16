import Header from "../components/Header";
import About from "../pages/About";
import Skills from "../components/Skills";
import Projects from "../pages/Projects";
import Feedback from "../components/Feedback";
import ProjectUpdates from "../components/ProjectUpdates";

function Home() {
  return (
    <>
      <Header message="Welcome! Here you will know more about me" />
      <About />
      <Skills />
      <Projects />
      <Feedback />
      <ProjectUpdates />
    </>
  );
}

export default Home;

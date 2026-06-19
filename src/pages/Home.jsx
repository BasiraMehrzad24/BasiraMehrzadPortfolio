import Header from "../components/Header";
import About from "../pages/About";
import Skills from "../components/Skills";
import Projects from "../pages/Projects";
import Feedback from "../components/Feedback";

function Home() {
  return (
    <>
      <Header message="Welcome! Here you will know more about me" />
      <About />
      <Skills />
      <Projects />
      <Feedback />
    </>
  );
}

export default Home;

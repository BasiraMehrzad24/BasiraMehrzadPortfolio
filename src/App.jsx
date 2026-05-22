import { useState } from "react";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Profile from "./components/Profile";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import basiramehrzad from "./assets/images/basiramehrzad.PNG"

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark-theme" : "light-theme"}>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <Header    message={`useEffect(() => {
  console.log("Welcome to my personal webpage!");}, []);`} />

      <Profile
        image={basiramehrzad}
        title="Frontend Developer"
        bio="I build modern and smooth web apps with a different visual view."
      />

      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
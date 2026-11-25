import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Hero from "./sections/Hero/Hero";
import Profile from "./sections/Profile/Profile";
import About from "./sections/About/About";
import TechStack from "./sections/TechStack/TechStack";
import Projects from "./sections/Projects/Projects";
import Education from "./sections/Education/Education";
import Experience from "./sections/Experience/Experience";
import Contact from "./sections/Contact/Contact";

import "./App.css";

function App() {
  return (
    <>
      <Header />

      <main className="container">
        <div className="bento-grid">
          <Hero />

          <Profile />

          <About />

          <TechStack />

          <Projects />

          <Education />

          <Experience />

          <Contact />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;

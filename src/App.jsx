import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Card from "./components/Card/Card";

import Hero from "./sections/Hero/Hero";
import Profile from "./sections/Profile/Profile";
import About from "./sections/About/About";
import TechStack from "./sections/TechStack/TechStack";
import Projects from "./sections/Projects/Projects";
import Education from "./sections/Education/Education";
import Experience from "./sections/Experience/Experience";

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

          <Card className="contact" id="contato">
            <h2>Contato</h2>

            <p>Vamos criar algo juntos?</p>
          </Card>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;

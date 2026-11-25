import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Card from "./components/Card/Card";

import Hero from "./sections/Hero/Hero";
import Profile from "./sections/Profile/Profile";
import About from "./sections/About/About";
import TechStack from "./sections/TechStack/TechStack";

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

          <Card className="projects" id="projetos">
            <h2>Projetos</h2>

            <p>Ideias em construção.</p>
          </Card>

          <Card className="education" id="formacao">
            <h2>Formação</h2>
          </Card>

          <Card className="experience" id="experiencia">
            <h2>Experiência</h2>
          </Card>

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

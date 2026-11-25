import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Card from "./components/Card/Card";
import TechTag from "./components/TechTag/TechTag";
import SectionHeading from "./components/SectionHeading/SectionHeading";

import Hero from "./sections/Hero/Hero";
import Profile from "./sections/Profile/Profile";

import "./App.css";

function App() {
  return (
    <>
      <Header />

      <main className="container">
        <div className="bento-grid">
          <Hero />

          <Profile />

          <Card className="about" id="sobre">
            <h2>Sobre mim</h2>

            <p>Minha trajetória profissional.</p>
          </Card>

          <Card className="tech-stack">
            <SectionHeading
              label="02 / Tech Stack"
              title="Tecnologias."
              description="Ferramentas que estudo e utilizo."
            />

            <div className="component-test">
              <TechTag name="HTML5" />
              <TechTag name="CSS3" />
              <TechTag name="JavaScript" />
              <TechTag name="React" />
              <TechTag name="Python" />
              <TechTag name="Git" />
            </div>
          </Card>

          <Card className="projects" id="projetos">
            <h2>Projetos</h2>

            <p>Ideias em construção.</p>
          </Card>

          <Card className="education">
            <h2>Formação</h2>
          </Card>

          <Card className="experience">
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

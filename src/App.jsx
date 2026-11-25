import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Card from "./components/Card/Card";

import "./App.css";

function App() {
  return (
    <>
      <Header />

      <main className="container">
        <div className="bento-grid">
          <Card className="hero">
            <h1>Ladislau Bertoldo.</h1>
            <p>Desenvolvedor de Software</p>
          </Card>

          <Card className="profile">
            <h2>Foto profissional</h2>
          </Card>

          <Card className="about">
            <div id="sobre">
              <h2>Sobre mim</h2>
              <p>Minha trajetória profissional.</p>
            </div>
          </Card>

          <Card className="tech-stack">
            <h2>Tecnologias</h2>
            <p>Minha stack de desenvolvimento.</p>
          </Card>

          <Card className="projects">
            <div id="projetos">
              <h2>Projetos</h2>
              <p>Ideias em construção.</p>
            </div>
          </Card>

          <Card className="education">
            <h2>Formação</h2>
          </Card>

          <Card className="experience">
            <h2>Experiência</h2>
          </Card>

          <Card className="contact">
            <div id="contato">
              <h2>Contato</h2>
              <p>Vamos criar algo juntos?</p>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;

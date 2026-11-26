import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import ScrollProgress from "./components/ScrollProgress/ScrollProgress";
import BackToTop from "./components/BackToTop/BackToTop";

import Hero from "./sections/Hero/Hero";
import Profile from "./sections/Profile/Profile";
import About from "./sections/About/About";
import TechStack from "./sections/TechStack/TechStack";
import Projects from "./sections/Projects/Projects";
import Education from "./sections/Education/Education";
import Experience from "./sections/Experience/Experience";
import Contact from "./sections/Contact/Contact";

import useTheme from "./hooks/useTheme";
import usePageNavigation from "./hooks/usePageNavigation";

import "./App.css";

function App() {
  const { theme, toggleTheme } = useTheme();

  const { activeSection, progress, showBackToTop } = usePageNavigation();

  return (
    <>
      <a className="skip-link" href="#main-content">
        Pular para o conteúdo
      </a>

      <div className="site-header">
        <Header
          theme={theme}
          onToggleTheme={toggleTheme}
          activeSection={activeSection}
        />

        <ScrollProgress progress={progress} />
      </div>

      <main className="container" id="main-content" tabIndex={-1}>
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

      <BackToTop visible={showBackToTop} />
    </>
  );
}

export default App;

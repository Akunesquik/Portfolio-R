import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
function App() {
  return (
    <>
      <Navbar />
      <section id="home" style={{ width: '100%' , padding: '2rem' }}>
        <Home />
      </section>
      <section id="about" style={{ padding: '2rem' }}>
        <About />
      </section>
      <section id="projects" style={{padding: '2rem' }}>
        <Projects />
      </section>
      <section id="contact" style={{padding: '2rem' }}>
        <Contact />
      </section>
    </>
  );
}

export default App;
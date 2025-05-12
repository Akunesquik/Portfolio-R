import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
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
        <h1>Mes projets</h1>
      </section>
    </>
  );
}

export default App;
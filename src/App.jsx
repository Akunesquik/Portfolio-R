import Navbar from './components/Navbar';
import Home from './components/Home';
function App() {
  return (
    <>
      <Navbar />
      <section id="home" style={{ width: '100%' ,height: '100vh', padding: '2rem' }}>
        <Home />
      </section>
      <section id="about" style={{ height: '100vh', padding: '2rem' }}>
        <h1>À propos</h1>
      </section>
      <section id="projects" style={{ height: '100vh', padding: '2rem' }}>
        <h1>Mes projets</h1>
      </section>
    </>
  );
}

export default App;
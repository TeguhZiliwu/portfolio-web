import './assets/styles/main.css';
import Header from './layouts/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Client from './components/Client';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './layouts/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Client />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

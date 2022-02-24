import './App.css';
import 'jquery';
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from './components/Navbar';
import { Header } from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About/>
      <Projects />
      <Education/>
      <Skills/>
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;

import './App.css';
import 'jquery';
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from './components/Navbar';
import { Header } from './components/Header';
import Particles from "react-tsparticles";
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';

function App() {
  return (
    <div className="App">
      <Particles
        id="tsparticles"
      canvasClassName='class-particle'
        options={{
          fullScreen: { enable: false, zIndex: 0 },
          fpsLimit: 60,
          particles: {
            color: {
              value: "#fa9b00",
            },
            size:{
              value:3
            },
            opacity:{
              value:0.30
            },
            links: {
              enable: true,
              color: "#fa9b00",
              distance: 150,
              opacity: 0.30
            },
            move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 2,
            straight: false,
          },
            number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          },
          detectRetina: true,
        }} />
      <Navbar />
      <Header />
      <About/>
      <Projects />
      <Education/>
    </div>
  );
}

export default App;

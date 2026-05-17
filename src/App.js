import './App.css';
import About from './components/About';
import Hero from './components/Hero';
import MySkills from './components/MySkills';
import Navbar from './components/Navbar';
import MyProject from './components/MyProject';
import ContactMe from './components/ContactMe'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Hero />
     <About />
     <MySkills />
     <MyProject />
     <ContactMe />
     <Footer />
    </div>
  );
}

export default App;

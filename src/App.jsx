import styles from './App.module.css';
import {Navbar} from './components/Navbar/Navbar';
import {About} from './components/About/About';
import {Hero} from './components/Hero/Hero';
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";



function App() {

  return (
    <>
     <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />

     </div>
    </>
  )
}

export default App

import Home from "./components/mobile/Home";
import Header from "./components/mobile/Header";
import NavMenu from "./components/mobile/NavMenu";
import About from "./components/mobile/About";
import Contact from "./components/mobile/Contact";
import Resume from "./components/mobile/Resume";
import Projects from "./components/mobile/Projects";
import Skills from "./components/mobile/Skills";
import { useState } from "react";
import {Routes, Route} from 'react-router-dom'
import { me, categories } from './utils/personalData'

function App() {
  const [navOpen, setNavOpen] = useState(false);

  function handleNav() {
    setNavOpen(!navOpen);
  }
  

  return (
    <div className="app-container">
      <Header navOpen={navOpen} handleNav={handleNav} />
      {navOpen === true ? <NavMenu setNavOpen={setNavOpen} categories={categories}/> : (
        <Routes>
          <Route
            path='*'
            element={<Home me={me} categories={categories}/>}
          />
          <Route
            path='/about'
            element={<About />}
          />
          <Route
            path='/skills'
            element={<Skills />}
          />
          <Route
            path='/resume'
            element={<Resume />}
          />
          <Route
            path='/projects'
            element={<Projects />}
          />
          <Route
            path='/contact'
            element={<Contact me={me} />}
          />
        </Routes>
      )}
      
    </div>
  );
}

export default App;

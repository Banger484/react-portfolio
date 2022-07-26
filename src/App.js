import Home from "./components/Home";
import Header from "./components/Header";
import NavMenu from "./components/NavMenu";
import About from "./components/About";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { useState } from "react";
import {Routes, Route} from 'react-router-dom'

function App() {
  const [navOpen, setNavOpen] = useState(false);

  function handleNav() {
    setNavOpen(!navOpen);
  }
  

  const categories = [
    { title: 'About', description: 'Learn a little bit about me', route: 'about' },
    { title: 'Skills', description: 'Check out my technical skills', route: 'skills'  },
    { title: 'Projects', description: "Take a look at some things I've built", route: 'projects'  },
    { title: 'Contact', description: "Feel free to connect with me", route: 'contact'  },
    { title: 'Resume', description: 'View my Resume', route: 'resume' }
  ]

  const me = {
    firstName: "Bret",
    lastName: "Banger",
    title: "Web Developer",
    area: "Front End Developer",
    proficient: "React JS / JavaScript",
    email: "Banger484@gmail.com",
    github: "https://github.com/Banger484"
  };

  return (
    <div className="app-container">
      <Header navOpen={navOpen} handleNav={handleNav} />
      {navOpen === true ? <NavMenu setNavOpen={setNavOpen} categories={categories}/> : (
        <Routes>
          <Route
            path='react-portfolio/'
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

import Home from "./components/Home";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import { useState, useEffect } from "react";
import {Routes, Route} from 'react-router-dom'

import "./App.css";
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
  };

  return (
    <div className="app-container">
      <Header navOpen={navOpen} handleNav={handleNav} />
      {navOpen === true ? <SideMenu categories={categories}/> : (
        <Routes>
          <Route
            path='/'
            element={<Home me={me} categories={categories}/>}
          />
        </Routes>
      )}
      
    </div>
  );
}

export default App;

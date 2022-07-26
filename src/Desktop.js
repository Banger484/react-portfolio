import { useState } from 'react'
import { me, categories } from './utils/personalData'

import Home from './components/desktop/Home'
import About from './components/desktop/About'
import Skills from './components/desktop/Skills'
import Projects from './components/desktop/Projects'

export default function Desktop() {

  const positions = ['p1', 'p2', 'p3', 'p4', 'p5', 'p6']

  const [componentPositions, setComponentPoitions] = useState({
    home: 0,
    about: 1,
    skills: 2,
    projects: 3,
    contact: 4,
    resume: 5,
  })

  function slideLeft() {
    let newPositions = {
      home: componentPositions.resume,
      about: componentPositions.home,
      skills: componentPositions.about,
      projects: componentPositions.skills,
      contact: componentPositions.projects,
      resume: componentPositions.contact
    }

    setComponentPoitions(newPositions)
  }
  function slideRight() {
    let newPositions = {
      home: componentPositions.about,
      about: componentPositions.skills,
      skills: componentPositions.projects,
      projects: componentPositions.contact,
      contact: componentPositions.resume,
      resume: componentPositions.home
    }

    setComponentPoitions(newPositions)
  }

  return (
    <div className='desktop-container'>
      <div className={`window section1 ${positions[componentPositions.home]}`}>
        <Home me={me} />
      </div>
      <div className={`window section2 ${positions[componentPositions.about]}`}>
        <About />
      </div>
      <div className={`window section3 ${positions[componentPositions.skills]}`}>
        <Skills />
      </div>
      <div className={`window section4 ${positions[componentPositions.projects]}`}>
        <Projects />
      </div>
      <div className={`window section5 ${positions[componentPositions.contact]}`}></div>
      <div className={`window section6 ${positions[componentPositions.resume]}`}></div>
      <button onClick={slideLeft} className='left-button'>Left</button>
      <button onClick={slideRight} className='right-button'>Right</button>
    </div>
  )
}

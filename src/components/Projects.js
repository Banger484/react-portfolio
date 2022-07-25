import Project from "./Project";
import { projects } from '../utils/projectData'
import { useState } from 'react'    


export default function Projects() {

    const [projectIndex, setProjectIndex] = useState(0)
    const [slideClass, setSlideClass] = useState('') 

    function handleClick (e) {
        setSlideClass('')
        let direction = e.target.name
        let currentIndex = projectIndex
        let endingIndex = projects.length - 1

        if(direction === 'next') {
            if(currentIndex === endingIndex) return setProjectIndex(0)

            setProjectIndex(currentIndex + 1)
        }
        if(direction === 'prev') {
            if(currentIndex === 0) return setProjectIndex(endingIndex)

            setProjectIndex(currentIndex - 1)
        }

    }

  return (
    <div className="projects-container">
      <button name="prev" onClick={handleClick} className={`carousel-button prev`}>&#x3c;</button>
      <button name='next' onClick={handleClick} className={`carousel-button next`}>&#x3e;</button>
      <Project project={projects[projectIndex]} slideClass={slideClass} setSlideClass={setSlideClass}/>
    </div>
  );
}

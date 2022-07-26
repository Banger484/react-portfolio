import { useEffect, useState } from "react";


export default function Project(props) {
  const techListArray = props.project.techList;
  const currentProject = props.project
  useEffect(() => {
    props.setSlideClass('show-slide')
  }, [currentProject])

  return (
    <div className='project-container'>
      <div className='info-card'>
        <h1 className="project-title">{props.project.title}</h1>
        <h3 className="project-subtitle">{props.project.subtitle}</h3>
        <p className="project-details">{props.project.details}</p>
        <h3 className="project-tech-title">{props.project.techTitle}</h3>
        <ul className="project-tech-list">
          {techListArray.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <a href={`${props.project.liveLink}`}>Link to Live Project</a>
        <a href={`${props.project.repoLink}`}>Link to GitHub Repository</a>
      </div>
      <div className="image-container">
      <img className="project-image" src={`/images/screenshots/${props.project.img}.png`} alt="project screenshot" />
      </div>

    </div>
  );
}

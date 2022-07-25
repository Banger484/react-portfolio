import React from 'react'

export default function Skills() {

    const badges = ['js', 'reactjs', 'html5', 'css3']
    const skills = ['JavaScript', 'ReactJS', 'HTML', 'CSS']
    const others = ['GitHub', 'Heroku', 'NodeJS', 'Express', 'SQL', 'jQuery', 'MongoDB', 'Apollo GraphQL', 'Bootstrap', 'MVC', 'Redux']
    return (
        <div className='skills-container'>
            <div className='skill-content'>
                <h1>Technical Skills</h1>
                <p>Over this last year I have had the pleasure of working with many different languages, libraries, and frameworks. After graduating from my Full-Stack Bootcamp, I know that my passion lies with JavaScript and ReactJS in Front-End Development.</p>
                <h2 className='skill-list'>Most Proficient With</h2>
                <ul>
                    {skills.map(skill => {
                        return (<li className='skill-list-item' key={skill}>{skill}</li>)
                    })}
                </ul>
                <h3 className='other-list'>Technologies I have experience with</h3>
                <p className='others'>
                    {others.join(', ')}
                </p>

            </div>
            <div className='badge-container'>
                {badges.map(badge => {
                    return (<img key={badge} classname='skill-badge' src={`./images/badges/${badge}.png`} alt='skill badge' />)
                })}

            </div>
        </div>
    )
}

import React from 'react'
import './Home.css'
import HomeButton from './HomeButton'

export default function Home(props) {

  const categories = [
    { title: 'About', description: 'Learn a little bit about me!' },
    { title: 'Skills', description: 'Check out my technical skils!' },
    { title: 'Projects', description: "Take a look at the things I've built" },
    { title: 'Contact', description: 'Want to get in touch?' }
  ]

  return (
    <div className='home-container'>
      <div className='intro-container'>
      <h1>{props.me.firstName} {props.me.lastName}</h1>
      <h2>{props.me.title}</h2>
      <p>// {props.me.area} //</p>
      <p>// {props.me.proficient} //</p>
      </div>
      <div className='home-buttons-container'>
        {categories.map(category => {
          return <HomeButton title={category.title} description={category.description} />
        })}
      </div>
    </div>
  )
}

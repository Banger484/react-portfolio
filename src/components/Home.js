import React from 'react'
import './Home.css'
import HomeButton from './HomeButton'
import { Link } from 'react-router-dom'

export default function Home(props) {

  

  return (
    <div className='home-container'>
      <div className='intro-container'>
      <h1>{props.me.firstName} {props.me.lastName}</h1>
      <h2>{props.me.title}</h2>
      <p>// {props.me.area} //</p>
      <p>// {props.me.proficient} //</p>
      </div>
      <div className='home-buttons-container'>
        {props.categories.map(category => {
          return <Link key={category.title} to={`/${props.categories.route}`} ><HomeButton key={category.title} title={category.title} description={category.description} /></Link>
        })}
      </div>
    </div>
  )
}

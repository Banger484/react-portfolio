import React from 'react'

export default function Home(props) {
  return (
    <div className='home-container'>
      <h1>{props.me.firstName} {props.me.lastName}</h1>
      <h2>{props.me.title}</h2>
      <p>// {props.me.area} //</p>
      <p>// {props.me.proficient} //</p>
    </div>
  )
}

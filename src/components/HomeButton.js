import React from 'react'

export default function HomeButton(props) {
    return (
        <button className='home-button'>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </button>
    )
}

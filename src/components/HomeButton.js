import React from 'react'

export default function HomeButton(props) {
    return (
        <button className='home-button'>
            <h2>{props.title}</h2>
            <p>// {props.description} //</p>
        </button>
    )
}

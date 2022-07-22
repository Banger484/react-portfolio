import React from 'react'

export default function NavButton(props) {
    return (
        <button className='nav-button'>
            <h2>{props.title}</h2>
            <p>// {props.description} //</p>
        </button>
    )
}

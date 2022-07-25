import React from 'react'
import { Link } from 'react-router-dom'

export default function NavButton(props) {
    return (
        <Link to={props} className='home-links'>
            <button className='nav-button'>
                <h2>{props.title}</h2>
                <p>// {props.description} //</p>
            </button>
        </Link>
    )
}

import React from 'react'
import { Link } from 'react-router-dom'

export default function NavButton(props) {

    const handleCloseNavMenu = () => props.setNavOpen(false)

    return (
        <Link to={`/${props.route}`} className='home-links'>
            <button className='nav-button' onClick={handleCloseNavMenu}>
                <h2>{props.title}</h2>
                <p>// {props.description} //</p>
            </button>
        </Link>
    )
}

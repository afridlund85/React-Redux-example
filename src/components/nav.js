import React from 'react'
import { Link } from 'react-router'

const Nav = () => {
    return (
        <div id="nav">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/count">Count</Link></li>
            </ul>
            <div className="clear"/>
        </div>
    )
}

export default Nav

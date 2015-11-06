import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Nav extends Component {
    render () {
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
}


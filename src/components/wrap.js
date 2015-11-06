import React, { Component } from 'react'
import Nav from './nav'

export default class Wrap extends Component {
    render (){
        return (
            <div id="wrap">
                <h1>React, React Router &amp; Redux example</h1>
                <Nav/>
                { this.props.children }
            </div>
        )
    }
}

import React from 'react'
import Nav from './nav'

const Wrap = (props) => {
    const { children } = props

    return (
        <div id="wrap">
            <h1>React, React Router &amp; Redux example</h1>
            <Nav/>
            { children }
        </div>
    )
}

export default Wrap

import ReactDom from 'react-dom'
import { Router } from 'react-router'
import { Provider } from 'react-redux'
import React from 'react'
import routes from './routes'
import store from './store'

ReactDom.render(
    <Provider store={ store }>
        <Router routes={ routes }/>
    </Provider>,
    document.getElementById('app')
)
